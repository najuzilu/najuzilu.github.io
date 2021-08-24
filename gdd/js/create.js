// Create chart

function createChart(data, pubDebt, prvDebt, view){
	// remove svg if exists
	$("svg#chart").remove();

	var x_indicator = pubDebt;
	var r_indicator = prvDebt;

	// Get data values > needed for scales
	var x_max = d3.max(data, d => d[x_indicator]);
	var x_min = d3.min(data, d => d[x_indicator]);
	var r_max = d3.max(data, d => d[r_indicator]);

	// Get width and set height
	var width = $(".chart").parent().width();
	var height = width / 2;

	var distance = {
		top: 0,
		right: 0.02,
		bottom: 25,
		left: 0.15,
	};

	// Set all other vars
	var svgDistance_x = distance.left * width;
	var svgDistance_y = distance.top;


	// Create SVG element
	var svg = d3.select("body")
		.select(".chart")
		.append("svg")
		.attr("id", "chart")
		.style("width", width)
		.style("height", height)
		.style("overflow", "visible")
		.style("padding-top", "30px")
		.style("background-color", "rgba(240, 240, 240, 0.5)")
	  .append("g")
	  	.attr("class", "allCountries")
	  	.attr("transform", "translate(" + svgDistance_x + "," + svgDistance_y + ")");


	// Create scale for xaxis
	var xDomain_min = 0;
	var xDomain_max = x_max + 50;
	var xRange_min = 0;
	var xRange_max = width - svgDistance_x - (distance.right*width) - (distance.left*width);

	xScale = d3.scaleLinear()
		.domain([xDomain_min, xDomain_max])
		.range([xRange_min, xRange_max]);


	// Create scale for yaxis
	var yDomain_min = 0;
	var yDomain_max = 100;
	var yRange_min = 0;
	var yRange_max = height;

	var yScale = d3.scaleLinear()
		.domain([yDomain_min, yDomain_max])
		.range([yRange_min, yRange_max]);


	// Create scale for radius
	var rDomain_min = 0;
	var rDomain_max = r_max;
	var rRange_min = width / 240;
	var rRange_max = width / 55;

	rScale = d3.scaleSqrt()
		.domain([rDomain_min, rDomain_max])
		.range([rRange_min, rRange_max]);


	// Create x axis
	var tickNo = 5;

	var xAxis = d3.axisTop()
		.scale(xScale)
		.ticks(tickNo, d3.format(',d'))
		.tickFormat(d => d + "%");

	// append x axis
	var labelDistance = 0; //distance of label with axis, gaussian line, dots and tooltip
	var xAxisDistance_x = 0;
	var xAxisDistance_y = 84;

	svg.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(" + xAxisDistance_x + "," + xAxisDistance_y + ")")
		.call(xAxis);

	// create xAxis label
	var labelDistance_lx = width / 2.35;
	var labelDistance_ly = xAxisDistance_y - 50;
	var underlabelDistance_lx = width / 2;
	var underlabelDistance_ly = xAxisDistance_y - 30;

	svg.append("text")
		.attr("class", "x label center")
		.text(meta[pubDebt]["label"] + " (" + meta[pubDebt]["unit"] + ")")
		.attr("text-anchor", "end")
		.attr("font-weight", "bold")
		.attr("x", labelDistance_lx)
		.attr("y", labelDistance_ly);

	svg.append("text")
		.attr("class", "x label center")
		.text(meta[pubDebt]["description"])
		.attr("text-anchor", "end")
		.attr("font-style", "italic")
		.attr("x", underlabelDistance_lx)
		.attr("y", underlabelDistance_ly);


	// Setting line for distribution
	var gaussianDistance_x = xAxisDistance_x;
	var gaussianDistance_y = 290;
	var line = svg.append("g")
		.attr("class", "gaussian_line")
		.attr("transform", "translate(" + gaussianDistance_x + "," + gaussianDistance_y + ")");

	line.append("line")
		.attr("x1", xScale.range()[0])
		.attr("x2", xScale.range()[1]);

	svg.append("text")
		.attr("class", "gaussian_line_text")
		.text("All Countries")
		.attr("x", -100)
		.attr("y", gaussianDistance_y + 2)
		.style("font-weight", "bold")
		.attr("text-anchor", "start");


	//Create the Glow Filter
	var stdDeviation = 2.5;
	var defs = svg.append('defs');

	var filter = defs.append('filter')
		.attr('id','glow');
	filter.append('feGaussianBlur')
		.attr('class','blur')
		.attr('stdDeviation',stdDeviation)
		.attr('result','coloredBlur');

	var feMerge = filter.append('feMerge');
	feMerge.append('feMergeNode')
		.attr('in','coloredBlur');
	feMerge.append('feMergeNode')
		.attr('in','SourceGraphic');


	// Create force simulation
	var simDistribution = gaussianDistance_y;
	var strength = 1;
	var alpha = 1;

	var simulation = d3.forceSimulation(data)
		.force("x",
			d3.forceX(d => xScale(d[x_indicator]))
				.strength(strength)
		)
		.force("y", d3.forceY(simDistribution))
		.force("collide",
			d3.forceCollide()
				.radius(d => rScale(d[r_indicator]))
		)
		.alpha(alpha);

	// Create bubbles
	var bubDistance_x = 0;
	var bubDistance_y = 0;


	// Variables for tooltip on bubbles
	var rectWidth = 330;
	var splitTextLength = 40;

	if (meta[prvDebt]["label"].length > splitTextLength) {
		var rectHeight = 100;
	} else{
		var rectHeight = 90;
	}

	var triangleHeight = rectHeight / 7;
	var tooltipDistance_x = rectWidth / 2;
	var tooltipDistance_y = rectHeight + triangleHeight;

	// Setup bubbles
	bubbles = svg.append("g")
		.attr("class", "bubbles")
		.attr("transform", "translate(" + bubDistance_x + ", " + bubDistance_y + ")")
		.selectAll(".bubble")
		.data(simulation.nodes())
		.enter()
			.append("circle")
			.attr("class", d => "bubble " + d.country)
			.style("stroke", "#000")
			.style("stroke-width", 0.1)
			.attr("cx", d => d.x)
			.attr("cy", d => d.y)
			.attr("r", d => rScale(d[r_indicator]))
			.style("fill", function(d) {
				if (view == "region"){
					return regionColors[regions[d["region"]]];
				} else {
					return incomeColors[incomeGroups[d["incomeLevel"]]];
				}

			})
			.on("mouseover", function(){
				tooltip.style("display", null);
				d3.select(this).style("filter", "url(#glow)");
			})
			.on("mouseout", function(){
				tooltip.style("display", "none");
				d3.select(this).style("filter", "none");
			})
			.on("mousemove", function(obj, d){
				var fontSize = 12 + "px";

				// start x,y coordinates of tooltip titles
				//   and indicator names
				var tooltipTitle_x = 1/25 * rectWidth;
				var tooltipInd1_x = tooltipTitle_x; 			// country name
				var tooltipInd2_x = tooltipInd1_x;				// region
				var tooltipInd3_x = tooltipInd2_x;				// pub
				var tooltipInd4_x = tooltipInd3_x;				// prv


				// fix tooltip coordinates if private debt indicator
				// 	name is too long
				if (meta[prvDebt]["label"].length > splitTextLength){
					var tooltipTitle_y = 1/6 * rectHeight; 		// country name
					var tooltipInd1_y = 2 * tooltipTitle_y; 	// region
					var tooltipInd2_y = 3 * tooltipTitle_y; 	// pub
					var tooltipInd3_y = 4 * tooltipTitle_y; 	// prv
					var tooltipInd4_y = 5 * tooltipTitle_y; 	// second prv line
					// fix indicator value y coordinate
					var tooltipInd3_val_y = tooltipInd4_y;		// prv value to next line
				} else {
					var tooltipTitle_y = 1/5 * rectHeight; 		// country name
					var tooltipInd1_y = 2 * tooltipTitle_y;		// region
					var tooltipInd2_y = 3 * tooltipTitle_y;		// pub
					var tooltipInd3_y = 4 * tooltipTitle_y;		// prv
					// fix indicator value y coordinate
					var tooltipInd3_val_y = tooltipInd3_y;		// prv value
				}

				// start coordinates of tooltip indicator values
				var tooltipInd1_val_x = rectWidth - tooltipInd1_x;
				var tooltipInd1_val_y = tooltipInd1_y;
				var tooltipInd2_val_x = tooltipInd1_val_x;
				var tooltipInd2_val_y = tooltipInd2_y;
				var tooltipInd3_val_x = tooltipInd2_val_x;

				// on mouse position get cx, cy, and r of hover bubble
				var xPos = d3.select(this).attr("cx");
				var yPos = d3.select(this).attr("cy");
				var rPos = d3.select(this).attr("r");

				var transform_x = parseFloat(xPos) - tooltipDistance_x;
				var transform_y = parseFloat(yPos) - parseFloat(rPos) - tooltipDistance_y;

				tooltip.attr("transform", "translate(" + transform_x + ", " + transform_y + ")");
				tooltip.selectAll("text")
					.style("font-size", fontSize)
					.style("color", "black");
				tooltip.select("text.name")
					.attr("x", tooltipTitle_x)
					.attr("y",tooltipTitle_y)
					.style("font-weight","bold")
					.style("fill","#262626")
					.text(d.countryName + " (" + d.year +")");

				tooltip.select("text.region")
					.attr("x", tooltipInd1_x)
					.attr("y", tooltipInd1_y)
					.style("fill", "#262626")
					.text("Region");

				tooltip.select("text.pubdebt")
					.attr("x", tooltipInd2_x)
					.attr("y", tooltipInd2_y)
					.style("fill", "#262626")
					.text(meta[pubDebt]["label"] + " (% of GDP)");

				// private debt variables too long, append unit below
				if (meta[prvDebt]["label"].length > splitTextLength) {
					var indi3Text = meta[prvDebt]["label"] + " (% of GDP)";
					var arr = indi3Text.split(" ")
					var firstHalf = arr.slice(0, arr.length/2).join(" ");
					var secondHalf = arr.slice(arr.length/2, arr.length).join(" ");

					tooltip.select("text.prvdebt")
						.attr("x", tooltipInd3_x)
						.attr("y",tooltipInd3_y)
						.style("fill","#262626")
						.text(firstHalf);

					tooltip.select("text.prvdebt_unit")
						.attr("x", tooltipInd4_x)
						.attr("y",tooltipInd4_y)
						.style("fill","#262626")
						.text(secondHalf);
				} else {
					// prv can fit in one line
					tooltip.select("text.prvdebt")
						.attr("x", tooltipInd3_x)
						.attr("y",tooltipInd3_y)
						.style("fill","#262626")
						.text(meta[prvDebt]["label"]+ " (% of GDP)");
				}

				tooltip.select("text.region_value")
					.attr("x", tooltipInd1_val_x)
					.attr("y", tooltipInd1_val_y)
					.style("font-weight", "bold")
					.style("fill", "#262626")
					.text(d["region"]);

				tooltip.select("text.pubdebt_value")
					.attr("x", tooltipInd2_val_x)
					.attr("y", tooltipInd2_val_y)
					.style("font-weight","bold")
					.style("fill", "#262626")
					.text(format(d[pubDebt]));

				tooltip.select("text.prvdebt_value")
					.attr("x", tooltipInd3_val_x)
					.attr("y", tooltipInd3_val_y)
					.style("font-weight","bold")
					.style("fill", "#262626")
					.text(format(d[prvDebt]));
			});


	//Feed the force simulation all our data
	function ticked(){
		bubbles
			.attr("cx", d => d.x)
			.attr("cy", d => d.y);
	}


	simulation.nodes(data)
		.on("tick", ticked)
		.on("end", () => {

			// the following func doesn't have to wait
			// for the final cx/cy coordinates but
			// it looks asthetically pleasing.
			// create debt ratio text at the bottom
			debtRatioText(data, x_indicator, r_indicator,
				gaussianDistance_y, 160
			);

			// have to wait for simulation to end
			// in order to add circleRepText

			// sort data by greatest x_indicator
			var sortedData = [...data].sort(function(a, b){
			    if (a[x_indicator] < b[x_indicator]){
			        return 1;
			    } else if (a[x_indicator] > b[x_indicator]){
			        return -1;
			    } else {
			        return 0;
			    }
			});

			// get greatest class name
			var obs = sortedData[0];
			var name = obs["country"];
			var countryName = obs["countryName"];
			// set coordinates
			var y1_coord = parseFloat($("." + name)[0].getAttribute("cy"));
			var y2_coord = gaussianDistance_y + 150;

			var svg = d3.select(".chart")
				.select("svg")
				.select("g");

			var line = svg.append("g")
				.attr("class", "circleRepText");

			var x_coord = xScale(obs[x_indicator]);
			line.append("line")
				.attr("x1", x_coord)
				.attr("x2", x_coord)
				.attr("y1", y1_coord + rScale(obs[r_indicator]))
				.attr("y2", y2_coord)
				.attr("stroke", "#ccc")
				.attr("stroke-width", 0.75);

			var rIndicatorLabel = meta[r_indicator]["label"].toLowerCase();

			if (rIndicatorLabel.length > 32) {
				// add share of GDP to text
				rIndicatorLabel += " as share of GDP";
				var arr = rIndicatorLabel.split(" ");
				var firstHalf = arr.slice(0, arr.length / 2).join(" ");
				var secondHalf = arr.slice(arr.length / 2, arr.length).join(" ");
				var texts = [
					"Each circle represents",
					"a country sized by the",
					firstHalf,
					secondHalf +".",
					countryName + " has private debt",
					"shares of " + format(obs[r_indicator]) + " percent."
				];
			} else {
				var texts = [
					"Each circle represents",
					"a country sized by the",
					rIndicatorLabel,
					"as share pf GDP. " + countryName,
					"has private debt shares of " + format(obs[r_indicator]) + " percent."
				];
			}
			var textsYcoord = Array.from({ length: texts.length }, (_, k) =>
				y2_coord + (k + 1) * 15
			);

			textsYcoord.forEach(function(d, i){
				line.append("text")
					.attr("class", "text")
					.attr("font-style", "italic")
					.text(texts[i])
					.attr("text-anchor", "middle")
					.attr("x", x_coord)
					.attr("y", textsYcoord[i]);
			});
		});


	// vertical mean line
	var meanValue = d3.mean(data, d => d[x_indicator]);
	var mean_y0 = gaussianDistance_y - 140;
	var mean_y1 = gaussianDistance_y + 155;

	mean = svg.append("g")
		.attr("class", "mean");

	mean.append("line")
		.attr("class", "mean_line")
		.attr("x1", xScale(meanValue))
		.attr("x2", xScale(meanValue))
		.attr("y1", mean_y0)
		.attr("y2", mean_y1)
		.attr("stroke", "#000")
		.attr("stroke-width", 2);

	mean.append("text")
		.attr("class", "mean_text")
		.text("Average")
		.attr("x", xScale(meanValue))
		.attr("y", mean_y0 - 25)
		.style("font-weight", "bold")
		.style("text-anchor", "middle");

	mean.append("text")
		.attr("class", "mean_text_value")
		.text(format(meanValue) + "%")
		.attr("x", xScale(meanValue))
		.attr("y", mean_y0 - 10)
		.style("font-weight", "bold")
		.style("text-anchor", "middle");


	// Create tooltip
	// keep tooltip code here to lay over bubbles
	var rectOpacity = 0.92;
	// tooltip triangle coordinates
	var triangleA_x = 3/7 * rectWidth;
	var triangleA_y = rectHeight;
	var triangleB_x = 4/7 * rectWidth;
	var triangleB_y = rectHeight;
	var triangleC_x = 1/2 * rectWidth;
	var triangleC_y = rectHeight + triangleHeight;

	var tooltipG = d3.select("svg#chart")
		.append("g")
		.attr("class", "tooltip-group")
		.attr("transform", "translate(" + svgDistance_x + "," + svgDistance_y + ")");


	var tooltip = tooltipG
		.append("g")
		.attr("class", "tooltips")
		.style("display", "none");
	tooltip.append("path")
		.attr("fill", "white")
		.attr("stroke", "grey")
		.attr("filter", "url(#glow)")
		.style("opacity", rectOpacity)
		.attr("d", function(){
			return "M "+ 0 + " " + 0 +
				" L" + rectWidth + " " + 0 +
				" L" + rectWidth + " " + rectHeight +
				" L" + (triangleB_x) + " " + (triangleB_y) +
				" L" + (triangleC_x) + " " + (triangleC_y) +
				" L" + (triangleA_x) + " " + (triangleA_y) +
				" L" + 0 + " " + rectHeight+
				" z";
		});
	// append all text elements of tooltip
	tooltip.append("text")
		.attr("dy", ".35em")
		.attr("text-anchor", "start")
		.attr("class", "name");
	tooltip.append("text")
		.attr("dy", ".35em")
		.attr("text-anchor", "start")
		.attr("class", "region");
	tooltip.append("text")
		.attr("dy", ".35em")
		.attr("text-anchor", "start")
		.attr("class", "pubdebt");

	tooltip.append("text")
		.attr("dy", ".35em")
		.attr("text-anchor", "start")
		.attr("class", "prvdebt");

	// if indicator name too long, add append text to
	//   split indicator to lines
	if (meta[prvDebt]["label"].length > splitTextLength){
		tooltip.append("text")
		.attr("dy", ".35em")
		.attr("text-anchor", "start")
		.attr("class", "prvdebt_unit");
	}

	tooltip.append("text")
		.attr("dy", ".35em")
		.attr("text-anchor", "end")
		.attr("class", 'region_value');
	tooltip.append("text")
		.attr("dy", ".35em")
		.attr("text-anchor", "end")
		.attr("class", "pubdebt_value");
	tooltip.append("text")
		.attr("dy", ".35em")
		.attr("text-anchor", "end")
		.attr("class", "prvdebt_value");

	return simulation;

}


function debtRatioText(data, x, r, gauss_y, y_coeff){
	// Create text below bubbles
	// Calculate share of countries have debt ratio
	// below first axis value
	var totalCount;
	var count;
    var xValue = parseInt(
    	$(".tick > text")[1].innerHTML.slice(0, -1)
    );
    var midXValue = parseInt(xValue / 2);
	[count, totalCount] = debtRatioStat(
		data, x, r, xValue
	);

	var svg = d3.select(".chart")
		.select("svg")
		.select("g");

	// draw text only if data.length is over 10
	if (totalCount >= 15){ //20
		// draw text
		var ratio = count / totalCount;
		var line = svg.append("g")
			.attr("class", "debtRatioStat");

		var y_coord = gauss_y + y_coeff;

		line.append("path")
			.attr("d",
				"M " + xScale.range()[0] + " " + (y_coord + 20 - 5) +
				" L " + xScale.range()[0] + " " + (y_coord + 20) +
				" L " + xScale(midXValue) + " " + (y_coord + 20) +
				" L " + xScale(midXValue) + " " + (y_coord + 20 + 15) +
				" M " + xScale(midXValue) + " " + (y_coord + 20) +
				" L " + xScale(xValue) + " " + (y_coord + 20) +
				" L " + xScale(xValue) + " " + (y_coord + 20 - 5)
			)
			.attr("fill", "none")
			.attr("stroke", "#ccc")
			.attr("stroke-width", 0.75);

		line.append("text")
			.attr("class", "text")
			.attr("font-style", "italic")
			.text("About " + format(ratio * 100) + " percent of countries")
			.attr("text-anchor", "middle")
			.attr("x", xScale(midXValue))
			.attr("y", y_coord + 45);

		line.append("text")
			.attr("class", "text")
			.attr("font-style", "italic")
			.text("in the sample have debt shares")
			.attr("text-anchor", "middle")
			.attr("x", xScale(midXValue))
			.attr("y", y_coord + 60);

		line.append("text")
			.attr("class", "text")
			.attr("font-style", "italic")
			.text("less than " + format(xValue) + " percent.")
			.attr("text-anchor", "middle")
			.attr("x", xScale(midXValue))
			.attr("y", y_coord + 75);
	}
}

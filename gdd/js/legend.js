// Create legends

function createBubbleLegend(data, pubDebt, prvDebt){

	// Clean data
	data = cleanData(data, pubDebt, prvDebt);

	// clean legend text prior to appending
	$("#bubbleLegend span").remove();
	$("#bubbleLegend svg").remove();

	// Append text
	var target = $(".bubbleLegend");
	var element = $("<span>", {
		style: "font-size: 11px",
		html: "Size of bubbles stands for <br/>" + meta[prvDebt]["label"].toLowerCase() + " as share of GDP",
	});
	element.insertBefore(target);

	var r_indicator = prvDebt;
	var format = d3.format(",.0f");

	// Calc radius max and min
	var r_max = d3.max(data, function(d){
		return d[r_indicator];
	});

	var chartWidth = parseInt(
		$("#chart")[0].style.width.slice(0,-2)
	);

	// Recreate scale for radius
	var rDomain_min = 0;
	var rDomain_max = r_max;
	var rRange_min = chartWidth / 240;
	var rRange_max = chartWidth / 55;

	var rScale = d3.scaleSqrt()
		.domain([0, rDomain_max])
		.range([rRange_min,rRange_max]);

	var width = 350;
	var height = 80;

	var svg = d3.select("body")
		.select(".bubbleLegend")
		.append("svg")
		.style("width", width)
		.style("height", height)
		.style("overflow", "visible");

	var legend = svg.append("g")
		.attr("class", "legendCircle")
		.attr("transform", "translate(" + 0 + "," + 0 + ")");


	var circlesCount = calculateDividers(r_max).reverse();

	legend.selectAll("circle")
		.data(circlesCount)
		.enter()
		.append("circle")
		.attr("cx", width / 2)
		.attr("cy", d => (height / 1.25) - rScale(d))
		.attr("r", d => rScale(d))
		.style("fill", "#efefef")
		.style("stroke-width", 0.5)
		.style("stroke", "#000")
		.style("stroke-dasharray", 2);

	legend.selectAll("line")
		.data(circlesCount)
		.enter()
		.append("line")
		.attr("x1", width / 2)
		.attr("x2", width / 2 + 50)
		.attr("y1", d => (height / 1.25) - 2 * rScale(d) )
		.attr("y2", d => (height / 1.25) - 2 * rScale(d) )
		.style("stroke-width", 0.5)
		.style("stroke", "#000");

	legend.selectAll("text")
		.data(circlesCount)
		.enter()
		.append("text")
		.attr("x", width / 2 + 55)
		.attr("y", d => (height / 1.25) - 2 * rScale(d) + 5 )
		.style("text-anchor", "start")
		.attr("font-size", "9px")
		.text(d => format(parseInt(d)) + "%");
}

function calculateDividers(r_max){
	var start = 1;
	var end = Math.ceil(r_max / 100) * 100;
	if (r_max < 100) {
		var count = parseInt(end/50);
	} else if (r_max < 200) {
		var count = parseInt(end/100);
	} else if (r_max < 300) {
		var count = parseInt(end/100);
	} else {
		var count = parseInt(end/200);
	}
	var circlesCount = d3.ticks(start, end, count);
	return circlesCount;
}
// Create Charts

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function createCountryElements(){
    // remove svg if exists
	$("svg#chart").remove();

    // create country tabs
    $(".chart").append(
        $("<div>", {
            class: "col-sm-2 country-columns"
        }).append(
            $("<ul>", {
                class: "nav-container"
            })
        )
    );

    // populate country tabs with country names
    countryTabs.forEach(country => {
        $("ul.nav-container").append(
            $("<li>",
            {
                id: country.replace(/ /g,"_"),
                class: "country-tab",
                onclick: `createChart(event, '${country.replace(/ /g,"_")}-text', 'country-content', 'country-tab')`,
            }).append(
                $("<a>", {
                    href: "#",
                }).append(
                    $("<span>",{
                        text: capitalizeFirstLetter(country),
                    })
                )
            )
        )
    });

    $(".chart").append(
        $("<div>", {
            class: "country-contents col-sm-10",
        })
    );

    // populate country content
    countryContent.forEach((content, i) => {
        var country_name = countryTabs[i].replace(/ /g,"_");
        $(".country-contents").append(
            $("<div>", {
                id: `${country_name}-text`,
                class: "country-content",
                style: "display: none; padding-top:15px; text-align:center;",
            }).append(
                $("<p>").append(
                    $("<i>", {
                        text: content,
                    })
                )
            )
        );
    });

    // append div with id chart
    $(".country-contents").append(
        $("<div>",{
            id: "chart",
            style: "padding-top: 30px",
        })
    );
}

function createChart(event, name, content, links){
    // prevent scroll up on click
    event.preventDefault();
        
    // set all countries' text display to none
    var arrayOfCountryTexts = $(`.${content}`);
    arrayOfCountryTexts.each(i => {
        arrayOfCountryTexts[i].style.display = "none";
    });

    // remove class "active" from all country tabs
    var countryTabs = $(`.${links}`);
    countryTabs.each(i => {
        $(countryTabs[i]).removeClass("active");
    });

    // selected
    $(`#${name}`).css("display", "block");
    $(event.currentTarget).addClass("active")

    var maxValue = 0;
    var minValue = 0;

    var countryChart = {
        chart: {
            type: "bar",
            borderColor: null,
            backgroundColor: "white",
            marginTop: 50,
        },
        title: {
            text: null,
        },
        credits: {
            enabled: false,
        },
        style: {
            // width: "100%",
            // height: "100%",
            "fontFamily": "\"Open Sans\", sans-serif",
            "fontSize": "12px",

        },
        legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
        },
        yAxis: [{
            id: "yaxis",
            gridLineColor: "transparent",
            labels: {
                enabled: false,
            },
            title: {
                text: null,
            },
            startOnTick: false,
            endOnTick: false,
            plotLines: [{
                id: "pl1",
                color: "#000",
                width: 1.5,
                value: 0,
                label: {
                    userHTML: true,
                    text: "<span style='white-space:pre'><b>Debtor Position      Creditor Position</b></span>",
                    color: "#000",
                    align: "middle",
                    rotation: 0,
                    x: -110,
                    y: -5,
                },
            }],
        }],
        xAxis: [{
            categories: [
                "1918 - Interallied Debts",
                "1920 - Interallied Debts",
                "1923 - Interallied Debts",
                "1923 - Interallied Debts & War Reparations (Nominal)",
                "1923 - Interallied Debts & War Reparations (Issued)",
                "1930 - Interallied Debts",
                "1930 - Interallied Debts & War Reparations (Nominal)",
                "1930 - Interallied Debts & War Reparations (Alternative rate)"
            ],
            lineColor: "#dfded8",
            labels: {
                style: {
                    color: "#000",
                    "fontWeight": "bold",
                    "fontSize": 12,
                }
            },
            offset: 100,
            plotLines: [{
                color: "#dfded8",
				width: 1,
				value: 0.5
			},{
				color: "#dfded8",
				width: 1,
				value: 1.5
			},{
				color:"#dfded8",
				width: 1,
				value: 2.5
			},{
				color: "#dfded8",
				width: 1,
				value: 3.5
			},{
				color: "#dfded8",
				width: 1,
				value: 4.5
			},{
				color:'#dfded8',//rgb(204, 214, 235)
				width:1,
				value:5.5
			},{
				color:'#dfded8',//rgb(204, 214, 235)
				width:1,
				value:6.5
            }]
        }],
        tooltip: {
            formatter: function(){
                if (this.series.name.includes("Net Position") == true){
                    return `${this.series.name}<br><b>$ ${Highcharts.numberFormat(Math.abs(this.point.y), 0)}</br>`;
                } else if (this.point.y < 0) {
                    return `<span style='color:${this.point.color}'>\u25CF</span> Owed to ${this.series.name}:<br><b>$ ${Highcharts.numberFormat(Math.abs(this.point.y), 0)}</b>`;
                } else {
                    return `<span style='color:${this.point.color}'>\u25CF</span> Owed by ${this.series.name}:<br><b>$ ${Highcharts.numberFormat(Math.abs(this.point.y), 0)}</b>`;
                }
            },
        },
        plotOptions: {
            series: {
                stacking: "normal",
                events: {
                    legendItemClick: function(){
                        return false;
                    }
                }
            }
        },
        series: [],
    };

    // draw default chart
    $(function(){
        countryChart.series = countryData[name.split("-")[0]].series;
        Highcharts.chart("chart", countryChart);
    })
}


function createFlowElements(){
    // remove svg if exists
    $("svg#chart").remove();

    // create flow tabs
    $(".chart").append(
        $("<div>", {
            class: "col-sm-2 flow-columns"
        }).append(
            $("<ul>", {
                class: "nav-container"
            })
        )
    );

    // populate flow tabs with flow names
    flowTabs.forEach((flow, i) => {
        $("ul.nav-container").append(
            $("<li>", {
                id: `flow-${i}`,
                class: "flow-tab",
                onclick: `createSankeyChart(event, 'flow-${i}-text', 'flow-content', 'flow-tab')`,
            }).append(
                $("<a>", {
                    href: "#",
                }).append(
                    $("<span>", {
                        text: flow,
                    })
                )
            )
        )
    });

    $(".chart").append(
        $("<div>", {
            class: "flow-contents col-sm-10",
        })
    );

    // populate flow content
    flowContent.forEach((content, i) => {
        $(".flow-contents").append(
            $("<div>", {
                id: `flow-${i}-text`,
                class: "flow-content",
                style: "display: none; padding-top:15px; text-align:center;"
            }).append(
                $("<p>").append(
                    $("<i>", {
                        text: content,
                    })
                )
            )
        );
    });

    // append div with id chart
    $(".flow-contents").append(
        $("<div>", {
            id: "chart",
            style: "padding-top:30px;"
        })
    );

}

function handleMouseOver(d, i){
    d3.select(this)
        .style("stroke-opacity", "0.5");
}

function handleMouseOut(d, i){
    d3.select(this)
        .style("stroke-opacity", "0.2");
}

function createSankeyChart(event, name, content, links_){
    // set all flow text display to none
    var arrayOfFlowTexts = $(`.${content}`);
    arrayOfFlowTexts.each(i => {
        arrayOfFlowTexts[i].style.display = "none";
    });

    var flowTabs = $(`.${links_}`);
    flowTabs.each(i => {
        $(flowTabs[i]).removeClass("active");
    });

    // selected
    $(`#${name}`).css("display", "block");
    $(event.currentTarget).addClass("active");

    // declare vars for Sankey
    var margin = {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
    };
    var padding = {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
    };

    var svg = d3.select("#chart")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", "0 0 100 50")
    .attr("preserveAspectRatio", "none");

    var width = svg.node().getBoundingClientRect().width;
    var height = svg.node().getBoundingClientRect().height;

    /* ============= TEST ============= */
    var data = {
        nodes: [
            { id: "A1" },
            { id: "A2" },
            { id: "B1" },
        ],
        links: [
            { source: "A1", target: "B1", value: 27 }
        ]
    };

    const sankey = d3
        .sankey()
        .size([width, height])
        .nodeId(d => d.id)
        .nodeWidth(20)
        .nodePadding(10)
        .nodeAlign(d3.sankeyCenter);
    
    var graph = sankey(data);

    let links = svg
        .append("g")
        .classed("links", true)
        .selectAll("path")
        .data(graph.links)
        .enter()
        .append("path")
        .classed("link", true)
        .attr("d", d3.sankeyLinkHorizontal())
        .attr("fill", "none")
        .attr("stroke", "#606060")
        .attr("stroke-width", d => d.width)
        .attr("stoke-opacity", 0.5);

    // let nodes = svg
    //     .append("g")
    //     .classed("nodes", true)
    //     .selectAll("rect")
    //     .data(graph.nodes)
    //     .enter()
    //     .append("rect")
    //     .classed("node", true)
    //     .attr("x", d => d.x0)
    //     .attr("y", d => d.y0)
    //     .attr("width", d => d.x1 - d.x0)
    //     .attr("height", d => d.y1 - d.y0)
    //     .attr("fill", "blue")
    //     .attr("opacity", 0.8);

}

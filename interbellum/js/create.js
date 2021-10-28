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
                id: country,
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
    )

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

    // append svg
    $(".country-contents").append(
        $("<div>",{
            id: "chart",
            style: "padding-top: 30px",
        })
    );
}

function createChart(event, name, content, links){
        
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
            margin: [30, 15, 75, 15],
            // spacingTop: 15,
        },
        title: {
            text: null,
        },
        credits: {
            enabled: false,
        },
        style: {
            width: "100%",
            height: "100%",
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

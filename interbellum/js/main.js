// Main method

function setupChartDiv(country){
    $(".container").append(
        $("<div>", {
            class: "row chart"
        })
    );

    // first create the elements
    createCountryElements();

    // trigger click on default country
    $(`#${country} a`).click();
    $(`#${country}`).addClass("active");
}

function setupSankeyDiv(flow){
    $(".container").append(
        $("<div>", {
            class: "row chart"
        })
    );

    // first create the elements
    createFlowElements();

    // trigger click on default flow
    $(`#${flow} a`).click();
    $(`#${flow}`).addClass("active");
}

$(document).ready(function(){
    console.log("working...");

    // default display view
    var country = "belgium";
    var flow = "flow-0";
    setupChartDiv(country);

    $(".btn-group[role='group'] button").on("click", function(){
        if (! $(this).attr("class").includes("active")){
            $(this).siblings().removeClass("active");
			$(this).toggleClass("active");
            var view = $(this).attr("id");

            if (view == "country"){
                // do something
                $(".chart").remove();
                setupChartDiv(country);
            } else {
                $(".chart").remove();
                setupSankeyDiv(flow);
            }

        }
    });
});
// Main method

$(document).ready(function(){
    console.log("working...");

    // default display view
    var displayView = "country";
    var country = "belgium";

    // first create the elements
    createCountryElements();

    // trigger click on default country
    $(`#${country} a`).click();
    $(`#${country}`).addClass("active");

    // $(".btn-group[role='group'] button").on("click", function(){
    //     if (! $(this).attr("class").includes("active")){
    //         $(this).siblings().removeClass("active");
	// 		$(this).toggleClass("active");
    //         var view = $(this).attr("id");

    //         if (view == "country"){
    //             // do something
    //         } else {
    //             // do something
    //         }

    //     } 
    // });
});
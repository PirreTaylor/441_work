var waveSelector = "#waves";
var allWaves = new Array();
class DogInfo{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theSelector(){
        return this.selector;
    }

    get theImagePath(){
        return this.imagePath;
    }

    toString()
    {
        return this.selector + ":" + this.imagePath;
    }
}

function initializeArray()
{
    var dog = new DogInfo("#dog", "images/waves.png");
    allWaves.push(waves);

}
$(document).ready(function(){
    console.log(allWaves[0].toString());
    console.log(allWaves[0].theSelector);
    console.log(allWaves[0].theImagePath);

    //$(allDogs[0].theSelector).src = allDogs[0].theImagePath;
    //$("#my_image").attr("src","second.jpg");
    $(allDogs[0].theSelector).attr("src", allDogs[0].theImagePath);

    $("button").click(function(){

        $(".stuff").fadeOut();

        $("#third").toggle();
          // setInterval(moveSquare, 1000);

       // $(allDogs[0].theSelector).fadeOut().fadeIn();

    });

});

function moveSquare()
{
    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}

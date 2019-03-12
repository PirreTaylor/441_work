var waveSelector = "#waves";
var allWaves = new Array();
class WavesInfo{
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
    var waves = new WavesInfo("#waves", "images/waves.png");
    allWaves.push(waves);

}
$(document).ready(function(){
    console.log(allWaves[0].toString());
    console.log(allWaves[0].theSelector);
    console.log(allWaves[0].theImagePath);

    $(allWaves[0].theSelector).attr("src", allWaves[0].theImagePath);

    $("move").click(function(){
      $("#waves").animate({}).animate({}).animate({}).animate({});

    });

});

function moveSquare()
{
    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}

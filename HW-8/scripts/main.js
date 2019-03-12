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

function moveWaves() {
$(document).ready(function () {
            $("button").click(function () {
                $("#waves").animate({top: '200px'});
            });
        });
      }

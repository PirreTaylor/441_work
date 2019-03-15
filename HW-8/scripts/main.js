var oceanSelector = "#ocean";
var allOcean = new Array();
class wavesInfo{
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
}

function moveBoat() {
$(document).ready(function () {
            $("button").click(function () {
                $("#boatBox").animate({left: '200px'});
            });
        });
      }

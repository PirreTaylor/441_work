
class oceanWaves{
  constructor(imagePath)
  {
      this.imagePath = imagePath;
  }

  toString()
  {

  }

  get theimagePath()
  {
    return this.imagePath;
  }
}

class shipWaves{
  constructor(imagePath){
    this.imagePath = imagePath;
  }

  toString()
  {

  }
  get theimagePath()
  {
    return this.imagePath;
  }
}


function loadWaves(){
  var waves = new oceanWaves("images/waves2.png");
  console.log(waves.theimagePath);
  document.getElementById("waves2").src = waves.theimagePath;
}

function loadShipWaves(){
  var speedWaves = new shipWaves("images/bowWaves.png");
  console.log(speedWaves.theimagePath);
  document.getElementById("bowWaves").src = speedWaves.theimagePath;
}

//function moveBoat() {
$(document).ready(function () {
        loadWaves();
            $("#moveBoat").click(function () {
              $(this).hide();
                $("#title1").hide();
                $("#title2").toggle();
                $("#boatBox").animate({left: '-=1000'}, "slow");
                $("#bowWaves").toggle().animate({left: '-=1000'}, "slow").fadeToggle( function(){
                  $("#title2").hide();
                  $("#title3").fadeIn();
                });
                $("#clouds1").fadeOut("slow", function(){
                  $("#clouds2").fadeIn("slow").fadeOut("slow", function(){
                    $('#clouds3').fadeIn("slow").fadeOut("slow")
                  });
                });

            });
        });
    //  }

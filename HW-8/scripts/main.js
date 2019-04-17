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
  animateWaves(){

  }
}

function loadWaves(){
  var waves = new oceanWaves("images/waves2.png");
  console.log(waves.theimagePath);
  document.getElementById("waves2").src = waves.theimagePath;
}

//function moveBoat() {
$(document).ready(function () {
        loadWaves();
            $("#moveBoat").click(function () {
                $("#boatBox").animate({left: '-=500'});

            });
        });
    //  }

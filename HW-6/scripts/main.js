
var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10"];
var blankImagePath = "images/back.jpg";
var firstNumber = -1;
var secondNumber = -1;
var player = {"firstname":"", "lastname":""};

var actualImages = new Array();

function printBlanks()
{

    createRandomImageArray();

    for(var i = 0; i < imageTags.length; i++)
    {

        document.getElementById(imageTags[i]).src= blankImagePath;
    }



}

function createRandomImageArray()
{

    var actualImagePath = ["images/dragon.jpg", "images/fairy.jpg", "images/nii.jpg", "images/majora.jpg", "images/moose.jpg"];

    var count = [0,0,0,0,0];

    while(actualImages.length < 10)
    {

        var randomNumber = Math.floor(Math.random() * actualImagePath.length)

        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);

            count[randomNumber] = count[randomNumber] + 1;
        }
    }





}

function flipImage(number)
{
    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageNames[number]).src = actualImages[secondNumber];

    }
    else if(firstNumber < 0) r
    {
        firstNumber = number;
        document.getElementById(imageNames[firstNumber]).src= actualImages[firstNumber];

    }


    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        setTimeout(imagesDisappear, 1000);
    }

    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        firstNumber = -1;
        secondNumber = -1;
    }


}

function imagesDisappear()
{

    console.log(firstNumber);
    document.getElementById(imageNames[firstNumber]).src = blankImagePath;
    document.getElementById(imageNames[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

function addToPlayer()
{
  var firstName = document.getElementById("txtFirstName").value;
  player.firstname = firstName;
  localStorage.setItem("playerInfo", JSON.stringify(player));
  window.location = "HWExample.html";
}

function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    console.log(player.firstname);

}

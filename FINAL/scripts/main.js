var myAdventureArray = new Array();
var slideCounter = 0;

//var canvas = document.getElementById("storyText");
//var ctx = canvas.getContext("2d");


class adventureScreen
{
  constructor(description, imagePath){
    this.description = description;
    this.imagePath = imagePath;
  }

  toString(){
    return this.description;
  }


  get theDescription(){
    return this.description;
  }

  get theImagePath(){
    return this.imagePath = imagePath;
  }
}


function initializeArray()
{
  var myAdventure = new adventureScreen("'Be good and don't let the rain get into your cybernetics this time.' These were my sister's last words to me before she left on that fated venture. What she had gone to look for, she never said.", "images/adv1.jpg");
  var myAdventure1 = new adventureScreen("It has been days since she left the base on that jourey. By all means, she should have been back by now...", "images/adv2.jpg");
  var myAdventure2 = new adventureScreen("What's this!? A distress signal?");
  var myAdventure3 = new adventureScreen("This can't be good. I'll take this tracking device with me to pin down where it came from. Let's hope for the best...", "images/blank.jpg");
  var myAdventure4 = new adventureScreen("You come upon a cave. There appears to have once been a locked door over its entrance that has been broken. Only one way to figure out what's inside...", "images/blank.jpg");
  var myAdventure5 = new adventureScreen("The path ahead is dark and impossible to navigate by sight alone. You pull aside your eyepatch and enable the secondary LED reticle in your right eye to see better. You can see better now, but you also notice the new danger of-", "images/blank.jpg");
  var myAdventure6 = new adventureScreen("A TERRITORIAL MECHA-MOTH! Think fast!", "images/blank.jpg");
  var myAdventure7 = new adventureScreen("You have successfully battled and defeated the Mecha-Moth. You choose to assimilate its antennae into your arm to aid in your navigation. The antennae appear to have a sonar function, allowing you to find your way through the dark easier.", "images/blank.jpg");
  myAdventureArray.push(myAdventure);
  myAdventureArray.push(myAdventure1);
  myAdventureArray.push(myAdventure2);
  myAdventureArray.push(myAdventure3);
  myAdventureArray.push(myAdventure4);
  myAdventureArray.push(myAdventure5);
  myAdventureArray.push(myAdventure6);
  myAdventureArray.push(myAdventure7);
}

function accessInformation()
{
  document.getElementById("storyText").innerHTML = myAdventureArray[slideCounter].toString();
  document.getElementById("imageBox").src = myAdventureArray[slideCounter].theImagePath()
  slideCounter++;
}


  $(document).ready(function () {
    $("#storyText").fadeIn();
  });

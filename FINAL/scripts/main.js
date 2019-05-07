var myAdventureArray = new Array();
var slideCounter = 0;

//var canvas = document.getElementById("storyText");
//var ctx = canvas.getContext("2d");

class adventureScreen
{
  constructor(imagePath, description)
  {
    this.imagePath = imagePath;
    this.description = description;
  }

  get theimagePath(){
  //  var imagePath = document.getElementById("imageBox").src;
    return this.imagePath;
  }

  toString(){
    return this.description;
  }


  get theDescription(){
    return this.description;
  }

}


function initializeArray()
{
  var myAdventure = new adventureScreen("images/adv1.jpg", "Be good and don't let the rain get into your cybernetics this time. These were my sister's last words to me before she left on that fated venture. What she had gone to look for, she never said.");
  var myAdventure1 = new adventureScreen("images/adv2.jpg", "It has been days since she left the base on that jourey. By all means, she should have been back by now...");
  var myAdventure2 = new adventureScreen("images/adv3.jpg", "What's this!? A distress signal?");
  var myAdventure3 = new adventureScreen("images/adv4.jpg", "This can't be good. I'll take this tracking device with me to pin down where it came from. Let's hope for the best...");
  var myAdventure4 = new adventureScreen("images/adv5.jpg", "You come upon a cave. There appears to have once been a locked door over its entrance that has been broken. Only one way to figure out what's inside...");
  var myAdventure5 = new adventureScreen("images/blank.jpg", "The path ahead is dark and impossible to navigate by sight alone. You pull aside your eyepatch and enable the secondary LED reticle in your right eye to see better. You can see better now, but you also notice the new danger of-");
  var myAdventure6 = new adventureScreen("images/adv7.jpg", "A TERRITORIAL MECHA-MOTH! Think fast!");
  var myAdventure7 = new adventureScreen("images/adv8.jpg", "You have successfully battled and defeated the Mecha-Moth. You choose to assimilate its antennae into your arm to aid in your navigation. The antennae appear to have a sonar function, allowing you to find your way through the dark easier.");
  var myAdventure8 = new adventureScreen("images/adv9.jpg", "The sonar capabilities of the Mechantennae have revealed a new path to you in the cave. You take it to see where it leads.");
  var myAdventure9 = new adventureScreen("images/blank.jpg", "The darkened path has guided you to an open cavern. There appears to be nothing here, but you chose to scan the area with the Mechantennae sonar just to be sure.");
  var myAdventure10 = new adventureScreen("images/blank.jpg", "Your sonar has picked up a new object. Upon approaching it, you detect that there is something above you encased in webbing.");
  var myAdventure11 = new adventureScreen("images/blank.jpg", "It's her! Your sister! She appears to be unconscious and ensnared by a spider. The creature must have caught her off-guard and trapped her in its web.");
  var myAdventure12 = new adventureScreen("images/blank.jpg", "After cutting through the webbing, your sister is free. Looks like she is coming back to.");
  var myAdventure13 = new adventureScreen("images/blank.jpg", "Thank goodness you were able to pinpoint my distress signal in time! If you hadn't showed up in time, I would have been that spider's lunch.");
  var myAdventure14 = new adventureScreen("images/blank.jpg", "It shouldn't be long until that spider comes back. How about we finish it off together?");
  var myAdventure15 = new adventureScreen("images/blank.jpg", "The two of you were able to finish off the Feral Megarachnid together. Its defeat yielded a piece of ancient technology you both plan to decipher later. The two of you promise to avoid repeated mistakes and never go on missions alone again.")
  var myAdventure16 = new adventureScreen("images/finish.jpg", "THANKS FOR PLAYING")
  myAdventureArray.push(myAdventure);
  myAdventureArray.push(myAdventure1);
  myAdventureArray.push(myAdventure2);
  myAdventureArray.push(myAdventure3);
  myAdventureArray.push(myAdventure4);
  myAdventureArray.push(myAdventure5);
  myAdventureArray.push(myAdventure6);
  myAdventureArray.push(myAdventure7);
  myAdventureArray.push(myAdventure8);
  myAdventureArray.push(myAdventure9);
  myAdventureArray.push(myAdventure10);
  myAdventureArray.push(myAdventure11);
  myAdventureArray.push(myAdventure12);
  myAdventureArray.push(myAdventure13);
  myAdventureArray.push(myAdventure14);
  myAdventureArray.push(myAdventure15);
  myAdventureArray.push(myAdventure16);
}

function accessInformation()
{
  document.getElementById("imageBox").src = myAdventureArray[slideCounter].theimagePath;
  document.getElementById("storyText").innerHTML = myAdventureArray[slideCounter].theDescription;
  slideCounter++;
}

$(document).ready(function () {
  $("#advance").click(function(){

    $("#imageBox").hide();

    $("#storyText").hide();

    $("#imageBox").fadeIn("slow", function(){
      $("#storyText").fadeIn();
    });

    var myAdventure6 = this.myAdventure6;
    $("#imageBox" + this.myadventure6).fadeToggle("slow");
  });
});

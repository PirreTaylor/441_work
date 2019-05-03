var myAdventureArray = new Array();
var slideCounter = 0;

class adventureScreen
{
  constructor(description){
    //this.imagePath = imagePath;
    this.description = description;
  }

  toString(){
    //this.imagePath;
    return this.description;
  }

  get theDescription(){
    return this.description;
  }
}

function initializeArray()
{
  var myAdventure = new adventureScreen("'Be good and don't let the rain get into your cybernetics this time.' These were my sister's last words to me before she left on that fated venture. What she had gone to look for, she never said.");
  var myAdventure1 = new adventureScreen("It has been days since she left the base on that jourey. By all means, she should have been back by now...");
  var myAdventure2 = new adventureScreen("What's this!? A distress signal?");
  myAdventureArray.push(myAdventure);
  myAdventureArray.push(myAdventure1);
  myAdventureArray.push(myAdventure2);
}

function accessInformation()
{
  document.getElementById("storyText").innerHTML = myAdventureArray[slideCounter].toString();
  slideCounter++;
  slideCounter = 0;
  $("#storyText").fadeIn("slow");
}

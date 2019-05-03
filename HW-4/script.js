function getChoice1()
{
  var myChoice = document.getElementById("choice1").checked;
  if(myChoice == true)
  {
    document.getElementById("mainText").innerHTML= "You chose to check the map first. There's a gift shop on the second floor by the food court. Why don't you go there after you eat?";
    document.getElementById("choice2").style.display="none";
    document.getElementById("btnSubmit2").style.display="none";

  }
  else if(myChoice == false)
  {
   document.getElementById("mainText").innterHTML="You chose to get something to eat first. Life is a lot easier with food on the stomach. It looks like there is a gift shop not too far from the food court, too! How fortunate you are!";
  }
  else
  {
  }
}

function getChoice2(){
  {
    var myChoice = document.getElementById("choice2").checked;
    if(myChoice == true)
    {
      document.getElementById("mainText").innerHTML= "You chose to get something to eat first. Life is a lot easier with food on the stomach. It looks like there is a gift shop not too far from the food court, too! How fortunate you are!";
      document.getElementById("choice1").style.display="none";
      document.getElementById("btnSubmit2").style.display="none";
    }
  }
}

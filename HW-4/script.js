function getChoice1()
{
  var myChoice = document.getElementById("choice1").value;
  var myQuestion = document.getElementById("question");
  if(choice1 === "map")
  {
    document.getElementById("part1").style.display="none";
    document.getElementById("choice1").style.display="none";
    document.getElementById("button_submit").style.display="none";

    document.getElementById("choice2").style.display="none";
    document.getElementById("btnSubmit2").style.display="none";


    myQuestion.innerHTML = "";
  }
  else if(choice1 === "food")
  {
      myQuestion.innerHTML = "You chose blue.  What is your favorite movie?";
  }
  else
  {
  }
}

function getChoice2(){

}

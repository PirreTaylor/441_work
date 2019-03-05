var myViewFinderArray = new Array();

var image1 = "images/Sea.jpg";

var image2 = "images/Discovery.jpg";

class ViewFinder
{
  constructor(title)
  {
      this.title = title;
  }

  toString()
  {
      return "Title: " + this.title;
  }

  get theTitle()
  {
      return this.title;
  }

}

function initializeArray()
{
    var myViewFinder = new ViewFinder("Surrealist Sealife", "image1");
    var myViewFinder1 = new ViewFinder("The Age of Discovery", "image2");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);

}
function accessInformation()
{
    /// random object from the array
    //console.log(myViewFinder.toString());
    //console.log(myViewFinder.theTitle)
    document.getElementById("title").innerHTML = myViewFinderArray[1].toString();

}

var myViewFinderArray = new Array();


class ViewFinder
{
  constructor(title)
  {
      this.title = title;
      this.image1 = /images/Sea.jpg;

  }

  toString()
  {
      return "Title: " + this.title;
      return "image1: " + this.image1;
  }

  get theTitle()
  {
      return this.title;
  }

}

function initializeArray()
{
    var myViewFinder = new ViewFinder("Surrealist Sealife");
    var myViewFinder1 = new ViewFinder("The Age of Discovery");
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

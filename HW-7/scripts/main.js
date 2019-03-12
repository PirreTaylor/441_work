var myViewFinderArray = new Array();


class ViewFinder
{
  constructor(title, imagePath)
  {
    //  initialize constructors here with the this. command
      this.title = title;
      this.imagePath= imagePath;
  }

  toString()
  {
      return "Title: " + this.title;
  }
  // use getters to retrieve and activate constructors
  get theTitle()
  {
      return this.title;
  }

  get theimagePath()
  {
    return this.imagePath;
  }

}

function initializeArray()
{
  //include everything the variable will be plugging in within the parentheses of the new command
    var myViewFinder = new ViewFinder("Surrealist Sealife", "./images/Sea.jpg");
    var myViewFinder1 = new ViewFinder("The Age of Discovery", "./images/Discovery.jpg");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);

}
function accessInformation()
{
    /// random object from the array
    //console.log(myViewFinder.toString());
    //console.log(myViewFinder.theTitle)
    //document.getElementById("title").innerHTML = myViewFinderArray[1].toString();
    document.getElementById("title").innerHTML = myArray[0].theTitle;
    document.getElementById("image").src = myArray[0].theImagePath;

}

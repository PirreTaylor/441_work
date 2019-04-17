var myViewFinderArray = new Array();
var imageCounter = 0;

class ViewFinder
{
  constructor(title, imagePath, date, description, author)
  {
    //  initialize constructors here with the this. command
    //for this project, we need constructors for both the title and imag
      this.title = title;
      this.imagePath = imagePath;
      this.date = date;
      this.description = description;
      this.author = author;
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

  get theDate()
  {
    return "Date: " + this.date;
  }

  get theDescription()
  {
    return "Description: " + this.description;
  }
  get theAuthor()
  {
    return "Author: " + this.author;
  }
}

function initializeArray()
{
  //include everything the variable will be plugging in within the parentheses of the new command
    var myViewFinder = new ViewFinder("Surrealist Sealife", "images/sea.jpg", "July 2015 (?)", "A colorful world between land and sea.", "Taylor Pirre");
    var myViewFinder1 = new ViewFinder("The Age of Discovery", "images/discovery.jpg", "December 27, 2017", "We all have dreams of adventure. Here, a ship can be seen sailing the stars as a telescope on a distant planetoid watches.", "Taylor Pirre");
    var myViewFinder2 = new ViewFinder("Sub-City Limits", "images/subcity.jpg", "March 15, 2016", "A mermaid looks quizzically over her shoulder as she drifts outside the limits of an undersea metropolis.", "Taylor Pirre");
    var myViewFinder3 = new ViewFinder("Wandering", "images/wandering.jpg", "May 2, 2013", "A mysterious traveller drives his carriage through a dark forest of mushrooms.", "Taylor Pirre");
    var myViewFinder4 = new ViewFinder("Bearer of Wisdom", "images/wisdom.jpg", "April 2, 2017", "Fan art of Princess Zelda from the famous video game The Legend of Zelda: Ocarina of Time. She can be seen clutching the titular instrument in her hands.", "Taylor Pirre");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);

}
function accessInformation()
{
    /// random object from the array
    //console.log(myViewFinder.toString());
    //console.log(myViewFinder.theTitle)
    document.getElementById("title").innerHTML = myViewFinderArray[imageCounter].toString();
    document.getElementById("fillerImage").src = myViewFinderArray[imageCounter].theimagePath;
    document.getElementById("date").innerHTML = myViewFinderArray[imageCounter].theDate;
    document.getElementById("description").innerHTML = myViewFinderArray[imageCounter].theDescription;
    document.getElementById("author").innerHTML = myViewFinderArray[imageCounter].theAuthor;
    imageCounter++;
    if(imageCounter == myViewFinderArray.length){
    imageCounter = 0;
    }


}

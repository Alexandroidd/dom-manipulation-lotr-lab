console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
var midEarth = document.createElement('section');
midEarth.id = "middle-earth";
document.body.appendChild(midEarth);
console.log(midEarth);

                                                              // create a section tag with an id of middle-earth
  for(i=0; i<lands.length; i++) {
    var landName = document.createElement('article');         // inside, add each land as an article tag
    landName.id  = lands[i];
    midEarth.appendChild(landName);

    
    var landsfather = document.getElementsByTagName('article')[i];
    var landToBe = document.createElement('h1');
    landToBe.innerHTML = lands[i];
    landsfather.appendChild(landToBe);
    }



    
  

}
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body

makeMiddleEarth();


// Part 2

function makeHobbits(){
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
var forHobbits = document.createElement('ul');
forHobbits.id = "hobbitHole";
var needShire = document.getElementById('The Shire');
needShire.appendChild(forHobbits);
var hobbitHole = document.getElementById('hobbitHole');

for(i=0;i<hobbits.length; i++) {
  var eachHobbit = document.createElement('li');
  eachHobbit.class = "Hobbit";
  eachHobbit.innerHTML = hobbits[i] ;
 hobbitHole.appendChild(eachHobbit);
}
}
makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {

  var theRingDiv = document.createElement('div');
  theRingDiv.id = "the-ring";
  theRingDiv.class = 'magic-imbued-jewelry';
  var frodo = document.querySelector('#hobbitHole li');
  theRingDiv.addEventListener('click', nazgulScreech);      // <<<<----DON'T FORGET TO ADD "()" at the end.
  frodo.appendChild(theRingDiv);
  
  console.log(theRingDiv);   //just a test to see if it's appending.

  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
}
keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  var theBuddies = document.createElement('aside');
  theBuddies.id = "buddiesAside";
  document.body.appendChild(theBuddies);
  var buddyHolder= document.createElement('ul');
  buddyHolder.id = "thisBuddyHolder";
  theBuddies.appendChild(buddyHolder);
    for(i=0; i<buddies.length; i++) {
    var eachBuddy = document.createElement('li');
    eachBuddy.id = buddies[i];
    eachBuddy.innerHTML = buddies[i];
    buddyHolder.appendChild(eachBuddy);
  }
  var rivendell = document.getElementById('Rivendell');
  rivendell.appendChild(theBuddies);
  


  // var buddiesLi = document.querySelector('#buddies li');
  // for(i=0;i<buddies.length;i++) {
  //   var eachBuddyLi = document.createElement('li');
  //   eachBuddyLi.class = "buddy";
  //   eachBuddyLi.innerHTML = buddies[i];
    
  //   theBuddiesUl.appendChild(eachBuddy);
  // }

  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  console.log(theBuddies); //  <---again a test 
  console.log(buddyHolder); //   <---again a test 
}
makeBuddies();

// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  document.getElementById('Strider').textContent = "Aragorn";
  var aragorn = document.getElementById('Strider');
  aragorn.id = 'Aragorn';
}
beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}









//var shire = document.createElement('h1');
      //var theShire = document.getElementById("The Shire");
      //shire.innerHTML = "The Shire";
      //theShire.appendChild(shire);
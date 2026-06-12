// Declare variables below to save the different divs of your story.
let storyOpening = document.querySelector(".story-opening");
let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOneEnd = document.querySelector(".option-one-end");
let optionTwoEnd = document.querySelector(".option-two-end");
let title = document.querySelector(".title");
let wrapper = document.querySelector(".wrapper");
let body = document.querySelector("body");





// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


optionOne.addEventListener('click', function () {
    optionOneScreen.style.display = "block";
    storyOpening.style.display = "none";
    optionTwo.style.display = "none";
    optionOne.style.display  = "none";
});

optionOneScreen.addEventListener('keydown', function () {
    optionOneEnd.style.display = "block";
    optionOneScreen.style.display = "none";
    title.innerHTML = "Spurs Win!";
});


optionTwo.addEventListener('click', function () {
    optionTwoScreen.style.display = "block";
    storyOpening.style.display = "none";
    optionTwo.style.display = "none";
    optionOne.style.display  = "none";
});

optionTwoScreen.addEventListener('keydown', function () {
    optionTwoEnd.style.display = "block";
    optionTwoScreen.style.display = "none";
    title.innerHTML = "Knicks Win!";
});
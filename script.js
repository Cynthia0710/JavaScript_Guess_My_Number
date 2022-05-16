'use strict';

// What's the DOM and DOM Manipulation
/*
// DOM: structured representation of html documents, allow javascript to access html elements and styles to manipulate them (change text, html attributes and even css styles)

// document - element(html) - element(<head>) - element(<title>) - text("a simple page")
//                          - element(<body>) - element(<section>) - element(<p>) - element(<a>) - text("link")
//                                                                                - text("a paragraph")
//                                                                 - element(<p>) - text("second paragraph")
//                                            - element(<section>) - element(<img>)
// document: special object that is entry point to the DOM, for example, document.querySelector()

// DOM !== JavaScript
// DOM methods and properties for DOM manipulation
// DOM are part of something called the web APIs
// API: application programming interface
// a web APIs are libraries that are also written in JavaScript and that are automatically available for ua to use
*/


// Selecting and Manipulating Elements
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!"
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;
// input.textContent is for other elements to get the content of the element.
//Any node has a "textContent", including text nodes which are not elements. It represents the text content of the node itself along with any and all descendants.

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
// input.value is for form elements to get the value of the form element.
// But only input elements have a "value". It represent the input data supplied by the user or provided initially by the code. Also, input elements may have a "textContent" property but it will always be empty since they are void elements.
*/


// Handling click events

// const x = function () {
//     console.log(23);
// }

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // state variable
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    // when there is no input
    if (!guess) {
        // document.querySelector(".message").textContent = "No number!";
        displayMessage("No number!");

        // when player wins
    } else if (guess === secretNumber) {
        // document.querySelector(".message").textContent = "Correct Number!";
        displayMessage("Correct Number!");
        document.querySelector(".number").textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        // when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector(".message").textContent = guess > secretNumber ? "Too high!" : "Too low!";
            displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            // document.querySelector(".message").textContent = "You lose the game!";
            displayMessage("You lose the game!");
            document.querySelector(".score").textContent = 0;
        }
    }
    /*
        // when guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too high!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You lose the game!";
            document.querySelector(".score").textContent = 0;
        }

        // when guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too low!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You lose the game!";
            document.querySelector(".score").textContent = 0;
        }
    }*/

});
// first argument ("click"): the name of the event that we're listening for
// second argument: function value, the function code that we want to execute whenever the event happens, this function only be called as soon as the event happens

/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function,restore initial values of the 'score' and 'secretNumber' variables
3. Restore the initial conditions of the message,number, score and guess input
fields
4. Also restore the original background color(#222)and number width(15rem)
GOOD LUCK 😀
*/

document.querySelector(".again").addEventListener("click", function () {
    // restore content
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector(".message").textContent = "Start guessing...";
    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    // css restore
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});
// import functions and grab DOM elements
import { countsAsAYes } from './utils.js';

const quizButton = document.getElementById('launch-quiz');
const resultsArea = document.getElementById('secret-div');


// initialize state

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    alert('So you think you know me?');

    const confirmation = confirm('Are you ready to test your memory?');

    if (!confirmation) return;

    let correctAnswers = 0;


    const firstName = prompt('What is your first name?');
    const lastName = prompt('What is your last name?');


    const firstAnswer = prompt('Did I live in a city outside the U.S.?');
    if (countsAsAYes(firstAnswer)) correctAnswers++;

    const secondAnswer = prompt('Is music a particular passion I want to enmesh with coding?');
    if (!countsAsAYes(secondAnswer)) correctAnswers++;

    const thirdAnswer = prompt('Has my dance work used X-Box Kinect and Motion Capture before?');
    if (countsAsAYes(thirdAnswer)) correctAnswers++;

    const resultsString = `Wow, ${firstName} ${lastName}... you either know me really well, or not at all, but you got ${correctAnswers} on point. So you tell me!`;
    resultsArea.textContent = resultsString;

});
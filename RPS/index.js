const handOptions = {
    "rock": "assets/rockimage.png",
    "paper": "assets/paperimg.png",
    "scissor": "assets/simage.png"
}

/*Timer section*/
const timerElement = document.getElementById("timer");
let countdown = 0; // Initial countdown time in seconds
let timerInterval;

function updateTimer() {
    timerElement.textContent = countdown;

    if (countdown <= 0) {
        clearInterval(timerInterval);
        countdown = 0;
    } else {
        countdown--;
    }
}

/*initial score*/

let uSCORE = 0;
let cSCORE = 0;

//play game and display result
const pickUserHand = (hand) => {
    let hands = document.querySelector(".handchoices");
    hands.style.display = "none";
    // //countdown = 3; // Set the countdown time to 3 seconds
    // clearInterval(timerInterval); // Clear any existing intervals
    // updateTimer(); // Initial display
    // timerInterval = setInterval(updateTimer, 1000);
    // closerule();

    let contest = document.querySelector(".resultbox");
    contest.style.display = "flex";

    // set user Image
    document.getElementById("userpicimage").src = handOptions[hand];
    setTimeout(() => {
        let pc = document.querySelector("#pcpickimage");
        pc.style.visibility = " visible";
        let winnerbox = document.querySelector(".winresultbox");
        winnerbox.style.display = "flex";
        let counter = document.querySelector(".pulsecontainer");
        counter.style.visibility = "hidden";

        pickComputerHand(hand);
    }, );
};

const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissor"];
    let cpHand = hands[Math.floor(Math.random() * hands.length)];

    // set computer 
    document.getElementById("pcpickimage").src = handOptions[cpHand]

    referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {

    //for set score to local storage


    if (userHand == "paper" && cpHand == "scissor") {
        setDecision("YOU LOST");
        increaseScore("cSCORE");
    }
    if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN");
        increaseScore("uSCORE");

    }
    if (userHand == "paper" && cpHand == "paper") {
        setDecision("TIE UP");
    }
    if (userHand == "rock" && cpHand == "scissor") {
        setDecision("YOU WIN");
        increaseScore("uSCORE");
    }
    if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOST");
        increaseScore("cSCORE");
    }
    if (userHand == "rock" && cpHand == "rock") {
        setDecision("TIE UP");
    }
    if (userHand == "scissor" && cpHand == "scissor") {
        setDecision("TIE UP");
    }
    if (userHand == "scissor" && cpHand == "rock") {
        setDecision("YOU LOST");
        increaseScore("cSCORE");
    }
    if (userHand == "scissor" && cpHand == "paper") {
        setDecision("YOU WIN");
        increaseScore("uSCORE");
    }

};

const restartGame = () => {
    let contest = document.querySelector(".resultbox");
    contest.style.display = "none";
    let pc = document.querySelector("#pcpickimage");
    pc.style.visibility = " hidden";
    let hands = document.querySelector(".handchoices");
    hands.style.display = "flex";
    let winnerbox = document.querySelector(".winresultbox");
    winnerbox.style.display = "none";
    let nextbutton = document.querySelector(".nextbutton");
    nextbutton.style.display = "none";
    let counter = document.querySelector(".pulsecontainer");
    counter.style.visibility = "visible";
    counter.style.background = "#f8f40c32";
    let texthide = document.querySelector(".waitpc");
    texthide.style.display = "flex";
    pulsevisibilityoff();
    pulseoff();

}

const setDecision = (decision) => {
    document.querySelector(".winresult h1").innerText = decision;
}


document.addEventListener('DOMContentLoaded', function() {
    let currentScore = parseInt(localStorage.getItem('uSCORE')) || 0;
    document.getElementById('uSCORE').textContent = currentScore;
    let ccurrent = parseInt(localStorage.getItem('cSCORE')) || 0;
    document.getElementById('cSCORE').textContent = ccurrent;

});




function increaseScore(score) {
    // Get the current score from storage or set it to 0 if not present

    let currentScore = parseInt(localStorage.getItem('uSCORE')) || 0;
    // Increment the score

    let ccurrentScore = parseInt(localStorage.getItem('cSCORE')) || 0;
    // Increment the score

    // Update the score in storage
    if (score == "uSCORE") {
        let nextbutton = document.querySelector(".nextbutton");
        nextbutton.style.display = "flex";
        currentScore++;
        localStorage.setItem('uSCORE', currentScore);
        // Display the updated score
        document.getElementById('uSCORE').textContent = currentScore;
        pulsevisibilityon();
    } else {
        ccurrentScore++;
        localStorage.setItem('cSCORE', ccurrentScore);
        // Display the updated score
        document.getElementById('cSCORE').textContent = ccurrentScore;
        pulseon();
    }

}



function openrule() {
    let ruleopen = document.querySelector(".rulecontainer");

    ruleopen.style.display = "flex";
}

function closerule() {
    let ruleopen = document.querySelector(".rulecontainer");

    ruleopen.style.display = "none";
}


function pulsevisibilityon() {
    let pulse = document.querySelector(".pulsecontainer1>span");
    let container = document.querySelector(".pulsecontainer1");
    container.style.visibility = "visible";
    pulse.style.visibility = "visible";
}

function pulsevisibilityoff() {
    let pulse = document.querySelector(".pulsecontainer1>span");
    let container = document.querySelector(".pulsecontainer1");
    container.style.visibility = "hidden";
    pulse.style.visibility = "hidden";
}

function pulseon() {

    let pulse = document.querySelector(".pulsecontainer>span");
    let container = document.querySelector(".pulsecontainer");
    container.style.visibility = "visible";
    pulse.style.visibility = "visible";
    container.style.background = "rgba(17, 174, 3, 0.45)";
    let texthide = document.querySelector(".waitpc");
    texthide.style.display = "none";

}

function pulseoff() {
    let pulse = document.querySelector(".pulsecontainer>span");
    pulse.style.visibility = "hidden";
}
const openButton = document.getElementById("openButton");

const continueButton = document.getElementById("continueButton");

const questionButton = document.getElementById("questionButton");

const soundButton = document.getElementById("soundButton");

const yesMusic = document.getElementById("yesMusic");
    yesMusic.volume = 0;
function fadeInMusic() {

    soundButton.textContent = "🔊 Sound On";

    yesMusic.volume = 0;

    yesMusic.play();

    let volume = 0;

    const fade = setInterval(function() {

        volume += 0.05;

        if (volume >= 1) {

            volume = 1;

            clearInterval(fade);

        }

        yesMusic.volume = volume;

    }, 200);

}

soundButton.addEventListener("click", function() {

    if (yesMusic.muted) {

        yesMusic.muted = false;

        soundButton.textContent = "🔊 Sound On";

    } else {

        yesMusic.muted = true;

        soundButton.textContent = "🔇 Sound Off";

    }

});

const yesButton = document.getElementById("yesButton");

const noButton = document.getElementById("noButton");

const noCard = document.getElementById("noCard");

const firstCard = document.getElementById("firstCard");

const secondCard = document.getElementById("secondCard");

const thirdCard = document.getElementById("thirdCard");

const questionCard = document.getElementById("questionCard");

const yesCard = document.getElementById("yesCard");

const progressDots =
    document.querySelectorAll(".progressDot");
const progress =
    document.querySelector(".progress");

function updateProgress(stage) {

    progressDots.forEach(function(dot, index) {

        dot.classList.toggle(
            "active",
            index === stage
        );

    });

}


openButton.addEventListener("click", function() {

    firstCard.classList.add("hidden");

    secondCard.classList.remove("hidden");

    updateProgress(1);

});

continueButton.addEventListener("click", function() {

    secondCard.classList.add("hidden");

    thirdCard.classList.remove("hidden");

    updateProgress(2);

});


questionButton.addEventListener("click", function() {

    thirdCard.classList.add("hidden");

    questionCard.classList.remove("hidden");

    updateProgress(3);

});

yesButton.addEventListener("click", function() {

    questionCard.classList.add("hidden");

    yesCard.classList.remove("hidden");

    progress.classList.add("hidden");

    soundButton.style.display = "block";

    fadeInMusic();

    celebrate();

});

let noClicks = 0;

const noMessages = [
    "Are you sure? 🥺",
    "Really? 😭",
    "Think about it...",
    "Come onnn 😭",
    "Okay, that's fair ❤️"
];

noButton.addEventListener("click", function() {

    noClicks++;

    if (noClicks <= noMessages.length) {

        noButton.textContent =
            noMessages[noClicks - 1];

    }

    if (noClicks === noMessages.length) {

        setTimeout(function() {

            questionCard.classList.add("hidden");

            noCard.classList.remove("hidden");

            progress.classList.add("hidden");

        }, 800);

    }

});
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.textContent = Math.random() > 0.5
        ? "❤️"
        : "💕";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(function() {

        heart.remove();

    }, 8000);

}


setInterval(createHeart, 700);

function celebrate() {

    const symbols = ["❤️", "💕", "💗", "🎉", "✨"];

    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");

        heart.classList.add("celebrationHeart");

        heart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom =
            Math.random() * 30 + "vh";

        heart.style.animationDelay =
            Math.random() * 0.8 + "s";

        document.body.appendChild(heart);

        setTimeout(function() {

            heart.remove();

        }, 4000);

    }

}
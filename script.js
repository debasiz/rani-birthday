const birthday = new Date("2026-11-26T00:00:00+05:30").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthday - now;
    const countdown = document.getElementById("countdown");

    if (distance <= 0) {
        countdown.innerHTML = "🎉 Happy Birthday, Rani! ❤️";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    countdown.innerHTML =
        days + " Days " +
        hours + " Hours " +
        minutes + " Minutes " +
        seconds + " Seconds ❤️";
}

updateCountdown();
setInterval(updateCountdown, 1000);


// OPEN AND CLOSE LOVE LETTER

function openLetter() {
    const letter = document.getElementById("loveLetter");
    const button = document.querySelector(".letter-button");

    letter.classList.toggle("show");

    if (letter.classList.contains("show")) {
        button.innerHTML = "Close My Letter 💗";

        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    } else {
        button.innerHTML = "Open My Heart ❤️";
    }
}
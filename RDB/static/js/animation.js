const galaxy = document.querySelector(".galaxy");

if (galaxy) {
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("span");

    star.className = "star";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";

    galaxy.appendChild(star);
  }
}
const revealButton = document.getElementById("revealGift");
const giftBox = document.querySelector(".gift-box");

 if (revealButton && giftBox) {
    revealButton.addEventListener("click", () => {
        giftBox.classList.add("open");

        const message = document.getElementById("birthdayMessage");

        if (message) {
            message.style.display = "block";
            message.style.opacity = "1";
            message.style.visibility = "visible";
        }

        revealButton.textContent = "🎉 Surprise Revealed!";
    });
}
 const letterButton = document.querySelector(
    'button[onclick*="letter"]'
);

const letter = document.getElementById("letter");

if (letterButton && letter) {
    letterButton.addEventListener("click", function () {
        letter.style.display = "block";
    });
}
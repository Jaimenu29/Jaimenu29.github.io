document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("flip-card-inner").addEventListener("click", flipCard);
});

function flipCard() {
  const card = document.getElementById("flip-card-inner");
  card.style.transform = "rotateY(180deg)";

  setTimeout(openEnvelope, 1500);
}

function openEnvelope() {
  const one = document.getElementById("one");
  const companyName = document.getElementById("companyName");

  one.style.transform = "rotate(180deg)";
  companyName.style.display = "none";

  setTimeout(letterUp, 2000);
}

function letterUp() {
  const letter = document.getElementById("letter");
  const one = document.getElementById("one");

  one.style.zIndex = 1;
  letter.style.zIndex = 2;

  let i = 0;
  let id = null;
  clearInterval(id);

  id = setInterval(() => {
    if (i == 500) {
      clearInterval(id);
    } else {
      letter.style.top = -i + "px";
      i++;
    }
  }, 5);

  setTimeout(letterDown, 3000);
}

function letterDown() {
  const letter = document.getElementById("letter");
  const card = document.getElementById("flip-card");

  letter.style.top = -500 + "px";
  letter.style.zIndex = 4;

  let i = 0;
  let id = null;
  clearInterval(id);

  id = setInterval(() => {
    if (i == 100) {
      clearInterval(id);
    } else {
      letter.style.top = -400 + i * 5 + "px";
      letter.style.transform = "rotate(" + -i / 18 + "deg)";

      card.style.transform = "rotate(" + i / 18 + "deg)";

      i++;
    }
  }, 10);

  setTimeout(() => {
    const popUp = document.getElementById("popUp");
    popUp.style.display = "block";
    popUp.style.zIndex = 5;
  }, 2000);
}

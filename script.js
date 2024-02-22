var time = 60;

var display = document.getElementById("countdown");
var message = document.getElementById("finish");

var confessions = [
  {
    good: "Good: Andhere me dikhta nai",
    bad: "Bad: GenSec",
    funny: "Funny: Pata nai",
  },
  {
    good: "Good: Smiles everytime",
    bad: "Bad: Dusra ka code erase krke apna khud ka likhna",
    funny: "Funny: Punjabi pasand hai isko",
  },
  {
    good: "Good: Cheeks",
    bad: "Bad: Mohin",
    funny: "Funny: Mota hota tha",
  },
  {
    good: "Good: Muslim hai",
    bad: "Bad: Doesn't talk too much",
    funny: "Funny: He is roommate of tanveer pardhaan",
  },
  {
    good: "Good: knowledge about tech like web dev, ai, ml, good cg",
    bad: "Bad: Excessive Study",
    funny: "Funny: Called Pi",
  },
];
var names = ["Parag", "Reetinder", "Madhav", "Zubair", "Arshpreet"];
var index = 0;
function updatecount() {
  display.textContent = time;
}

function displaymessage() {
  message.textContent = names[index];
  message.style.display = "block";
}

function countdown() {
  var count = setInterval(() => {
    time--;
    updatecount();
    if (time === 0) {
      clearInterval(count);
      displaymessage();
      var anim = lottie.loadAnimation(animationData);
    }

    if (time <= 30 && time >= 10) {
      display.style.color = "yellow";
    } else if (time < 10) {
      display.style.color = "red";
    }
    else{
        display.style.color = "green"
    }
  }, 1000);
}

countdown();

var animationData = {
  container: document.getElementById("lottie"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "/assets/time_up.json",
};

var animdata = {
    container: document.getElementById("lottie_time"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/assets/timer.json"
}
var splash_anim = {
    container: document.getElementById("splash_lottie"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/assets/loading.json"
}

lottie.loadAnimation(animdata)
lottie.loadAnimation(splash_anim)

var play = document.getElementById("play");

play.addEventListener("click", () => {
  const targetY = next.offsetTop;
  window.scrollTo({
    top: targetY,
    behavior: "smooth",
  });
});

var next = document.getElementById("next");
var confess_good = document.getElementById("confess_good");
var confess_bad = document.getElementById("confess_bad");
var confess_funny = document.getElementById("confess_funny");

next.addEventListener("click", () => {
  confess_good.textContent = confessions[index].good;
  confess_bad.textContent = confessions[index].bad;
  confess_funny.textContent = confessions[index].funny;

  index = (index + 1) % confessions.length;
  if (time === 0) {
    console.log("count is 0");
    console.log("clicked");

    countdown();
    time = 61;
    message.style.display = "none";
  } else {
    console.log("clicked");
    time = 61;
  }
});

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var splash = document.getElementById('splash');
        var page = document.getElementById('main');

        splash.style.display = 'none';
        page.style.display = 'block';
    }, 3000);
});


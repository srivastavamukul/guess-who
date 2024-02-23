var time = 20;

var display = document.getElementById("countdown");
var message = document.getElementById("finish");

var confessions = [
  {
    good: "Good: Andhere me dikhta nai",
    bad: "Bad: GenSec",
    funny: "Funny: Pata nai",
    name: "Parag",
  },
  {
    good: "Good: Muslim hai",
    bad: "Bad: Dusra ka code erase krke apna khud ka likhna",
    funny: "Funny: Punjabi pasand hai isko",
    name: "Zubair",
  },
  {
    good: "Good: Cheeks",
    bad: "Bad: Mohin",
    funny: "Funny: Mota hota tha",
    name: "Madhav",
  },
  {
    good: "Good: Smiles everytime",
    bad: "Bad: Doesn't talk too much",
    funny: "Funny: He is roommate of tanveer pardhaan",
    name: "Reetinder",
  },
  {
    good: "Good: knowledge about tech like web dev, ai, ml, good cg",
    bad: "Bad: Excessive Study",
    funny: "Funny: Called Pi",
    name: "Arshdeep",
  },

  {
    good: "Good: Wheely bohit achi marta he",
    bad: "Bad: Kisi ka bhai aur kisi ka bhai",
    funny: "Funny: Juniors se iron karata he",
    name: "Salin",
  },

  {
    good: "Good: Patience",
    bad: "Bad: Ram mandir ki story nhi lgai thi",
    funny: "Funny: ********o ki collection dekhne ka shonk h",
    name: "Zubair",
  },

  {
    good: "Good: Boht sare charche he iske bare me",
    bad: "Bad: Bal thore kam he 🙃",
    funny: "Funny: Brand ambassador of brave browser",
    name: "Raj",
  },
  {
    good: "Good: Nimble witted",
    bad: "Bad: Too much obedient with all",
    funny: "Funny: I had to write about her even though I didn't even know her😅",
    name: "Anubha",
  },

  {
    good: "Good: Too good at whatever he/she does",
    bad: "Bad: Too good at whatever he/she does",
    funny: "Funny: [/]",
    name: "Rachan",
  },

  {
    good: "Good: He greets everyone very well",
    bad: "Bad: R**** 211",
    funny: "Funny: Hor vai kiddan!",
    name: "Kunal",
  },

  {
    good: "Good: Drake",
    bad: "Bad: Drake",
    funny: "Funny: Drake",
    name: "Preetinder",
  },
];
var index = 0;
function updatecount() {
  display.textContent = time;
}

function displaymessage() {  
  message.style.display = "block";
}

var confess_good = document.getElementById("confess_good");
var confess_bad = document.getElementById("confess_bad");
var confess_funny = document.getElementById("confess_funny");

confess_good.textContent = confessions[index].good;
confess_bad.textContent = confessions[index].bad;
confess_funny.textContent = confessions[index].funny;
message.textContent = confessions[index].name;

function countdown() {

  var count = setInterval(() => {
    time--;
    updatecount();
    if (time === 0) {
      clearInterval(count);
      displaymessage();
      var anim = lottie.loadAnimation(animationData);
    }

    if (time <= 10 && time >= 5) {
      display.style.color = "yellow";
    } else if (time < 5) {
      display.style.color = "red";
    } else {
      display.style.color = "green";
    }
  }, 1000);
}


var animationData = {
  container: document.getElementById("lottie"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "./assets/time_up.json",
};

var animdata = {
  container: document.getElementById("lottie_time"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./assets/timer.json",
};
var splash_anim = {
  container: document.getElementById("splash_lottie"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./assets/loading.json",
};

lottie.loadAnimation(animdata);
lottie.loadAnimation(splash_anim);

var play = document.getElementById("play");

play.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
  countdown();
});

var next = document.getElementById("next");


next.addEventListener("click", () => {
  index = (index + 1) % confessions.length;

  confess_good.textContent = confessions[index].good;
  confess_bad.textContent = confessions[index].bad;
  confess_funny.textContent = confessions[index].funny;
  message.textContent = confessions[index].name;
  console.log(index);
  

  if (time === 0) {
    countdown();
    time = 21;
    message.style.display = "none";
  } else {
    time = 21;
    console.log(index);
    
  }
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    var splash = document.getElementById("splash");
    var page = document.getElementById("main");

    splash.style.display = "none";
    page.style.display = "block";
  }, 3000);
});

const buttonHandler = {
  handleMouseMove: function(e) {
      const magnetStrength = 10;
      const btn = document.querySelector('#play');
      const { left, top, width, height } = btn.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const magnetX = distanceX / magnetStrength;
      const magnetY = distanceY / magnetStrength;
      btn.style.transform = `translate(${magnetX}px, ${magnetY}px)`;
  },
  handleMouseLeave: function() {
      const btn = document.querySelector('#play');
      btn.style.transform = 'translate(0, 0)';
  }
};

document.addEventListener('mousemove', buttonHandler.handleMouseMove.bind(buttonHandler));
document.addEventListener('mouseleave', buttonHandler.handleMouseLeave.bind(buttonHandler));



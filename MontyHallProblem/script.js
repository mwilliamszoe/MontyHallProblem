let selected = false;
let goat =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGm2W64qYy52t_mcDtngc9a8QsLVtPLtzJBlryjC6BrP5YqXdO";
let money =
  "https://s3.amazonaws.com/freestock-prod/450/freestock_567448402.jpg";
let door =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvyajG9sc-9P7xGTVymUNz7DD_6bVU0M51KVHzJr6ZoloFejkQOg";

door1 = document.querySelector("#door1");
door2 = document.querySelector("#door2");
door3 = document.querySelector("#door3");

door1.onclick = function() {
  if (door3.src === door) {
    door3.src = goat;
  } else {
    door2.src = goat;
    door1.src = money;
    setTimeout(function() {
      alert("Yay! You chose correctly");
    }, 400);
  }
};

door2.onclick = function() {
  if (door3.src === door) {
    door3.src = goat;
  } else {
    door2.src = goat;
    door1.src = money;
    setTimeout(function() {
      alert("Sorry, you got a goat");
    }, 400);
  }
};

door3.onclick = function() {
  if (door2.src === door) {
    door2.src = goat;
  } else {
    door3.src = goat;
    door1.src = money;
    setTimeout(function() {
      alert("Sorry, you got a goat");
    }, 400);
  }
};

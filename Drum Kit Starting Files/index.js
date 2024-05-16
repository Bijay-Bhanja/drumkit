var noOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  var buttonInnerHtml = this.innerHTML;

  switch (key) {
    case "w"://w
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a"://a
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s"://s
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d"://d
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j"://j
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k"://k
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l"://l
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(buttonInnerHtml);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

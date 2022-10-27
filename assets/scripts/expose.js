// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //declare objects on the html file.
  const dropdown = document.getElementById('horn-select'); //the selector for horn
  const hornImg = document.querySelector("[src='assets/images/no-image.png']");
  //image of the horn selected
  const volumeControl = document.getElementById("volume-controls"); //volume controller
  const volumeSlide = document.querySelector("[type='range']") //volume slide
  const volumeImg = document.querySelector("[src='assets/icons/volume-level-2.svg']");
  //volume's horn image
  const playSound =document.querySelector('button');
  const audioFile = document.getElementsByClassName('hidden');

  //add event listener for the drop down selector
  dropdown.addEventListener('change', function(){
    if (dropdown.value == "select") {
      hornImg.alt = "No image selected";
      hornImg.src = "assets/images/no-image.png";
      audioFile.src = "";
    } else {
      hornImg.alt = "The" + dropdown.value + "image selected";
      //select image based on the values
      hornImg.src = "assets/images/" + dropdown.value + ".svg";
      //select sound file based on the value of the selector
      audioFile.src = "assets/audio/" + dropdown.value + ".mp3";
    }
  })
  //add event listener for volume slider
  volumeSlide.addEventListener('change', function(){
    //change audio file's volume based on the values
    audioFile.volume = volumeSlide.value / 100;
    //change volume image based on the values
    if (volumeSlide.value < 1) {
      volumeImg.alt = "Volume level 0";
      volumeImg.src = "assets/icons/volume-level-0.svg";
    } else if (volumeSlide.value < 33) {
      volumeImg.alt = "Volume level 1";
      volumeImg.src = "assets/icons/volume-level-1.svg";
    } else if (volumeSlide.value < 67) {
      volumeImg.alt = "Volume level 2";
      volumeImg.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImg.alt = "Volume level 3";
      volumeImg.src = "assets/icons/volume-level-3.svg";
    }
  })
  //add event listener for the play sound button
  playSound.addEventListener('click', function() {
    if (dropdown.value == "party-horn") {
      //get the confetti!
    }
    //play the audio
    audioFile.play();
  })
}

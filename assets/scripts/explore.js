// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis; //get the voices available
  const faceImg = document.querySelector("[src='assets/images/smiling.png']");
  //find the face image to replace when talking
  const textsToVoice = document.getElementById('text-to-speak');
  //the textbox containing the contents
  const voiceSelect = document.getElementById('voice-select');
  //the drop down to select voices
  const voiceButton = document.querySelector('button');
  //click the botton to speak

  let textToSpeak;

  synth.addEventListener('voiceschanged', (event) => {
    //get the upadted voice list
    let voices = window.speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      //add the new voices to the select
      const option = document.createElement('option');
      //change the name of the options
      option.textContent = voices[i].name + "(" + voices[i].lang + ")";
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      //add it to the drop down selector
      voiceSelect.appendChild(option);
    }
  })
  //when the speak button is pressed
  voiceButton.addEventListener('click', function() {
    faceImg.src = "assets/images/smiling-open.png";
    const utterThis = new SpeechSynthesisUtterance(textsToVoice.value);
    //create the text to speak
    //choose the selected voice
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    //get the upadted voice list
    let voices = window.speechSynthesis.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      //find the voice with the matching name
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        break;
      }
    }
    synth.speak(utterThis); //play the sound
    //change the image back when it's done speaking
    utterThis.addEventListener('end', function(){
      faceImg.src = "assets/images/smiling.png";
    })
  }) 
}
var diagnostic = document.querySelector('.output');
var button = document.querySelector('.button');
var langSelect = document.getElementById('language')
var language = langSelect.value;

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent
var recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.lang = language;
recognition.interimResults = true;
recognition.maxAlternatives = 1;

langSelect.onchange = function() {
  language = langSelect.value;
  recognition.lang = language;
}

button.onclick = function() {
  recognition.start();
}

recognition.onresult = function(event) {
  diagnostic.textContent = 'Result received: ' + event.results[0][0].transcript + '.';
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}
var recognition = new webkitSpeechRecognition();
recognition.onresult = function(event) { 
	
	var speech = event.results[0][0].transcript;
	var text = document.getElementById('text').innerHTML = '<b>Result</b>: '+speech;
}
recognition.start();
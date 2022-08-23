


click_to_convert.addEventlistener('click',function(){
    var speech = true;
    window.speechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventlistener('result', e=> {
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)

        convert_text.innerHTML = transcript;
    })

    if (speech == true) {
        recognition.start();
    }
})
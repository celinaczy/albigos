
    var audio1 = document.getElementById("audioID");

    function playAudio() {
        audio1.pause();
    audio1.play();
    }
    function stopAudio() {
        audio1.pause();
        audio1.currentTime = 0;
    }

//01. Setting up some music:

    //a) Click Sound:
        let clickSound = document.createElement("audio");
        clickSound.setAttribute("src", "./Resources/mouseDoubleClickSound.wav");
        clickSound.volume = 0.2;
        function playClickSound()
        {
            clickSound.play();
        }

    //b) Correct Option Sound:
        let correctOptionSound = document.createElement("audio");
        correctOptionSound.setAttribute("src", "./Resources/correctOptionSound.mp3");
        correctOptionSound.volume = 0.1;
        function playCorrectOptionSound()
        {
            correctOptionSound.play();
        }

    //c) Wrong Option Sound:
        let wrongOptionSound = document.createElement("audio");
        wrongOptionSound.setAttribute("src", "./Resources/wrongOptionSound.mp3");
        wrongOptionSound.volume = 0.1;
        function playWrongOptionSound()
        {
            wrongOptionSound.play();
        }


export {playClickSound, playCorrectOptionSound, playWrongOptionSound};


//NOTE: The "volume" attribute does not seem to be working in iOS devices. I shall try to fix this bug soon.
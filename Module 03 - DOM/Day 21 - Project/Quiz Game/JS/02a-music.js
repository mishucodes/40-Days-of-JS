//01. Setting up some music:

    //a) Click Sound:
        let clickSound = document.createElement("audio");
        clickSound.setAttribute("src", "./Resources/mouseDoubleClickSound.wav");
        function playClickSound()
        {
            clickSound.play();
        }

    //b) Correct Option Sound:
        let correctOptionSound = document.createElement("audio");
        correctOptionSound.setAttribute("src", "./Resources/correctOptionSound.mp3");
        function playCorrectOptionSound()
        {
            correctOptionSound.play();
        }

    //c) Wrong Option Sound:
        let wrongOptionSound = document.createElement("audio");
        wrongOptionSound.setAttribute("src", "./Resources/wrongOptionSound.mp3");
        function playWrongOptionSound()
        {
            wrongOptionSound.play();
        }


export {playClickSound, playCorrectOptionSound, playWrongOptionSound};
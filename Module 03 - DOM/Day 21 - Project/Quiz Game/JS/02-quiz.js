//Importing Scripts:
    import * as helperFunctions from "./02a-helperFunctions.js";
    import * as music from "./02b-UI-Sounds.js";

//00. Disabling accidental double-clicks on touchscreen devices:
    let lastTap = 0;
    window.addEventListener("touchend", (event) =>
        {
            const now = Date.now();
            if (now - lastTap < 300)
                event.preventDefault(); //stops double-tap zoom
            lastTap = now;
        }, { passive: false });


//Global Variables:
    const params = new URLSearchParams(window.location.search);
    const examName = params.get("exam");
    const examYear = params.get("year");
    const examPath = `./Exams/${examName}${examYear}.json`;
//ACTUAL GLOBAL VARIABLES:
    let questionPaper = await helperFunctions.fetchQuestionPaper(examPath);
    let score = 0;
    let progress =
        {
            progressOnDOM: 0,
            actualProgressForKeepingScore: 0
        };
//Global Elements:
    let examNameElement = document.querySelector("#quizName");
    let progressElement = document.querySelector("#quizHeader span");
    let optionsElement = document.querySelector("#options");
    let previousButton = document.querySelector("#previousButton");
    let nextButton = document.querySelector("#nextButton");
    let controlsElement = document.querySelector("controls");



    
//01. Adding a small warning:
    helperFunctions.alertUser("Some Questions have all options marked wrong. Don't Worry. Those questions were removed by", examName);

//02. Setting up the Exam Name on Display:
    examNameElement.textContent = `${examName} ${examYear}`;
    examNameElement.onclick = helperFunctions.confirmRestart;

//03. Showing the Question Paper on DOM:
    helperFunctions.showQuestion(questionPaper);

//04. Showing the correct answer & updating the score when user clicks on an option:
    optionsElement.onclick = (event) => 
        {
            score = helperFunctions.showAnswerAndUpdateScore(event, questionPaper, score, progress);
        };

//05. Activating the "next" & "previous" Buttons:
    previousButton.addEventListener('click', () => helperFunctions.jumpToPreviousQuestionResponsibly(questionPaper, progress));
    nextButton.addEventListener('click', () => helperFunctions.jumpToNextQuestionResponsibly(questionPaper, progress, score, optionsElement));
    previousButton.addEventListener("click", music.playClickSound);
    nextButton.addEventListener("click", music.playClickSound);

//06. Activating some keyboard keys for desktop users ("Enter", "Escape", & more...):
    window.addEventListener("keyup", (event) =>
        {
            switch(event.key)
            {
                case "Enter":
                case "ArrowRight":
                    helperFunctions.jumpToNextQuestionResponsibly(questionPaper, progress, score, optionsElement);
                    break;
                case "Escape":
                case "ArrowLeft":
                    helperFunctions.jumpToPreviousQuestionResponsibly(questionPaper, progress);
                    break;
            }
            helperFunctions.updateProgressBar(progressElement, progress, questionPaper);
        })
    window.addEventListener("keydown", (e) => e.preventDefault()); //preventing accidental clicks...

//07. Every time you click on any of the control buttons ("previous"/"next"), the progress bar updates:
    controlsElement.addEventListener("click", () => helperFunctions.updateProgressBar(progressElement, progress, questionPaper));
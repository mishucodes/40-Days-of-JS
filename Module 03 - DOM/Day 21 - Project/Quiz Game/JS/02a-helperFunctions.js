//Importing some scripts:
    import * as music from "./02b-UI-Sounds.js";

//01. Issuing a Modal Warning:
    function alertUser(warning, examBody)
    {
        let modal = document.querySelector("#modal");
        let modalP = modal.querySelector("p");
        let modalButton = modal.querySelector("button");
        modalP.textContent = `${warning} ${examBody}.`;
        modalButton.addEventListener("click", () => 
            {
                music.playClickSound();
                modal.classList.add("hidden");
            });
    }

//02. Fetch Question Paper:
    async function fetchQuestionPaper(examPath)
    {
        try
        {
            let x = await fetch(examPath);
            let y = await x.json();
            return y;
        }
        catch(error)
        {
            console.error(error.message);
        }
    }


//03. "showQuestion" function definition:
    function showQuestion(questionPaper, progressOnDOM = 0)
    {
        //setting question:
            let questionElement = document.querySelector("#question");
            questionElement.textContent = questionPaper[progressOnDOM].question;
        //setting options:
            let optionsElement = document.querySelector("#options");
            let optionsFragment = document.createDocumentFragment();
            for(let option of questionPaper[progressOnDOM].options)
            {
                let newOption = document.createElement("li");
                let button = document.createElement("button");
                button.textContent = option;
                newOption.appendChild(button);
                optionsFragment.appendChild(newOption);
            }
            optionsElement.replaceChildren(optionsFragment);
    }

//04. Showing Correct Answer & Updating the Score:
    function showAnswerAndUpdateScore(event, questionPaper, score, progress)
        {
            if(event.target.nodeName !== "BUTTON")
                return score;
            //else:
                let options = document.querySelector("#options").children;
                let correctOptionIndex = questionPaper[progress.progressOnDOM].answer-1;
                let correctAnswer = questionPaper[progress.progressOnDOM].options[correctOptionIndex];
                //showing correct answer on DOM:
                for(let option of [...options])
                {
                    if(option.textContent === correctAnswer)
                        option.classList.add("correctAnswer");
                    else
                        option.classList.add("wrongAnswer");
                }
                //updating the actualProgress in the background & returning the new score:
                if(event.target.textContent === correctAnswer)
                    {
                        if(progress.progressOnDOM === progress.actualProgressForKeepingScore)
                        {
                            score++;
                            console.log('score:', score);
                        }
                        music.playCorrectOptionSound();
                    }
                else
                    music.playWrongOptionSound();
                if(progress.progressOnDOM === progress.actualProgressForKeepingScore)
                    progress.actualProgressForKeepingScore++;
                // console.log(progress);
                return score;
        }

//05. Announcing the Results (Concluding the Quiz):
    function announceResults(questionPaper, score)
    {
        let canvas = document.querySelector("#quizzes");
        // console.log(canvas);
        let fragment = document.createDocumentFragment();
        let h2 = document.createElement("h2");
        let p = document.createElement("p");

        h2.textContent = `You got ${score}/${questionPaper.length} correct!`;
        if(score < questionPaper.length/3)
            p.textContent = "You'll get there with practice. Keep it up!";
        else if(score < questionPaper.length/2)
            p.textContent = "You're doing well. Keep it up!";
        else
            p.textContent = "You're doing great. Keep going!";

        fragment.appendChild(h2);
        fragment.appendChild(p);
        canvas.replaceChildren(fragment);

        let home = document.createElement("a");
        home.textContent = "Take a new Test";
        home.setAttribute("href", "./index.html");
        document.querySelector("controls").replaceChildren(home);
    }



//05. Confirm Restarting of Quiz:
    function confirmRestart()
    {
        if(confirm("Restart this Exam?"))
            window.location.reload();
    }

//06. Helper Functions to skip to Previous & Next Question:
    //a) Going to Previous Question:
        function jumpToPreviousQuestionResponsibly(questionPaper, progress)
        {
            showQuestion(questionPaper, progress.progressOnDOM <= 0? 0: --(progress.progressOnDOM));
            // console.log(progress);
        }
    //b) Going to Next Question:
        function jumpToNextQuestionResponsibly(questionPaper, progress, score, optionsElement)
        {
            checkIfUserSkippedQuestion(optionsElement);
            if(++progress.progressOnDOM === questionPaper.length)
                announceResults(questionPaper, score);
            else
                showQuestion(questionPaper, progress.progressOnDOM);
            // console.log(progress);
            
            //Inner Function to see if user skipped the question without answering:
                function checkIfUserSkippedQuestion(optionsElement)
                {
                    if(!optionsElement.children[0].classList.contains("correctAnswer") && !optionsElement.children[0].classList.contains("wrongAnswer") && progress.progressOnDOM === progress.actualProgressForKeepingScore)
                        progress.actualProgressForKeepingScore++;
                }
        }

//07. Function to help update the Progress Bar on top:
    function updateProgressBar(progressElement, progress, questionPaper)
    {
        progressElement.textContent = `Progress: ${progress.progressOnDOM}/${questionPaper.length}`;
    }

export {alertUser, fetchQuestionPaper, showQuestion, showAnswerAndUpdateScore, announceResults, confirmRestart, jumpToPreviousQuestionResponsibly, jumpToNextQuestionResponsibly, updateProgressBar};
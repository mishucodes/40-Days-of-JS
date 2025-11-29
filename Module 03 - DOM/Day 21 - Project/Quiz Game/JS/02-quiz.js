//Importing Scripts:
    import * as music from "./02a-music.js";

//00. Disabling any double-click on phones:
    let lastTap = 0;
    window.addEventListener("touchend", (event) =>
        {
            const now = Date.now();
            if (now - lastTap < 300)
                event.preventDefault(); //stops double-tap zoom
            lastTap = now;
        }, { passive: false });


//01. Getting to know the exam:
    const params = new URLSearchParams(window.location.search);
    const examName = params.get("exam");
    const examYear = params.get("year");
//02. Adding a small warning:
    alertWithModal("Some Questions have all options marked wrong. Don't Worry. Those questions were removed by", examName);
    function alertWithModal(warning, examBody)
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



//03. Setting up the Exam Name on Display:
    let quizName = document.querySelector("#quizName");
    quizName.textContent = `${examName} ${examYear}`;
    quizName.addEventListener("click", () =>
        {
            if(confirm("Restart this Exam?")) //not the most beautiful UI, but we can work with this...
                window.location.reload();
        });
//04. Setting an initial score:
    let score = 0;
//05. Getting the progress bar:
    let progressElement = document.querySelector("#quizHeader span");
    //NOTE: actual setting of the same can only take place once we have the exam JSON. Check below (06):

//06. Importing the Exam JSON & calling "showQuiz()" to paint it on DOM:
    const quizPath = `./Exams/${examName}${examYear}.json`;
    let quiz;
    fetch(quizPath)
    .then(res => res.json())
    .then(data => 
        {
            quiz = data;
            progressElement.textContent = `Progress: 0/${quiz.length}`;
            showQuiz(quiz);
        })
    .catch(err => console.error("Failed to load quiz:", err));



//07. "showQuiz" function definition:
    function showQuiz(quiz, index = 0)
    {
        //checking if quiz ended:
            if(index === quiz.length)
            {
                console.log("quiz finished");
                announceResults();
                return;
            }
        //setting question:
            let questionElement = document.querySelector("#question");
            questionElement.textContent = quiz[index].question;
        //setting options:
            let optionsElement = document.querySelector("#options");
            let optionsFragment = document.createDocumentFragment();
            for(let option of quiz[index].options)
            {
                let newOption = document.createElement("li");
                let button = document.createElement("button");
                button.textContent = option;
                newOption.appendChild(button);
                optionsFragment.appendChild(newOption);
            }
            optionsElement.replaceChildren(optionsFragment);
    }

//08. Enabling the selection of options:
    let optionsElement = document.querySelector("#options");
    optionsElement.addEventListener("click", function(event)
        {
            if(event.target.nodeName === "BUTTON")
            {
                let options = this.children;
                for(let option of [...options])
                {
                    if(option.textContent === quiz[progress].options[quiz[progress].answer-1])
                        option.classList.add("correctAnswer");
                    else
                        option.classList.add("wrongAnswer");
                }
                if(event.target.textContent === quiz[progress].options[quiz[progress].answer-1])
                {
                    score++;
                    music.playCorrectOptionSound();
                }
                else
                    music.playWrongOptionSound();
            }
        });

//09. Activating the "next" & "previous" Buttons:
    let progress = 0;
    let previousButton = document.querySelector("#previousButton");
    let nextButton = document.querySelector("#nextButton");
    previousButton.addEventListener('click', () => showQuiz(quiz, progress === 0? progress: --progress));
    nextButton.addEventListener('click', () => showQuiz(quiz, ++progress));
    previousButton.addEventListener("click", music.playClickSound);
    nextButton.addEventListener("click", music.playClickSound);
//10. Helping you navigate via keyboard as well:
    document.addEventListener("keyup", (event) =>
        {
            if(event.key === "Enter")
                showQuiz(quiz, ++progress);
            else if(event.key === "Escape")
                showQuiz(quiz, progress === 0? progress: --progress);
            progressElement.textContent = `Progress: ${progress}/${quiz.length}`;
        })



//11. Keeping the Progress-Bar upto date:
    let controlsElement = document.querySelector("controls");
    controlsElement.addEventListener("click", () => {progressElement.textContent = `Progress: ${progress}/${quiz.length}`});

//12. Announcing the Results (Concluding the Quiz):
    function announceResults()
    {
        let canvas = document.querySelector("#quizzes");
        console.log(canvas);
        let fragment = document.createDocumentFragment();
        let h2 = document.createElement("h2");
        let p = document.createElement("p");

        h2.textContent = `You got ${score}/${quiz.length} correct!`;
        if(score < quiz.length/3)
            p.textContent = "You'll get there with practice. Keep it up!";
        else if(score < quiz.length/2)
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
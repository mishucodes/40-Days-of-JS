//disabling any double-click on phones:
    let lastTap = 0;
    window.addEventListener("touchend", (event) =>
        {
            const now = Date.now();
            if (now - lastTap < 300)
                event.preventDefault(); //stops double-tap zoom
            lastTap = now;
        }, { passive: false });

//00. Setting an initial score:
    let score = 0;
//01. Getting to know the exam:
    const params = new URLSearchParams(window.location.search);
    const examName = params.get("exam");
    const examYear = params.get("year");

//02. Setting up the progress bar:
    let progressElement = document.querySelector("#quizHeader span");
    //NOTE: actual setting can only take place once we know the exam type. check below (04):

//03. Setting up Exam Name on Display:
    let quizName = document.querySelector("#quizName");
    quizName.textContent = `${examName} ${examYear}`;

//04. Importing & calling to show Quiz:
    const quizPath = `./Resources/${examName}${examYear}.json`;
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

//05. Showing the Quiz on the DOM:
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

//06. Activating the Buttons:
    let progress = 0;
    let previousButton = document.querySelector("#previousButton");
    let nextButton = document.querySelector("#nextButton");
    previousButton.addEventListener('click', () => showQuiz(quiz, progress === 0? progress: --progress));
    nextButton.addEventListener('click', () => showQuiz(quiz, ++progress));

//07. Keeping the Progress-Bar upto date:
    let controlsElement = document.querySelector("controls");
    controlsElement.addEventListener("click", () => {progressElement.textContent = `Progress: ${progress}/${quiz.length}`})

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
                    score++;
            }
        });

//09. Announcing the Results (Concluding the Quiz):
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
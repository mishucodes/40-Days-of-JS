const supportedExams =
{
    AIBE: [2024, 2023],
    CLAT: [2024, 2023, 2022, 2021]
};
let examListTemplate = document.querySelector("#exams");
document.addEventListener("DOMContentLoaded", () => addExams(supportedExams, examListTemplate));

//01. Showing Supported Exams to the User:
    function addExams(supportedExams, examListTemplate)
    {
        let fragment = document.createDocumentFragment();
        for(let exam in supportedExams)
        {
            let newExam = examListTemplate.content.cloneNode(true);
            newExam.querySelector("li").addEventListener("click", (event) => showSupportedExamYears(event, examListTemplate));
            newExam.querySelector("h3").textContent = exam;
            fragment.appendChild(newExam);
        }
        let quizzes = document.querySelector("#quizzes");
        quizzes.appendChild(fragment);
    }

//02. Showing Supported Years of the Selected Exam to the User:
    function showSupportedExamYears(event, examListTemplate)
    {
        let examName = event.target.innerText;
        if(supportedExams?.examName)
            throw new Error("Something went wrong");
        //else:
        let fragment = document.createDocumentFragment();
        for(let examYear of supportedExams[examName])
        {
            let newExam = examListTemplate.content.cloneNode(true);
            newExam.querySelector("h3").textContent = examName + " " + examYear;
            newExam.querySelector("a").href = `./quiz.html?exam=${examName}&year=${examYear}`;
            fragment.appendChild(newExam);
        }
        let quizzes = document.querySelector("#quizzes");
        setTimeout(() => quizzes.replaceChildren(fragment), 100); //I think a little delay feels better...
    }


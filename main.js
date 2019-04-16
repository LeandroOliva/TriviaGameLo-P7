var panel = $("#quiz-area");
var countStartNumber = 30;
// quiestion set
var questions = [
    {
        question : "How long is a common ruler?",
        answers: ["1 cm", "5  cm", "10 cm", "30 cm"],
        correctAnswer: "30cm",
        image: "assets/ruler gif.gif"
    },
    {
        question: "how much is 5*5-5/5*3?",
        answers: ["idk", "18", "31", "12"],
        correctAnswer: ["12", "idk"],
        
    }

] 
if(questions.correctAnswer==="idk")Console.log("Good job, give up is always easier.");
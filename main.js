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
        question: "how much is (5*5-5/5)*3?",
        answers: ["idk", "18", "31", "12"],
        correctAnswer: ["12", "idk"],
        
    }

] 
if(questions.correctAnswer==="idk")Console.log("Good job, give up is always easier.");

var timer;

var game = {

    questions : questions,
    currentQuestion : 0,
    counter : countStartNumber,
    corret : 0,
    incorrect : 0,

    countDown: function(){
        game.counter--;
        $("#counter-number").html(game.counter);
        if(game.counter===0){
            console.log(`TIME UP`);
            game.timeup();
        }

    },
    loadQuestion: function(){
        timer = setInterval(game.countDown,1000);
        panel.html("<h2>"+questions[this.currentQuestion].question + "</h2>")
        for(var i = 0; i < questions[this.currentQuestion].answers.length; i++){
            panel.append("<button class = 'answer-buttom' id='button' data-name'" + quesitions[this.currentquestion].answers[i]"'>"+
            questions[this.currentQuestion].answer[i]+ "</button>")
        } 
    },
        nextQuestion: function(){
            game.counter=countStartNumber;
            $("#counter-number").html(game.counter);
            game.currentQuestion++;
            game.loadQuestion();
        }
    

}
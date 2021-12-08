console.log("Hello")
const chalk = require("chalk");
// var color=require("chalk")
var readlineSync = require("readline-sync");
var userName = readlineSync.question("give me your name: ");
console.log("....................");
var welcomeMessage = "welcome " + userName + "! " +"DO YOU KNOW ABOUT General Knowledge? ";
console.log(chalk.yellow("*****" + welcomeMessage + "*****"))
console.log("....................");

var score = 0;
var lessScore = 0;

// KBC function
function KBC(question,answer){
    console.log("                   ");
    console.log(chalk.green( question));
    var j=1
    for (let k = 0; k < option[i].length; k++) {
        console.log(chalk.white(j+".",option[i][k]));
        j++ 
    }
    console.log("-------------");
    var userAnswer=readlineSync.questionInt(chalk.grey("Enter your answer: "));
    console.log("You entered " + userAnswer);
    if (userAnswer === answer){
        console.log("       ");
        console.log("**you are right**");
        score+=1
        console.log("......");
        console.log(chalk.gray("Score is ") + score);
        console.log("....................")
    }
    else{
        console.log("       ");
        console.log("you are wrong");
        console.log("......");
        console.log(chalk.yellow("The corrct answer is: ") + answer)
        console.log("                       ");
        lessScore+=1
        console.log(chalk.gray("Less Score is ") + lessScore);
        console.log("....................")
    }
}

var highScore = [
    {
        name : "Priyanka",
        score : 8
    },
    {
        name : "Pinky",
        score : 5
    }
]

// Array of Objects
var questions = [{
    question : "The energy of sun comes from the fusion of? ",
    answer : 2
},
{
    question : "Who has written the national anthem of India? ",
    answer : 3
},
{
    question : "How many planets solar system consists? ",
    answer : 2
},
{
    question : "First Indian to climb Mount Everest? ",
    answer : 3
},
{
    question : "Who is the first citizen of India? ",
    answer : 1
},
{
    question : "Who is the 3rd citizen of India? ",
    answer : 1
},
{
    question : "How many continents are in the world? ",
    answer : 2
},
{
    question : "How many spokes does the wheel in Indian Flag have? ",
    answer : 4
}]

var option = [["Venus","Hydrogen and Helium","Nepal","Earth"],["Mahatma gandhi","Narendra Modi","Rabindranath Tagore","Ramnath Kovind"],["9","8","6","10"],["Pingali Venkayya","Femur","Bachendri Pal","Tenzing Norgay"],["President of India","Prime Minister of India","Education Minister","MLA"],["Prime Minister of India","President of India","Education Minister","MLA"],["6","7","8","9"],["20","22","23","24"]]

for (var i=0;i<questions.length;i++){
    var currentQuestion = questions[i]
    KBC(currentQuestion.question,currentQuestion.answer)
}

if (score>=1){
    console.log("....................");
    console.log(chalk.magenta("Congratulations!!**** " + userName + "!" + " Your total score is: ") + score);
    console.log("....................");
    console.log(chalk.red("Ooopppssss!!**** " + userName + "!" + " Your less score is: ") + lessScore);
}
else{
    console.log(chalk.red("Ooopppssss!!**** " + userName + " Your less score is: ") + lessScore);
    console.log("                           ");
    console.log(chalk.magenta("You did't get any score!!**"));
    console.log("....................");
    console.log(chalk.green("Thank you "+userName+" well played"));
}
console.log("                  ");
for(j in highScore){
    if (score<highScore[j].score) {
        console.log(chalk.yellow("Thank you " + userName + " well played" + "\n" + "The hight score is: "));
        break
    }
}
console.log("                ");
    for (j of highScore){
        console.log(j.name+" : "+j.score);
    }



// https://replit.com/@priyankakumar22/secondproject?embed=1&output=1
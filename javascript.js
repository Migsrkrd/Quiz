//var declaration/document linking
    //var time remaining
    //

//make array of objects (object = question: "", answer: "", wrong answers:"")

//set up function for START QUIZ button

//button.eventListener("click", gamestart) ?

//listen for button start

//first question and answer should be display now, as well as timer is set

//add eventListeners to answer options and check for true or false
    //use if right, move onto function that goes to next question
    //use if wrong, move onto function that goes to next question as well as decrement time

//write a function for wrong and decrement timer by 10 seconds

//use event listeners and once an answer is chosen, go to next question regardless 
//(set this process by setting an interval of the object array containing questions answers and wrong answers)
//kinda like the carrousel box example

//make a total of 6 questions
    //if last question or timer end, finish quiz and bring up last page
    

//repeat unntil timer hits 0 or all questions are all done
    //when our array of objects returns as undefined or length-1 for index

//endgame
    //stop timer and keep stopped time displayed
    //disaply the score at the end, which is the amount of time left on the timer
    //prompt for initials
    //save score and initials as (initials: score)

//--------------------------------------------------------------------------------------------------------------------------------

// var sectionElementsArray = [questionOne = {
//     "question": "What is Michael's favorite color?",
//     "true answer": "green",
//     "falseAnswer1": "red",
//     "falseAnswer2": "blue",
//     "falseAnswer3": "yellow"
//     },

//     questionTwo = {
//     "question": "How old is Michael?(Hint: he was born in 2000)",
//     "true answer": "25",
//     "falseAnswer1": "23",
//     "falseAnswer2": "21",
//     "falseAnswer3": "27"
//     },

//     questionThree = {
//     "question": "Does Michael ever lie?",
//     "true answer": "yep, he just did",
//     "falseAnswer1": "never in a million years",
//     },

//     questionFour = {
//     "question": "Does Michael deserve an A on this challenge?",
//     "true answer": "yes, he is the greatest student I have ever seen",
//     "falseAnswer1": "No, but I have poor judgement",
//     "falseAnswer2": "No, I am giving him a lower grade because I'm secretly jealous of him",
//     "falseAnswer3": "idk maybe"
//     },

//     questionFive = {
//     "question": "THIS IS THE LAST QUESTION: How did I do?",
//     "true answer": "Amazing",
//     "falseAnswer1": "Amazing but with jazz hands",
//     "falseAnswer2": "Greatest quiz I have ever seen",
//     "falseAnswer3": "Meh",
//     },

//     questionSix = {
//     "question": "Did Michael lie again?",
//     "true answer": "yep, now you get an F",
//     "falseAnswer1": "Lie? does Michael ever lie?",
//     "falseAnswer2": "maybe ;)",
//     "falseAnswer3": "purple"
//     }]

    var headerTag = document.querySelector("header");
    var quizStartButton = document.querySelector("#quizStarter");
    var questionBox = document.getElementById("questionBox");
    var answerBox = document.getElementById("answerBox");
    var timeElement = document.querySelector(".time");
    var secondsLeft = 120;
    var answerBox1 = document.getElementById("answerBox1");
    var answerBox2 = document.getElementById("answerBox2");
    var answerBox3 = document.getElementById("answerBox3");
    var answer = document.querySelector(".answer");
    var answer1 = document.querySelector(".answer1");
    var answer2 = document.querySelector(".answer2");
    var answer3 = document.querySelector(".answer3");
    var buttonsArray = [answerBox, answerBox1, answerBox2, answerBox3]
  


    function setTime(){
       var timerInterval = setInterval(function(){
            secondsLeft -- ;
            timeElement.textContent = secondsLeft;
            if(secondsLeft === 0) {
                clearInterval(timerInterval);
                //place it here!!!!!
            }
        }, 1000);
    }

// add function for what happens if timer runs out here and place above


    quizStartButton.addEventListener("click", function(){
        setTime();
        document.body.children[0].children[0].textContent = secondsLeft;
        quizStartButton.setAttribute("style", "display: none");
        questionBox.textContent = "What is Michael's favorite color?";
        answerBox.innerHTML = "<button>A</button>";
        answerBox.addEventListener("click", next);
        answerBox1.innerHTML = "<button>B</button>";
        answerBox1.addEventListener("click", function(){
            secondsLeft=secondsLeft-15;
            next();
        });
        answerBox2.innerHTML = "<button>C</button>";
        answerBox2.addEventListener("click", function(){                //perfect repeatable here <--
            secondsLeft=secondsLeft-15;
            next();
        });
        answerBox3.innerHTML = "<button>D</button>";
        answerBox3.addEventListener("click", function(){
            secondsLeft=secondsLeft-15;
            next();
        });
        answer.textContent = "green";
        answer1.textContent = "blue";
        answer2.textContent = "red";
        answer3.textContent = "yellow";

        // answerBox.onclick = questionBox.textContent = "Nice!"
    });

    function next(){
        questionBox.textContent = "How old is Michael?(Hint: he was born in 2000)";
        answerBox.innerHTML = "<button>A</button>";
        answerBox.addEventListener("click", next);
        answer.textContent = "23";
        answer1.textContent = "24";
        answer2.textContent = "25";
        answer3.textContent = "26";
    }
    




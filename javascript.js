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

    var headerTag = document.querySelector("header");
    var quizStartButton = document.querySelector("#quizStarter");
    var questionBox = document.getElementById("questionBox");
    var answerBox = document.getElementById("answerBox");
    var timeElement = document.querySelector(".time");
    var secondsLeft = 180;
    var answerBox1 = document.getElementById("answerBox1");
    var answerBox2 = document.getElementById("answerBox2");
    var answerBox3 = document.getElementById("answerBox3");
    var answer = document.querySelector(".answer");
    var answer1 = document.querySelector(".answer1");
    var answer2 = document.querySelector(".answer2");
    var answer3 = document.querySelector(".answer3");
    var buttonsArray = [answerBox, answerBox1, answerBox2, answerBox3];
  


    function setTime(){
       var timerInterval = setInterval(function(){
            secondsLeft -- ;
            timeElement.textContent = secondsLeft;
            if(secondsLeft <= 0) {
                clearInterval(timerInterval);
                //place it here!!!!!
            }
        }, 1000);
            if(endGame()===true){
                clearInterval(timerInterval);
            }
    }

// add function for what happens if timer runs out here and place above


    quizStartButton.addEventListener("click", function(){
        setTime();
        document.body.children[0].children[0].textContent = secondsLeft;
        quizStartButton.setAttribute("style", "display: none");
        questionBox.textContent = "What is Michael's favorite color?";
        answerBox.innerHTML = "<button>A</button>";
        answerBox.addEventListener("click", question2);
        answerBox1.innerHTML = "<button>B</button>";
        answerBox1.addEventListener("click", function(){
            secondsLeft = secondsLeft-15;
            question2();
        });
        answerBox2.innerHTML = "<button>C</button>";
        answerBox2.addEventListener("click", function(){
            secondsLeft=secondsLeft-15;
            question2();
        });
        answerBox3.innerHTML = "<button>D</button>";
        answerBox3.addEventListener("click", function(){
            secondsLeft=secondsLeft-15;
            question2();
        });
        answer.textContent = "green";
        answer1.textContent = "blue";
        answer2.textContent = "red";
        answer3.textContent = "yellow";
    });

    function question2(){
        questionBox.textContent = "How old is Michael?(Hint: he was born in 2000)";
        answerBox.addEventListener("click", function(){
            secondsLeft = secondsLeft-15
            question3();
        });
        answerBox2.addEventListener("click", function(){
            secondsLeft = secondsLeft+15;
            question3();
        });answerBox1.addEventListener("click", function(){
            question3();
        });answerBox3.addEventListener("click", function(){
            question3();
        });
        answer.textContent = "23";
        answer1.textContent = "24";
        answer2.textContent = "25";
        answer3.textContent = "26";
    }
    
    function question3(){
        questionBox.textContent = "Does Michael ever lie?";
        answerBox.addEventListener("click", function(){
            secondsLeft = secondsLeft+30;
            question4();
        });
        answerBox1.addEventListener("click", function(){
            question4();
        });
        answerBox2.addEventListener("click", function(){
            secondsLeft = secondsLeft-30;
            question4();
        });
       answerBox3.addEventListener("click", function(){
            question4();
       });
        answer.textContent = "yep, he just did";
        answer1.textContent = "I was too lazy to convert to two answers so pls dont pick me";
        answer2.textContent = "never in a million years";
        answer3.textContent = "I wasn't kidding when I said I was too lazy";
        }


    function question4(){
        questionBox.textContent = "Does Michael deserve an A on this challenge?";
        answerBox.addEventListener("click", function(){
            secondsLeft = secondsLeft-60;
            question5();
        });
        answerBox1.addEventListener("click", function(){
            secondsLeft = secondsLeft+15;
            question5();
        });
        answerBox2.addEventListener("click", function(){
            secondsLeft = secondsLeft+45;
            question5();
        });
       answerBox3.addEventListener("click", function(){
            question5();
        });
        answer.textContent = "No, but I have poor judgement";
        answer1.textContent = "yes, he is the greatest student I have ever seen";
        answer2.textContent = "No, I am giving him a lower grade because I'm secretly jealous of him";
        answer3.textContent = "idk maybe";
    }

    function question5(){
        questionBox.textContent = "THIS IS THE LAST QUESTION: How did I do?";
        answerBox.addEventListener("click", function(){
            secondsLeft = secondsLeft+105;
            question6();
        });
        answerBox1.addEventListener("click", function(){
            secondsLeft = secondsLeft-60;
            question6();
        });
        answerBox2.addEventListener("click", function(){
            secondsLeft = secondsLeft-60;
            question6();
        });
       answerBox3.addEventListener("click", function(){
            secondsLeft = secondsLeft+15;
            question6();
        });
        answer.textContent = "Amazing but with jazz hands";
        answer1.textContent = "Meh";
        answer2.textContent = "Amazing but with jazz hands part 2";
        answer3.textContent = "Amazing (This is the right answer)";
    }

    function question6(){
        questionBox.textContent = "Did Michael lie again?";
        answerBox.addEventListener("click", function(){
            secondsLeft = secondsLeft-165;
            endGame();
        });
        answerBox1.addEventListener("click", function(){
            secondsLeft = secondsLeft+150;
            endGame();
        });
        answerBox2.addEventListener("click", function(){
            secondsLeft = secondsLeft+75;
            endGame();
        });
        answerBox3.addEventListener("click", function(){
            secondsLeft = secondsLeft-60;
            endGame();
        });
        answer.textContent = "purple";
        answer1.textContent = "maybe ;)";
        answer2.textContent = "Lie? does Michael ever lie?";
        answer3.textContent = "yep, now you get an F";
    }

    function endGame (){
        document.body.children[0].children[0].textContent = secondsLeft;
    }



    
    
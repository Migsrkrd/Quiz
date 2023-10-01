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
    var messageTop = "";
    var yourScore = document.getElementById("yourScore");
    var initials = document.getElementById("initials");
    var initialsBox = document.getElementById("initialsBox");
    var endGameInfo = document.querySelector(".endGameInfo");
    var submitInitials = document.getElementById("submitInitials");
    var scoreTabel = document.getElementById("scoreTable");
    var scoreTableTitle = document.getElementById("scoreTableTitle");
    var scoresList = document.querySelector(".scoresList");


    initialsBox.setAttribute("style", "display:none");
    initials.setAttribute("style", "display:none");

    function setTime(){
       var timerInterval = setInterval(function(){
            secondsLeft -- ;
            timeElement.textContent = secondsLeft;
            if(secondsLeft <= 0) {
                clearInterval(timerInterval);
                endGame();
        }
            else if(questionBox.textContent === "Quiz over, how did you do?") {
                clearInterval(timerInterval);
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
        document.body.children[0].textContent = "Quiz Finished";
        document.body.children[0].setAttribute("style","font-size: 300%; font-weight: bold")
        questionBox.textContent = "Quiz over, how did you do?";
        answer.setAttribute("style","display: none");
        answer1.setAttribute("style","display: none");
        answer2.setAttribute("style","display: none");
        answer3.setAttribute("style","display: none");
        answerBox.setAttribute("style", "display: none");
        answerBox1.setAttribute("style", "display: none");
        answerBox2.setAttribute("style", "display: none");
        answerBox3.setAttribute("style", "display: none");
        endGameInfo.setAttribute("style", "border: 2px solid black; background-image: linear-gradient(to left, rgb(179, 65, 255),rgb(0, 199, 33)); padding: 20px; font-size: 200%; line-height: 150%; display: flex; flex-direction: column; text-align: center; width: 40%; margin:5%; align-items: center");
        yourScore.textContent = "your score: " +secondsLeft + " seconds.";
        initials.setAttribute("style", "display: block");
        initialsBox.setAttribute("style", "display: block; line-height: 150%; font-size: 100%; width: 20%; text-align: center");
        submitInitials.innerHTML = "<button>submit</button>"
        submitInitials.setAttribute("style", "border-radius: 15px")
        scoreTabel.setAttribute("style", "display:block; border:2px solid black; margin: 5%; padding: 20px; width: 40%; height: 100%; background-image: linear-gradient(to left, rgb(179, 65, 255),rgb(0, 199, 33))")
        scoreTableTitle.textContent = "Last Score";
        scoreTableTitle.setAttribute("style", "text-decoration: underline; font-size: 200%;text-align: center")
        displayScore();
    
    }  
    
        submitInitials.addEventListener("click", function(event){
            var newScore = {
                initials: initialsBox.value,
                score: secondsLeft,
            };
            localStorage.setItem("newScoreStringify", JSON.stringify(newScore));
            displayScore();
            event.preventDefault();
    });

        function displayScore(){
            var previousScore = JSON.parse(localStorage.getItem("newScoreStringify"));
            document.body.children[2].children[1].children[1].innerHTML = previousScore.initials + "-" +previousScore.score
            document.body.children[2].children[1].children[1].setAttribute("style", "font-size: 200%")
    }


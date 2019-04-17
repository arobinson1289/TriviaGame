$(document).ready(function () {
  //Javascript Code Will Begin Here!
  clearInterval(intervalID);

  var questions = [{
      question: 'What is the capitol of Arizona?',
      answer: 'Pheonix',
      choices: ['Phoenix', "Tempe", "Scottsdale"],
      userAnswer: ""
    },
    {
      question: 'What is the capital of New York',
      answer: 'Albany',
      choices: ['Albany', "Hudson", "New York City"],
      userAnswer: ""
    },
    {
      question: 'What is the capital of New Jersey',
      answer: 'Trenton',
      choices: ['Newark', "Asbury Park", "Trenton"],
      userAnswer: ""
    }
  ];
  // set user score
  var correct = 0;

  //Set Var For Interval Timer
  var timer = 30;
  var intervalID;
  var clockTicking = false;
  var correct = 0;
  var incorrect = 0;

  //Function For Interval Timer//
  function decTimer() {
    clearInterval(intervalID);

    intervalID = setInterval(function () {
      timer--;
      $("#timer").html(timer);
      if (timer === 0) {
        clearInterval(intervalID);
        $("#timer").html('<h2>Time is up!</h2>');

      }
    }, 1 * 1000);
  };

  var userScore = 0;

  // function to print all questions to page
  function renderQuestions() {
    // clear out form
    $("#quiz-form").empty();

    // Loop through questions array
    questions.forEach(function (question, index) {
      // create div to hold question
      var $question = $("<div>").addClass("form-group");
      // <div class="form-group"></div>

      // add question to div
      var $label = $("<h4>")
        .text(question.question)
        .appendTo($question);
      /*
        <div class="form-group"> 
          <h4>Question 1</h4> 
        </div>
      */
      // shuffle choices
      question.choices = question.choices.sort(function () {
        return .5 - Math.random();
      });
      // create a loop to iterate through question's choices and create radio buttons for each one
      for (var i = 0; i < question.choices.length; i++) {
        // create a div for choice and add bootstrap classes
        var $choice = $('<div>');
        $choice.addClass('form-check form-check-inline');

        // create an input tag for the radio button
        var $radio = $('<input>');
        // add attributes to provide the answer choice
        // the "name" attribute is super important, all radio buttons per question need to have the same "name" so they know which question it applies to
        $radio
          .attr({
            type: "radio",
            value: question.choices[i],
            name: index,
            class: "form-check-input"
          })
          .appendTo($choice);

        // create label to actually print the choice to the page
        var $choiceLabel = $('<label>');
        $choiceLabel
          .text(question.choices[i])
          .addClass('form-check-label')
          .appendTo($choice);

        // add whole radio button choice to question
        $choice.appendTo($question);
      }
      // when done making all of the choices, add whole question to the page
      $("#quiz-form").append($question);
    });
    var $button = $('<button>');
    $button.attr("id", "submit-button");
    $button.text("Submit");
    $("#quiz-form").append($button);
  }

  // create a loop to iterate through question 

  function checkAnswers() {
    for (var i = 0; i < questions.length; i++) {
      if (questions[i].userAnswer === questions[i].answer) {
        correct++;
      } else {
        incorrect++;
        console.log("hello");
      }
    }
  }

  function results (){
    
  }

  $(document).on("click", "#submit-button", function () {
    event.preventDefault();
    checkAnswers();
    console.log(correct, incorrect);
    $("#quiz-form").html("<h3>Total Correct: "+ correct + "</h3><br><h3>Total Incorrect: " + incorrect);
    clearInterval(intervalID);

  })

  //Start New Game WHen New Game Button Is Clicked//
  function startNewGame() {
    event.preventDefault();
    decTimer();
    $("#startButton").html(" ");
    renderQuestions();
    alert("you started");

  }

  $("#startButton").on("click", function () {
    startNewGame();
  })

})
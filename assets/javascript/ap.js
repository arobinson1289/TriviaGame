$(document).ready(function (){
//Javascript Code Will Begin Here!
var questions = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
      choices: ['Answer 1', "Answer 2", "Answer 3"],
      userAnswer: ""
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
      choices: ['Answer 1', "Answer 2", "Answer 3"],
      userAnswer: ""
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
      choices: ['Answer 1', "Answer 2", "Answer 3"],
      userAnswer: ""
    }
  ];
  
  // set user score
  var correct = 0;
  
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
      question.choices = question.choices.sort(function() {
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
  }
  setTimeout(renderQuestions,(3000)

  // create on "change" listener for all radio buttons but bind them to quiz-form since it's permanently on the page
  $("#quiz-form").on("change", ".form-check-input", function() {
    console.log(this);
    
    // GET question index out of "name" attribute so we know what question you answered
    var questionIndex = $(this).attr("name");

    console.log(questions[questionIndex]);

    // get value out of radio button you selected
    var answer = $(this).val();

    // set answer to question's userAnswer property
    questions[questionIndex].userAnswer = answer;
    
  });

  renderQuestions();

})
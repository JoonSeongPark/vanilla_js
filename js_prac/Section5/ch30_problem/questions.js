const questions = [
  [
    "Where is the most common location of Javascript code in an HTML document.",
    "title",
    "header",
    "head",
    "C"
  ],
  [
    "Inside which HTML element do we put Javascript code",
    "scripting",
    "script",
    "javascript",
    "B"
  ],
  [
    "I want to reference an external JavaScript file, which is choices below is the proper syntax",
    "script src='xxx.js'",
    "script href='xxx.js'",
    "script name='xxx.js'",
    "A"
  ],
  [
    "I want to declare a variable to store the mark of a student",
    "int mark",
    "var mark",
    "variable mark",
    "B"
  ]
];

var correct = 0;
var questionNum = 0

function renderQuestion() {
  test = document.getElementById("test");

  if (questionNum >= questions.length) {
    test.innerHTML =
      "<h2>You got " +
      correct +
      " of " +
      questions.length +
      " questions correct</h2>";
    questionNum = 0;
    correct = 0;
    return false;
  }

  document.getElementById('test_status').innerHTML = "Question " + (questionNum+1) + " of " + questions.length

  var qNum;
  
  test.innerHTML = "<h3>"+ questions[questionNum][0]+"</h3>"

  for (qNum = 1; qNum < 4; qNum++) {
    
    test.innerHTML += 
      "<input type='radio' name='choices' value=" +
      questions[questionNum][4] +
      "/>" +
      questions[questionNum][qNum] +
      "<br>";
  }
  test.innerHTML +=
    "<br> <button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer() {
  let choices = document.getElementsByName('choices')

  for (var i =0; i<choices.lenght;i++) {
    if (choices[i].checked) {
      var choice = choices[i].value
    }
  }
  if (choice == questions[questionNum][4]) {
    correct ++
  }
  questionNum ++
  
  renderQuestion()
}
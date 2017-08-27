function shift(button) {
  var questionPage = button.parentNode;
  questionPage.classList.remove('active');
  questionPage.nextElementSibling.classList.add('active');
}

function getResults(button) {
  var wrapperChildren = document.getElementsByClassName('wrapper')[0].children;
  var questions = [];
  var rightCodedAnswer = '';
  var rightAnswer = '';
  var userAnswer = '';
  var amountOfRightAnswers = 0;
  var amountOfWrongAnswers = 0;

  for (var i = 0; i < wrapperChildren.length - 1; i++) {
    questions.push(wrapperChildren[i]);
  }

  for (i = 0; i < questions.length; i++) {
    //Для вопросов с одиночным выбором
    if (questions[i].getAttribute('data-type') == 'singleChoice') {
      rightAnswer = getRightAnswer(questions[i]);
      for (var j = 0; j < questions[i].children.length; j++) {
        if (questions[i].children[j].getAttribute('data-option') == rightAnswer) {
          userAnswer = questions[i].children[j];
          break;
        }
      }
      if(userAnswer.children[0].checked) amountOfRightAnswers++;
    }

    //Для вопросов с множественным выбором
    if (questions[i].getAttribute('data-type') == 'multipleChoice') {
      rightAnswer = getRightAnswer(questions[i]);
      var rightAnswerArr = rightAnswer.split(',');
      var userAnswerArr = [];
      for (j = 0; j < questions[i].children.length; j++) {
        if (questions[i].children[j].hasAttribute('data-option') && questions[i].children[j].children[0].checked) {
          userAnswerArr.push(questions[i].children[j].getAttribute('data-option'));
        }
      }
      userAnswer = userAnswerArr.join(',');
      if (rightAnswer == userAnswer) amountOfRightAnswers++;
    }

    //Для вопросов с сопоставлением
    if (questions[i].getAttribute('data-type') == 'matchingQuestion') {
      rightAnswer = getRightAnswer(questions[i]);
      var userAnswerArr = [];
      var selectedValue = '';
      var optionValue = '';
      var select;
      for (j = 0; j < questions[i].children.length; j++) {
        if (questions[i].children[j].hasAttribute('data-option')) {
          select = questions[i].children[j].children[1];
          selectedValue = select.options[select.selectedIndex].text;
          optionValue = questions[i].children[j].getAttribute('data-option') + ':' + selectedValue;

          userAnswerArr.push(optionValue);
        }
      }
      userAnswer = userAnswerArr.join(',');
      if (userAnswer == rightAnswer) amountOfRightAnswers++;
    }

    //Для открытых вопросов
    if (questions[i].getAttribute('data-type') == 'openQuestion') {
      rightAnswer = getRightAnswer(questions[i]);
      userAnswer = questions[i].children[2].value;
      if (userAnswer == rightAnswer) amountOfRightAnswers++;
    }

  }

  button.removeAttribute('onclick');
  button.style.display = 'none';
  button.nextElementSibling.style.display = 'inline-block';
  var resultPage = button.parentNode;
  var text = document.createElement('p');
  text.innerHTML = 'Amount of questions: ' + questions.length;
  text.innerHTML += '<br> Right answers: ' + amountOfRightAnswers;
  text.innerHTML += '<br> Wrong answers: ' + (questions.length - amountOfRightAnswers);
  resultPage.appendChild(text);

  function getRightAnswer(question) {
    rightCodedAnswer = question.getAttribute('answer');
    return Base64.decode(rightCodedAnswer);
  }
}

function retest() {
  location.reload();
}

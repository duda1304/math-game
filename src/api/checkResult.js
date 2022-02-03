const checkResult = (a, b, operation, value) => {
    // let a = parseInt(document.getElementById("first-integer").innerHTML);
    // let b = parseInt(document.getElementById("second-integer").innerHTML);

    // Create animation element and blur input field
    // createImageElement();
    // let animationElement = document.getElementById("animation");
    // let resultInput = document.getElementById("result");
    // resultInput.blur();

    if (operation === "addition") {
        let result = a + b;
        if (parseInt(value) === result) {
            // correct = correct + 1;
            // renderBarChart();
            // updateCorrect(correct);
            // animationElement.setAttribute("src", "https://amitsandbox-3276.restdb.io/media/60c166f824d0923a00011bff");
            // setTimeout(() => {
            //     animationElement.remove();
            //     value="";
            //     if (timerOn === false) {
            //         setEquasion(operation, difficulty);
            //     } else {
            //         stopTimer();
            //         setEquasion(operation, difficulty);
            //         startTimer();
            //     }
            //     resultInput.focus();
            // }, 2000);
            return true
        } else {
            // incorrect = incorrect + 1;
            // updateIncorrect(incorrect);
            // animationElement.setAttribute("src", "https://amitsandbox-3276.restdb.io/media/60c1670b24d0923a00011c09");
            // setTimeout(() => {
            //     animationElement.remove();
            //     value="";
            //     if (timerOn === false) {
            //         setEquasion(operation, difficulty);
            //     } else {
            //         stopTimer();
            //         setEquasion(operation, difficulty);
            //         startTimer();
            //     }
            //     resultInput.focus();
            // }, 2000);
            return false
        }
    } 
    
    if (operation === "subtraction") {
        let result = a - b;
        if (parseInt(value) === result) {
            // correct = correct + 1;
            // renderBarChart();
            // updateCorrect(correct);
            // animationElement.setAttribute("src", "https://amitsandbox-3276.restdb.io/media/60c166f824d0923a00011bff");
            // setTimeout(() => {
            //     animationElement.remove();
            //     value="";
            //     if (timerOn === false) {
            //         setEquasion(operation, difficulty);
            //     } else {
            //         stopTimer();
            //         setEquasion(operation, difficulty);
            //         startTimer();
            //     }
            //     resultInput.focus();
            // }, 2000);
            return true
        } else {
            // incorrect = incorrect + 1;
            // updateIncorrect(incorrect);
            // animationElement.setAttribute("src", "https://amitsandbox-3276.restdb.io/media/60c1670b24d0923a00011c09");
            // setTimeout(() => {
            //     animationElement.remove();
            //     value="";
            //     if (timerOn === false) {
            //         setEquasion(operation, difficulty);
            //     } else {
            //         stopTimer();
            //         setEquasion(operation, difficulty);
            //         startTimer();
            //     }
            //     resultInput.focus();
            // }, 2000);
            return false
        }
    }

    if (operation === "multiplication") {
        let result = a * b;
        if (parseInt(value) === result) {
            // correct = correct + 1;
            // renderBarChart();
            // updateCorrect(correct);
            // animationElement.setAttribute("src", "https://amitsandbox-3276.restdb.io/media/60c166f824d0923a00011bff");
            // setTimeout(() => {
            //     animationElement.remove();
            //     value="";
            //     if (timerOn === false) {
            //         setEquasion(operation, difficulty);
            //     } else {
            //         stopTimer();
            //         setEquasion(operation, difficulty);
            //         startTimer();
            //     }
            //     resultInput.focus();
            // }, 2000);
            return true
        } else {
            // incorrect = incorrect + 1;
            // updateIncorrect(incorrect);
            // animationElement.setAttribute("src", "https://amitsandbox-3276.restdb.io/media/60c1670b24d0923a00011c09");
            // setTimeout(() => {
            //     animationElement.remove();
            //     value="";
            //     if (timerOn === false) {
            //         setEquasion(operation, difficulty);
            //     } else {
            //         stopTimer();
            //         setEquasion(operation, difficulty);
            //         startTimer();
            //     }
            //     resultInput.focus();
            // }, 2000);
            return false
        }
    }

    if (operation === "division") {
        let result = a / b;
        if (parseInt(value) === result) {
            // correct = correct + 1;
            // renderBarChart();
            // updateCorrect(correct);
            // animationElement.setAttribute("src", "https://amitsandbox-3276.restdb.io/media/60c166f824d0923a00011bff");
            // setTimeout(() => {
            //     animationElement.remove();
            //     value="";
            //     if (timerOn === false) {
            //         setEquasion(operation, difficulty);
            //     } else {
            //         stopTimer();
            //         setEquasion(operation, difficulty);
            //         startTimer();
            //     }
            //     resultInput.focus();
            // }, 2000);
            return true
        } else {
            // incorrect = incorrect + 1;
            // updateIncorrect(incorrect);
            // animationElement.setAttribute("src", "https://amitsandbox-3276.restdb.io/media/60c1670b24d0923a00011c09");
            // setTimeout(() => {
            //     animationElement.remove();
            //     value="";
            //     if (timerOn === false) {
            //         setEquasion(operation, difficulty);
            //     } else {
            //         stopTimer();
            //         setEquasion(operation, difficulty);
            //         startTimer();
            //     }
            //     resultInput.focus();
            // }, 2000);
            return false
        }
    }
}


export default checkResult;
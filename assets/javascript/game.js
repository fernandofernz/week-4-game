//ready method
$(function () {
    // generate number to guess 19-120

    var randomNumberToGuess = Math.floor(Math.random() * 101 + 19);
    console.log(randomNumberToGuess);

    // Display randomNumberToGuess
    $("#numberToGuess").text("Number to Guess :" + randomNumberToGuess);
    $("#totalScore").text("Your total score is : ( Press a Diamond to begin to add)");
    //variable declartation 
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    //diamond random number assigned 1-12
    var redDiamond = Math.floor(Math.random() * 11 + 1);
    var greenDiamond = Math.floor(Math.random() * 11 + 1);
    var blueDiamond = Math.floor(Math.random() * 11 + 1);
    var yellowDiamond = Math.floor(Math.random() * 11 + 1);

    console.log(redDiamond);
    console.log(greenDiamond);
    console.log(blueDiamond);
    console.log(yellowDiamond);

    // reset game function
    resetGame = function () {
        totalScore = 0;
        randomNumberToGuess = Math.floor(Math.random() * 101 + 19);
        $("#numberToGuess").text("Number to Guess :" + randomNumberToGuess);
        redDiamond = Math.floor(Math.random() * 11 + 1);
        greenDiamond = Math.floor(Math.random() * 11 + 1);
        blueDiamond = Math.floor(Math.random() * 11 + 1);
        yellowDiamond = Math.floor(Math.random() * 11 + 1);
    }

    // query selector with event listeners on each of the html image tags
    $("#redDiamond").on('click', function () {
        totalScore = totalScore + redDiamond;
        $("#totalScore").text("Your total score is :" + totalScore);
        console.log(totalScore);

        if (totalScore == randomNumberToGuess) {
            wins++;
            $("#wins").text("Wins : " + wins);
            resetGame();
        } else if (totalScore > randomNumberToGuess) {
            losses++;
            $("#losses").text("Losses : " + losses);
            resetGame();
        }
    });
    $("#greenDiamond").on('click', function () {
        totalScore = totalScore + greenDiamond;
        $("#totalScore").text("Your total score is :" + totalScore);
        console.log(totalScore);
        if (totalScore == randomNumberToGuess) {
            wins++;
            $("#wins").text("Wins : " + wins);
            resetGame();
        } else if (totalScore > randomNumberToGuess) {
            losses++;
            $("#losses").text("Losses : " + losses);
            resetGame();
        }
    });
    $("#blueDiamond").on('click', function () {
        totalScore = totalScore + blueDiamond;
        $("#totalScore").text("Your total score is :" + totalScore);
        console.log(totalScore);
        if (totalScore == randomNumberToGuess) {
            wins++;
            $("#wins").text("Wins : " + wins);
            resetGame();
        } else if (totalScore > randomNumberToGuess) {
            losses++;
            $("#losses").text("Losses : " + losses);
            resetGame();
        }
    });
    $("#yellowDiamond").on('click', function () {
        totalScore = totalScore + yellowDiamond;
        $("#totalScore").text("Your total score is :" + totalScore);
        console.log(totalScore);
        if (totalScore == randomNumberToGuess) {
            wins++;
            $("#wins").text("Wins : " + wins);
            resetGame();
        } else if (totalScore > randomNumberToGuess) {
            losses++;
            $("#losses").text("Losses : " + losses);
            resetGame();
        }
    });
});
//closed ready method
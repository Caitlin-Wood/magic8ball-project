$(document).ready(function(){

	var magic8Ball = {};
	magic8Ball.listofAnswers = ["Yes", "No", "You Know the   Answer", "It Depends", "Of course!", "Not likely"];

	magic8Ball.shake = function (question, randomNumber, randomNumberArray, randomIndex, finalAnswer)
  	  {	  
	 	$("#8ball").effect( "shake" );
	 	  setTimeout(
	 	    function(){	}, 500);
	 	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	 	randomNumber = Math.random();
	  	randomNumberArray = randomNumber * this.listofAnswers.length;
	    randomIndex = Math.floor(randomNumberArray);
	    finalAnswer = this.listofAnswers[randomIndex]; 
   			console.log(question);
   			console.log(finalAnswer);
   	    $("#answer").text(finalAnswer);
        $("#answer").fadeIn(4000);



  	  };

$("#answer").hide();


	var onClick = function () {
	  $("#answer").hide();
	  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	setTimeout(
		function(){
			var question = prompt("Ask me a yes/no question!");
			magic8Ball.shake(question);
		}, 500);
	};

$("#questionButton").click(onClick);




});

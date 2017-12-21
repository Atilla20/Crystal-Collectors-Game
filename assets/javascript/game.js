//Generates random number

var randomNumber = Math.floor((Math.random() * 102) + 19);

//Generates the values for each crystal

var crystal1 = Math.floor((Math.random() *12) + 1);
var crystal2 = Math.floor((Math.random() *12) + 1);
var crystal3 = Math.floor((Math.random() *12) + 1);
var crystal4 = Math.floor((Math.random() *12) + 1);
//Wins and Losses

var wins = 0;
var losses = 0;
var score = 0;

//number display

$("#randomNumber").html(randomNumber);


//Score display

//$("#scoreNumber").html(score);

//function for crystal score

function update(crystal) {
	score += crystal;
	$("#scoreNumber").empty(score);
	$("#scoreNumber").append(score);


	if(score > randomNumber) {
		++losses;
		$("#lose").html(losses);
		restart();
	};

	if(score === randomNumber) {
		++wins;
		$("#win").html(wins);
		restart();
	};
};





$("#crystalOne").on("click", function() {
	update(crystal1);

});

$("#crystalTwo").on("click", function() {
	update(crystal2);
});

$("#crystalThree").on("click", function() {
	update(crystal3);
});

$("#crystalFour").on("click", function() {
	update(crystal4);
});


function restart() {

	randomNumber = Math.floor((Math.random() * 102) + 19);
	$("#randomNumber").html(randomNumber);
	$("#scoreNumber").empty(score);
	score = 0;

	crystal1 = Math.floor((Math.random() *12) + 1);
	crystal2 = Math.floor((Math.random() *12) + 1);
	crystal3 = Math.floor((Math.random() *12) + 1);
	crystal4 = Math.floor((Math.random() *12) + 1);

};



//conditionals


//Onclick Events

//$("#crystalOne").click(function() {

	//$("#scoreNumber").html(crystals);
//



//var crystalOne = [“1”, “2”, “3”, “4”, “5”, “6”, “7”, “8”, “9”, “10”, “11”, “12”];


	//restart: function() {

	//},

	//function start() {
	//new random number
	//new hidden values for crystals
	//the user’s score and score counter will reset to 0. 
//}




//$(document).ready(function() {
	//$("#random").text(targetNumber);
//}

//$(document).ready(function);

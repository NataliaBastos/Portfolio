let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const pedra_div = document.getElementById("pedra");
const papel_div = document.getElementById("papel");
const tesoura_div = document.getElementById("tesoura");

function getComputerChoice() {
	const choices = ['pedra','papel','tesoura'];
	const randomnumber = Math.floor(Math.random() * 3);
	return choices[randomnumber];
}

function convertPalavra (palavra){
	if (palavra === "pedra") return "PEDRA";
	if (palavra === "papel") return "PAPEL";
	return "TESOURA";
}

function ganha(userChoice, computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML =  `${convertPalavra(userChoice)} ganha de ${convertPalavra(computerChoice)}. Você Ganhou!`;
}

function perde(userChoice, computerChoice){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML =  `${convertPalavra(userChoice)} perde para ${convertPalavra(computerChoice)}. Você Perdeu!`;
}

function empate(userChoice, computerChoice){
	result_p.innerHTML =  `${convertPalavra(userChoice)} é igual à ${convertPalavra(computerChoice)}. Empate!`;
}

function game(userChoice){
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "pedratesoura":
		case "papelpedra":
		case "tesourapapel":
			ganha(userChoice, computerChoice);
			break;
		case "pedrapapel":
		case "papeltesoura":
		case "tesourapedra":
			perde(userChoice, computerChoice);
			break;
		case "tesouratesoura":
		case "papelpapel":
		case "pedrapedra":
			empate(userChoice, computerChoice);
			break;
	}
}

function main(){

	pedra_div.addEventListener('click', function(){
		game("pedra");
	})

	papel_div.addEventListener('click', function(){
		game("papel");
	})

	tesoura_div.addEventListener('click', function(){
		game("tesoura");
	})

}

main();

video
("1:05:24")
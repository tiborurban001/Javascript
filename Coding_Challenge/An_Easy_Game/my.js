//Interaktív Játék, az eddigi anyagból.
//A User a Gép ellen fog Játszani Kő Papír Ollót

//Megkérdezzük a User-t akar e játszani
let wantToPlay = confirm("Do you want to play a Game?");

//Ellenőrizzük hogy true-e
if (wantToPlay) {
  //Ha igen akkor elindítjuk a játékot
  let playerChoice = prompt("Rock, Paper, Or Scissors?");
  //Szűrés hogy csak akkor induljon ha a játékos választott
  if (playerChoice) {
    //Belerakjuk a User választását egy változóba
    //trimeljük hogy kivegyünk minden space-t
    //majd kisbetűvé alakítjuk
    let playerOne = playerChoice.trim().toLocaleLowerCase();

    //Ellenőrizzük a playerOne választásait
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      //Létrehozzuk a gép random választását.
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      //Az ütközet (Ellenőrzés)
      let result =
        playerOne === computer
          ? "Tie!"
          : playerOne === "rock" && computer === "scissors"
          ? "Player Wins!"
          : playerOne === "paper" && computer === "rock"
          ? "Player Wins!"
          : playerOne === "scissors" && computer === "paper"
          ? "Player Wins!"
          : "Computer Won!";
      alert(
        `Your Choice: ${playerOne}\nComputer Choice: ${computer}\nResult: ${result}`
      );

      //Megkérdezzük akar e még egy kört játszani
      let anotherRound = confirm("Do you want an another round?");

      //A location.reload() újratölti a weblapot ami elindítja újra a játékot
      anotherRound ? location.reload() : alert("Okay, see you next time");
    } else {
      alert("You have to give us your choise, Rock, Paper or Scissors?");
    }
  } else {
    alert("If you want to play, you have to choose Champ...");
  }
} else {
  alert("Okay, see you later, maybe next time!");
}

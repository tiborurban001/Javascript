let acceptFight = confirm("An Angry Werebeast walks up to you, are you ready to defend yourself?")
if (acceptFight) {
    let attackChoice = prompt("What will you attack with? Sword, Fireball, or an Arrow?")
    if (attackChoice) {
    let userAttack = attackChoice.trim().toLowerCase();

    let theBattle = userAttack === "sword" ? alert(`you used your ${attackChoice} against the beast you did 12 damage`) :
    userAttack === "fireball" ? alert(`Werebeasts are immune to ${attackChoice} you did 0 damage`) :
    userAttack === "arrow" ? alert(`you shot down the beast with your ${attackChoice}, the beast is dead, you did 30 damage`) : alert("You did zero damage, since you didn't find the chosen weapon in your bag")
    let tryAgain = confirm("Try again?")
    tryAgain ? location.reload() : alert("Okay, see you in the GhostWorld")
    
    }else{
        alert("You need to pick out of 3 of these, want to try again?")
    }


}else{
    alert("You tried to run away, but the Werebeast got you and ripped you to shreds")
}
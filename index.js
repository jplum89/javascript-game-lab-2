let user = {
    hp: 40,
    wins: 0,
}
let grant = {
    hp: 10,
    catlv: 2,
    title: "Grant the mighty chicken",
    wins: 0,
}
let attack;
function getDamage() {
    grant.hp -= Math.floor((Math.random() * 5) + 1);
    user.hp -= Math.floor((Math.random() * 5) + 1);
    return grant.hp && user.hp    
}
function startGame() {
   let answer = prompt("do you want to play a game?");
   if (answer === "yes") {
       userName = prompt("please enter your name")     
    } else if (answer === "no")  {
       null;
    }    
}
startGame();
    while (user.hp >= 0 && grant.hp >= 0) {
        let attack = prompt("would you like to attack or quit?");
        if (user.hp > 0 && user.wins < 3 && attack === "attack") {
            getDamage();
            console.log(`${userName} has ${user.hp} health left.`);
            console.log(`${grant.title} has ${grant.hp} health left.`);
        } else if (attack != "attack") {
             break;
            } 
            if (grant.hp <= 0 && grant.catlv > 0) {
                grant.hp += 10;
                console.log(`${userName} has defeated ${grant.title}`);
                user.wins++;
                grant.catlv--;
            } else if (grant.hp <= 0 && grant.catlv >= 0) {
                console.log(`${userName} has defeated ${grant.title}`);
                break;
            } else if (user.hp <= 0 && user.wins <= 2) {
                console.log(`${grant.title} has defeated ${userName}. You lose.`);
                break;
            }
        
    }


    


   
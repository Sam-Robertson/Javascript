/**
 * Created by samrobertson on 10/11/16.
 */



document.getElementById("Main").style.textAlign = "center";

var game = function () {
    this.gameStart = function (myid) {
        console.log("Game has started");
    };
};


var mygame = new game();





var maincharacter = {
    name: "george",
    type: "war dude",
    health: 100,
    alive: "alive"
};


if (maincharacter.health == 0) {
    maincharacter.alive == "dead";
}



// document.getElementById(myid).style.display = 'none';
// document.getElementById("btn").innerHTML = "<a href='#'> end game</a>";
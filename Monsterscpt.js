/**
 * Created by samrobertson on 10/3/16.
 */
// JavaScript Document


// create an array of food items for the monster to eat
var foodarr = ['Lucky Charms', 'Captain Crunch', 'Reese Puffs', 'Dead fish', 'Soup', 'Mushrooms'];
var currentfood = "";

// start the game with a function
function rungame(){
    var thefood = getfood();
    setfood(thefood);
}

// randomly select a food to put in the box
function getfood(){
    var randomfood = Math.floor((Math.random() * foodarr.length) + 0);
    return foodarr[randomfood];
}

// put the food in the box
function setfood(food){
    currentfood = food;
    document.getElementById("foodbox").innerHTML = food;
}

function eatit(){
    //if the food is good
    if(currentfood == "Lucky Charms" || currentfood == "Captain Crunch" || currentfood == "Reese Puffs"){
        document.getElementById("commentbox").innerHTML = "Mmmmm, this Cereal is sooooo Cereally!";
        var thefood = getfood();
        setfood(thefood);
    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "Get that crap outta my face!";

    }

}

function trashit(){
    //if the food is good
    if(currentfood == "Lucky Charms" || currentfood == "Captain Crunch" || currentfood == "Reese Puffs"){
        document.getElementById("commentbox").innerHTML = "Kid's in Africa are starving you jerk face!";


    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "Way to go, nobody wants that garbage";
        var thefood = getfood();
        setfood(thefood);
    }

}


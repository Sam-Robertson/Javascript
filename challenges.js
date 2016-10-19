/**
 * Created by samrobertson on 10/18/16.
 */
var ranNumber = Math.floor ((Math.random() * 10) +1);


function popUp() {
    var guess = prompt("guess a number between 1 and 10!");


    if (guess == ranNumber) {
        alert("well done!")
    }

    else {
        alert("wrong!")
    }
}





// number 2

function secondpop() {
    var firstnumber = prompt("pick a number");
    var operation = prompt("enter either 'Multiply' or 'Divide'");
    var secondnumber = prompt("pick a second number");

    if (operation == 'Divide') {
        alert(firstnumber / secondnumber)

    }

    else {
        alert(firstnumber * secondnumber)
    }

}


//Number 3
var year = Math.floor ((Math.random() * 500) +2016);
var month = Math.floor ((Math.random() * 12) +1);
var day = Math.floor ((Math.random() * 30) +1);

function thirdpop() {
    var day = new Date(year,month,day);
    alert(day);
}
























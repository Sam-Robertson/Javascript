/**
 * Created by samrobertson on 9/29/16.
 */



// var originalTotal = "9874";
// var numOriginal = Number(originalTotal);
// var totalBalance = numOriginal + 3000;
//
//
// document.getElementById(oldBalance).innerHTML = originalTotal;
//
// document.getElementById(newBalance).innerHTML = totalBalance;
//
// function createPerson(haircolor, eyecolor, height, age) {
//
// }
//
// createPerson("brown", "brown", "8ft", 25);


// var addItem = (function(){
//     var cartItems = 0;
//     return function () {return cartItems +=1;}
//
//     })();
//
// function updatecart(){
//     document.getElementById("shoppingcart").innerHTML = addItem();
//
// }
//
//fibonacci function

// function fib(n) {
//     if (n == 0) {
//         return 0;
//     }
//     if (n == 1) {
//         return 1;
//     }
//     return fib(n -1) + fib(n -2);
// }
//
//
// var fibNumber = fib(4);
//
//
// function fact(n) {
//     if (n == 0) {
//         return 1;
//     }
//     if (n == 1) {
//         return 1;
//     }
//     if (fact(n) > 0)
//         return fact(n);
//
//     return n = fact(n-1) * n;
//
// }
//
// var factnumber = fact(4);

function BankAccount(accountNumber, name, balance) {
    var balance = balance || 250;

    this.accountNumber = accountNumber;
    this.name = name;
    this.getBalance = function () {
        return balance;
    };
    this.deposit = function (amount) {
        balance = balance + amount;
    };
    this.withdraw = function (amount) {
        balance = balance - amount;
    };
}

//savings acount
function SavingsAccount(accountNumber, name, interest, balance) {
    BankAccount.call(accountNumber, name, balance);

    this.interest = interest;
}


SavingsAccount.prototype = Object.create(BankAccount.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;


//CheckingAccount

function CheckingAccount(accountNumber, name, overdraftFee, numberofChecks, balance) {
    BankAccount.call(accountNumber, name, balance);

    this.overdraftFee = overdraftFee;
    this.numberOfchecks = numberofChecks;
}

CheckingAccount.prototype = Object.create(BankAccount.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;


//loops
//for
//while
//for each...etc


var myArray = [8, 2, 3, 4, 5, 6, 7, 7, 4, 5, 6, 3];

for (var i = 0; i < myArray.length; i = i + 1) {
    console.log('i: ' + i + ', myArray[i]: ' + myArray[i]);
}

for (var i = myArray.length - 1; i >= 0 ; i--) {
    console.log('i: ' + i + ', myArray[i]: ' + myArray[i]);
}

//itar loop
//ritar reverse

myArray.forEach(function (item, index, yourArray) {
    var equal = myArray[index] == item;
});

var cat = {
    name: 'snowflake',
    breed: 'white cat',
    fosterHome: {
        address: '123 Main st',
        number: '321-516-5161'
    },
    lives: 9,
    toys: ['dead mouse', 'marble']
};

//for in

cat.breed == cat['breed'];

for (catPropertyName in cat) {
    console.log(catPropertyName);
     console.log(cat[catPropertyName]);

    if(typeof cat[catPropertyName] == 'Object') {
        for (propertyName in cat[catPropertyName]) {
            var myObject = cat[catPropertyName];
            console.log(propertyName);
            console.log(myObject[propertyName]);

        }

    }
}

//for of



// while
var i = 0;

while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
}


var done = false;

while (!done) {
    var userInput = prompt('Guess what number I\'m thinking of: ');
    if (userInput == 7) {
        alert('Yay, you guessed it!');
        done = true;
    }
    else {
        alert('Try again');
    }
}


do{
    var wantsToPlay = prompt('Do you want to play?');
    var userInput = prompt('Guess what number I\'m thinking of: ');
    if (userInput == 7) {
        alert('Yay, you guessed it!');
        done = true;
    }
    else {
        alert('Try again');
    }
}
 while (!done);
//if
if (something == true && somethingElse == true && (oneMoreThing == 'me' || thatOtherThing == 'you')) {

}

//if else

var yourFavoriteColor = 'red';

var weAreFriends = undefined;

if (yourFavoriteColor == 'pink') {
    weAreFriends = true;
}
else if (yourFavoriteColor == 'blue') {
    weAreFriends = true;
}
else {
    weAreFriends = false;
}


// ternary

var result =  something == true ? 'yea' : 'nay';
































/**
 * Created by samrobertson on 10/12/16.
 */
function startProgram() {
    var done = false;
    while (!done) {
        var input = prompt('Please enter 5 comma separated numbers:');

        var somethingLikeThis = '8, 45, 67, 32, 9';
        var arrayOfStrings = input.split(',');

        console.log(arrayOfStrings);

        var arrayOfNumbers = [];

        for (var i = 0; i < arrayOfStrings.length; i++) {
            arrayOfNumbers[i] = Number(arrayOfStrings[i]);
        }
        console.log(arrayOfNumbers);

        var sortedNumbers = [];

        for (var i = 0; i < arrayOfNumbers.length; i++) {
            var lowestNumber = arrayOfNumbers[i];

            for (var j = 0; j < arrayOfNumbers.length; j++) {
                if (arrayOfNumbers[j] < lowestNumber && !sortedNumbers.contains(arrayOfNumbers[j])) {
                    lowestNumber = arrayOfNumbers[j];
                }

            }

            sortedNumbers.push(lowestNumber);

        }
        
        console.log(sortedNumbers);

        alert(sortedNumbers);
    }
}
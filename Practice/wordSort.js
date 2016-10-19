/**
 * Created by samrobertson on 10/13/16.
 */
var mixedWord = "minonar";

function start() {
    // var theinput = document.getElementById("answer").innerHTML;
    // theinput.innerHTML += theletter;   -----------   This would be a much better way to do this!!

    document.getElementById("firstLetter").innerHTML = mixedWord[0];
    document.getElementById("secondLetter").innerHTML = mixedWord[1];
    document.getElementById("thirdLetter").innerHTML = mixedWord[2];
    document.getElementById("fourLetter").innerHTML = mixedWord[3];
    document.getElementById("fiveLetter").innerHTML = mixedWord[4];
    document.getElementById("sixLetter").innerHTML = mixedWord[5];
    document.getElementById("sevenLetter").innerHTML = mixedWord[6];

}



function asyncCapatalize (stringArray, callback) {
    setTimeout(Capitalize, 3000);

    function Capitalize() {
        for (var stringIndex = 0; stringIndex < stringArray.length; stringIndex++) {
            stringArray[stringIndex] = stringArray[stringIndex][0].toUpperCase() + stringArray[stringIndex].substr(1);
        }
        callback();
    }
}

var puppies = ['cuddles ', 'daisy ', 'battleaxe ', 'bonecrusher '];

asyncCapatalize(puppies, function () {
    document.getElementById('puppy-names').innerText = puppies;
});

document.getElementById('puppy-names').innerText= puppies;


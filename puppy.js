/**
 * Created by samrobertson on 10/5/16.
 */
var puppy = {
    name: 'Mr. cuddle mick cuddle face',
    age: '12',
    tricks: ['rolling', 'sitting', 'food-consumption', 'licking'],
    breed: {
       name: 'Golden Retriever mixed with a poodle',
        registered: true
    },
    bark: function () {
     return 'I am the cutest puppy you\'ve ever seen'
    }
}

function displayPuppy(puppy) {
    document.getElementById('puppyProperties').innerHTML = puppy.name;
    document.getElementById('puppyProperties').innerHTML = puppy.age;
    document.getElementById('puppyProperties').innerHTML = puppy.breed.name;
    document.getElementById('puppyProperties').innerHTML = puppy.tricks[0]
}

function bark() {
    document.getElementById('bark').innertext = puppy.bark();
}
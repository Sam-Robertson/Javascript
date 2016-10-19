var car = {
    make: 'toyota', __defineGetter__model: 'tacoma',
    year: 2008,
    start: function(key) {
        if(key.code === 'blah balhaksfnoenf') {
            car.Engine.status = 'on';
            return true
        }
        else {
            return false;
        }
    },
    go: function (speed) {}
};

var key = {
    code: 'blah balhaksfnoenf'
};

function tuneUp(car, key) {
    var currentMake = car.make;
    var currentModel = car.model;

    if (car.start(key)) {

        if (checkEngine(car)) {
            car.Engine.verified = true;


        }
    }

    function checkEngine(car) {}

}
/* THE SCRIPT FOR THE PROGRAM */


// HTML TAGS

var minutes = document.getElementById('minutes');
var seconds0 = document.getElementById('seconds0');
var hours = document.getElementById('hours');
var seconds1 = document.getElementById('seconds1');
var kilo = document.getElementById('kilo');
var meters = document.getElementById('meters');
var miles = document.getElementById('miles');
var meters1 = document.getElementById('meters1');
var kilometers = document.getElementById('kilometers');
var meters_0 = document.getElementById('meters_0');
var mil = document.getElementById('mil');
var meters_1 = document.getElementById('meters_1');

var sDistance = document.getElementById('sDistance');
var sTime = document.getElementById('sTime');
var solSpeedDistance = document.getElementById('solSpeedDistance');
var solSpeedTime = document.getElementById('solSpeedTime');
var solSpeed = document.getElementById('solSpeed');

var dSpeed = document.getElementById('dSpeed');
var dTime = document.getElementById('dTime');
var solDistanceSpeed = document.getElementById('solDistanceSpeed');
var solDistanceTime = document.getElementById('solDistanceTime');
var solDistance = document.getElementById('solDistance');

var tSpeed = document.getElementById('tSpeed');
var tDistance = document.getElementById('tDistance');
var solTimeSpeed = document.getElementById('solTimeSpeed');
var solTimeDistance = document.getElementById('solTimeDistance');
var solTime = document.getElementById('solTime');

var aFinalVelocity = document.getElementById('aFinalVelocity');
var aInitialVelocity = document.getElementById('aInitialVelocity');
var aTime = document.getElementById('aTime');
var solAcFV = document.getElementById('solAcFV');
var solAcTime = document.getElementsByClassName('solAcTime');
var solAcChange = document.getElementById('solAcChange');
var solAc = document.getElementById('solAc');

var dVelocity = document.getElementById('dVelocity');
var dChangeInTime = document.getElementById('dChangeInTime');
var solDisplacementVelocity = document.getElementById('solDisplacementVelocity');
var solDisplacementTime = document.getElementById('solDisplacementTime');
var solDisplacement = document.getElementById('solDisplacement');

var vDisplacement = document.getElementById('vDisplacement');
var vTime = document.getElementById('vTime');
var solVelocityDisplacement = document.getElementById('solVelocityDisplacement');
var solVelocityTime = document.getElementById('solVelocityTime');
var solVelocity = document.getElementById('solVelocity');


// CONVERTER
function convert(units) {
    switch (units) {
        case 'ms':
            seconds0.value = Number(minutes.value * 60).toFixed(2) + ' s';
            break;
        case 'hs':
            seconds1.value = Number(hours.value * 3600).toFixed(2) + ' s';
            break;
        case 'km':
            meters.value = Number(kilo.value / 3.6).toFixed(2) + ' m/s';
            break;
        case 'miles':
            meters1.value = Number(miles.value / 2.237).toFixed(2) + ' m/s';
            break;
        case 'kiloMeters':
            meters_0.value = Number(kilometers.value * 1000).toFixed(2) + ' m';
            break;
        case 'milMeters':
            meters_1.value = Number(mil.value * 1609).toFixed(2) + ' m';
    }
}


// SPEED SOLVER
function findSpeed() {
    if (sDistance.value && sTime.value) {
        solSpeedDistance.innerHTML = Number(sDistance.value).toFixed(2) + ' m';
        solSpeedTime.innerHTML = Number(sTime.value).toFixed(2) + ' s';
        solSpeed.innerHTML = Number(sDistance.value / sTime.value).toFixed(2) + ' m<sub>/s</sub>';
    } else {
        solSpeedDistance.innerHTML = '??? m';
        solSpeedTime.innerHTML = '??? s';
        solSpeed.innerHTML = '??? m<sub>/s</sub>';
    }
}


// DISTANCE SOLVER
function findDistance() {
    if (dSpeed.value && dTime.value) {
        solDistanceSpeed.innerHTML = Number(dSpeed.value).toFixed(2) + ' m<sub>/s</sub>';
        solDistanceTime.innerHTML = Number(dTime.value).toFixed(2) + ' s';
        solDistance.innerHTML = Number(dSpeed.value * dTime.value).toFixed(2) + ' m';
    } else {
        solDistanceSpeed.innerHTML = '??? m<sub>/s</sub>';
        solDistanceTime.innerHTML = '??? s';
        solDistance.innerHTML = '??? m';
    }
}


// TIME SOLVER
function findTime() {
    if (tDistance.value && tSpeed.value) {
        solTimeDistance.innerHTML = Number(tDistance.value).toFixed(2) + ' m';
        solTimeSpeed.innerHTML = Number(tSpeed.value).toFixed(2) + ' m<sub>/s</sub>';
        solTime.innerHTML = Number(tDistance.value / tSpeed.value).toFixed(2) + ' s';
    } else {
        solTimeDistance.innerHTML = '??? m';
        solTimeSpeed.innerHTML = '??? m<sub>/s</sub>';
        solTime.innerHTML = '??? s';
    }
}


// ACCELERATION SOLVER
function findAcceleration() {
    if (aFinalVelocity.value && aInitialVelocity.value && aTime.value) {
        var vChange = aFinalVelocity.value - aInitialVelocity.value;
        solAcFV.innerHTML = Number(aFinalVelocity.value).toFixed(2) + ' m<sub>/s</sub>';
        solAcIV.innerHTML = Number(aInitialVelocity.value).toFixed(2) + ' m<sub>/s</sub>';
        solAcChange.innerHTML = Number(vChange).toFixed(2) + ' m<sub>/s</sub>';
        solAcTime[0].innerHTML = Number(aTime.value).toFixed(2) + ' s';
        solAcTime[1].innerHTML = Number(aTime.value).toFixed(2) + ' s';
        solAc.innerHTML = Number(vChange / aTime.value).toFixed(2) + ' m<sub>/s<sup>2</sup></sub>';
    } else {
        solAcFV.innerHTML = '??? m<sub>/s<sup>2</sup></sub>';
        solAcIV.innerHTML = '??? m<sub>/s<sup>2</sup></sub>';
        solAcChange.innerHTML = '??? m<sub>/s<sup>2</sup></sub>';
        solAcTime[0].innerHTML = '??? s';
        solAcTime[1].innerHTML = '??? s';
        solAc.innerHTML = '???';
    }
}


// DISPLACEMENT SOLVER
function findDisplacement() {
    if (dVelocity.value && dChangeInTime.value) {
        solDisplacementVelocity.innerHTML = Number(dVelocity.value).toFixed(2) + ' m<sub>/s</sub>';
        solDisplacementTime.innerHTML = Number(dChangeInTime.value).toFixed(2) + ' s';
        solDisplacement.innerHTML = Number(dVelocity.value * dChangeInTime.value).toFixed(2) + ' m';
    } else {
        solDisplacementVelocity.innerHTML = '??? m<sub>/s</sub>';
        solDisplacementTime.innerHTML = '??? s';
        solDisplacement.innerHTML = '??? m';
    }
}


// SPEED SOLVER
function findVelocity() {
    if (vDisplacement.value && vTime.value) {
        solVelocityDisplacement.innerHTML = Number(vDisplacement.value).toFixed(2) + ' m';
        solVelocityTime.innerHTML = Number(vTime.value).toFixed(2) + ' s';
        solVelocity.innerHTML = Number(vDisplacement.value / vTime.value).toFixed(2) + ' m<sub>/s</sub>';
    } else {
        solVelocityDisplacement.innerHTML = '??? m';
        solVelocityTime.innerHTML = '??? s';
        solVelocity.innerHTML = '??? m<sub>/s</sub>';
    }
}

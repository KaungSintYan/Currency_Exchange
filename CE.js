var bMm = 1523, sMm = 1533, bUsd = 1, sUsd = 1;

var buyMm = document.getElementById('buyMm');
var buyUsd = document.getElementById('buyUsd');
var sellMm = document.getElementById('sellMm');
var sellUsd = document.getElementById('sellUsd');

buyUsd.value = bUsd;
buyMm.value = bMm;
sellMm.value = sMm;
sellUsd.value = sUsd;


function buy(i) {
    var currency = 0;
    switch (i) {
        case 1: buyUsd.value = parseInt(buyMm.value / bMm); break;
        case 2: buyMm.value = parseInt(buyUsd.value * bMm); break;
    }
}
function sell(i) {
    switch (i) {
        case 1: sellUsd.value = parseInt(sellMm.value / sMm); break;
        case 2: sellMm.value = parseInt(sellUsd.value * sMm); break;
    }
}
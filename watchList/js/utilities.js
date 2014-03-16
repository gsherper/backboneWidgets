//http://stackoverflow.com/questions/6860853/generate-random-string-for-div-id
function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

//http://stackoverflow.com/questions/13455042/random-number-between-negative-and-positive-value
function generateRandomPrice() {
  var num = Math.floor(Math.random()*99) + 1; // this will get a number between 1 and 99;
 // num *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
  return num;
}

function generateRandomTime() {
  var time = Math.floor(Math.random()*99) + 300;
  return time;
}

//HBP
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

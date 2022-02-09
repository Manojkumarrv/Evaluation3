'use strict'

for(var i = 0; i <= 10; i++) {
    for(let k=i; k<=i; k++)
    setTimeout(function() {
    console.log(k);
    }, 1000*k);
    }
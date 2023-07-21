"use strict";

// using arrow function the window object is undefined
setTimeout(() => {
    console.log("Hello World")
}, 2000);

setInterval(() => {
    console.log("Hi World")
}, 2000);

// Call Backs when fired doesnt stop other codes from execution


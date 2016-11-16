// Explain what is going on here.

var p = new Promise(function(res, rej){
    setTimeout(() => res(1), 1000)
})

p.then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then((v) => console.log(v)) //--> new Promise

function add1(v){ return v+1 }


/*we are creating a function 'add1' that simply takes 'v' and returns it plus 1. Then there is a promise created (p) that has the resolved value of 1 with a 1 second delay. p is then called upon and has a chain of 4 Promises all of which call to take in 'v's current value, add 1 and then return it. The result of which is 5.*/

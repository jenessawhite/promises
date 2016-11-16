// 1. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var myvar = 'my value';

(function() {
    console.assert(myvar === undefined)
    var myvar = 'local value';
})()
//passes becase myvar was originally defined outside of the function which is private.


// 2. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var flag = true

function test() {
    if(flag) {
        var flag = false
    }
    else {
        flag = true
    }
    console.assert(flag === true)
}
test()
//


// 3. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var message = 'Hello world'

function saySomething() {
    console.assert(message === 'Foo bar')
    var message = 'Foo bar'
}
saySomething()
//message is defined below the assert, but within the function. If you just console.log(message) you would see 'Hello world'


// 4. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var message = 'Hello world'

function saySomething() {
    console.assert(message === 'Hello world')
    message = 'Foo bar'
}
saySomething()
// because message is improperly redefined within the function it defaults to the var message set


// 5. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
function test() {
    console.assert(a === undefined)
    console.assert(foo() === 2)

    var a = 1
    function foo() {
        return 2
    }
}
test();
//


// 6. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
(function() {
    console.assert(bar === undefined)
    console.assert(foo() === undefined + ' - :)')

    function foo() {
        return bar+' - :)'
    }

    var bar = 1
})();
//

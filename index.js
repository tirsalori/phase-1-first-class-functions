function sayHello(){
    return "Hello, World."
}

function receivesAFunction(sayHello){
    sayHello()
}

function returnsANamedFunction(){
    return sayHello
}

function returnsAnAnonymousFunction(){
    return function() {
        sayHello()
    }
}
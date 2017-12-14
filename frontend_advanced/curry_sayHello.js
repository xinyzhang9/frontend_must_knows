// Write a function called sayHello

function sayHello(){
    var args = [].slice.call(arguments);

    var _sayHello = function(){
        if(arguments.length === 0){
            return args.reduce(function(a,b){return a+' '+b;});
        }
        else{
            [].push.apply(args, arguments);
            return _sayHello;
        }
    }

    _sayHello.toString = function () {
        return args.reduce(function (a, b) {
            return a +' '+ b;
        });
    }

    return _sayHello;
}

// should print 'Hello World My Name is Mike'
console.log((sayHello('Hello')('World')('My')('Name')('is')('Mike')).toString())

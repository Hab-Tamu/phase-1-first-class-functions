// write your functions below here
function myFunction(name){
    console.log("Hello " + name)
}
function receivesAFunction(callback){
    let name = "My name is Call_back"
    callback(name)
}
receivesAFunction(myFunction)

const returnsANamedFunction = function(){
    console.log("This is an example of named function ")
}
var redux =  require('redux');

console.log('starting redux example');

//pure functions
//return value is same on all occurences for same input.
//it doesnt rely on variables outside of it or even doesnt update any variables outside of it.
// pure functions cannot have any asynchronous requests, hence no callbacks, no promises.
//pure functions are not allowed to update the values that were passed in as inputs (this only matters for objects,arrays which are passed by ref, not by value)

function add(a,b){
  return a + b ;
}

function changeProp(obj){
  //makes a pure function
  return {
    ...obj,
    name : 'Jen'
  };

  //not a pure function since this will update the value which was passed as an input
  //obj.name = 'jen';
  //return obj;
}

var startingValue = {
    name :'andrew',
    age : 10
  };
var res = changeProp(startingValue);

console.log(res);

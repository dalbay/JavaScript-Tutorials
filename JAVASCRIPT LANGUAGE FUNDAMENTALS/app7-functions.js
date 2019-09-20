// FUNCTION DECLARATION & EXPRESSIONS

// Function Declaration
function greet(firstName, lastName){
    return 'Hello ' + firstName + ' ' + lastName;
  }
  
console.log(greet('John', 'Doe'));

function greet(firstName = 'John', lastName = 'Doe'){  // ES6
    // if(typeof firstName === 'undefined'){firstName = 'John'}  ES5
    // if(typeof lastName === 'undefined'){lastName = 'Doe'}	   ES5
    return 'Hello ' + firstName + ' ' + lastName;
  }
  
console.log(greet());

// Function Expressions
  // anonymous function assigned to a variable (3 is default)
  const square = function(x = 3){ 
    return x*x;
  };
  
 console.log(square(8)); // output: 64



// Immediately Invokable Function Expressions – IIFEs

// a function that you declare and run at the same time; 
// don't forget, functions finish with ()

  (function(){
    console.log('IIFE Ran..');
  })();
  
  (function(name){
    console.log('Hello '+ name);
  })('Brad');


// Property Methods

// - functions inside of an objects
// - create a variable and set it to an object with {}
// Example - we declare two functions- add and edit inside this object:
  const todo = {
    add: function(){
      console.log('Add todo..');
    },
    edit: function(id){
      console.log(`Edit todo ${id}`);
    }
  };
  // defining functions to the todo outside of the {}
  todo.delete = function(){
    console.log('Delete todo...');
  };
  
  // calling the todo objects methods
  todo.add();
  todo.edit(22);
  todo.delete();

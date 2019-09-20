// GENERAL LOOPS

// FOR LOOP
for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('2 is my favorite number');
    continue;  //..to skip go to next iteration
  }
  if(i === 5){
    console.log('Stop the loop');
    break;  //.. to break out of the loop.
  }
  console.log('Number '+ i);
}
/*
Number 0
Number 1
2 is my favorite number
Number 3
Number 4
Stop the loop
*/

// WHILE LOOP
let i = 0;

while(i < 10){
  console.log('Number ' + i);
  i++;
}

// DO WHILE
let index = 100;

do {
  console.log('Number ' + index);
  index++;
}
while(index < 10);


// LOOP THROUGH ARRAYS
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for(let i = 0; i < cars.length; i++){
  console.log(cars[i]);
}

// FOREACH - array loop
cars.forEach(function(car){
    console.log(car);
});

cars.forEach(car =>  {
  console.log(car);
});

cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
  console.log(array);
});


// MAP 
// is used to return something different (a different array)
//create an array of object users
const users  = [
  {id: 1, name:'John'},
  {id: 2, name: 'Sara'},
  {id: 3, name: 'Karen'},
  {id: 4, name: 'Steve'}
];

// this will return each id inside of an arrya
const ids = users.map(function(user){
   return user.id;
});

console.log(ids);
// FOR IN LOOP 
// iterate through objects so we can get key value pairs.
const user = {
  firstName: 'John', 
  lastName: 'Doe',
  age: 40
};

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}
/*
firstName : John
lastName : Doe
age : 39
*/
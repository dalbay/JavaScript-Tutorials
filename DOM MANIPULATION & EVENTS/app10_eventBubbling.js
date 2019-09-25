document.querySelector('.card-title').addEventListener('click', function(){
    console.log('card title');
  });
 // Now - Add an event listeners to the parents:

//Add an event listener at its parent which is ‘card-content’:
document.querySelector('.card-content').addEventListener('click', function(){
  console.log('card content');
});

//Add an event listener at ‘card-content’s parent which is ‘card’:
document.querySelector('.card').addEventListener('click', function(){
  console.log('card');
});

//Add an event listener at ‘card’s parent which is ‘col’:
document.querySelector('.col').addEventListener('click', function(){
  console.log('col');
});

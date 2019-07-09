$(document).ready(function(){
    
// Tests
    console.log('Hello World');

    $('button').click(function(){
        alert ('you did it');
        console.log('you did it');
    })


//Call Library 
var calls = [];

//populating the numbers
for ( let i = 0; i <=74; i++) {
    calls[i] = i + 1;
}

//populating the letters
for (let i = 0; i < calls.length;i++){
    if(i < 15){
        calls[i]='B'+calls[i];
    }
    else if((i >=15) && (i < 30)) {
        calls[i]='I'+calls[i];
    }
    else if((i >=30) && (i < 45)) {
        calls[i]='N'+calls[i];
    }
    else if((i >=45) && (i < 60)) {
        calls[i]='G'+calls[i];
    }
    else {
        calls[i]='O'+calls[i];
    }
}
console.log(calls);
  });

// for (let i=1; i<=5; i++) {
//     randomPrompt = Math.floor((Math.random() * 15));
//     callsMade.push(calls[randomPrompt]);
// }
// console.log (callsMade)
// //B
// for (let i = 1; i)
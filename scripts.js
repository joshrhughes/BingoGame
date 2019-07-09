$(document).ready(function(){
    
///// Tests /////
    console.log('Hello World');

///// Call Library///// 
var calls = [];
var called = [];

//Populating the numbers
for ( let i = 0; i <=74; i++) {
    calls[i] = i + 1;
}

//Concatenating the letters
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
 

////Call Logic/////

//  have a user clicks a start/reset button which would start the game which would have the full array

//  have a call button that would pull a random letter from the array and then remove it and add to a 'called' array
$('.callButton').click(function() {
    // pick the random call
    var rand = Math.floor(Math.random()*calls.length)
    var nextCall = calls[rand];
    
    // remove from array  need to make sure nextCall is 
    calls.splice(rand,1);
    // add to called array
    called.push(nextCall);
    // show called 
    console.log(calls);
    console.log(called);
});
// 

}); // end of doc ready
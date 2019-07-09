$(document).ready(function(){
    
///// Tests /////
    console.log('Hello World');

///// Elements Hidden /////
$('.main').hide();    

///// Call Library ///// 
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
 
///// Start Game /////
$('.startButton').click(function() {
    $(this).hide();
    $('.main').show();
    $('.callsRemaining').append(function() {
        return "<table style='width:100%'><caption>Calls</caption><tr><th>Month</th><th>Savings</th></tr><tr><td>January</td><td>$100</td></tr><tr><td>February</td><td>$50</td></tr></table>"
    });
})

///// Call Logic /////

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
});// end of call button logic 


}); // end of doc ready
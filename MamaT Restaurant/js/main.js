function welcome(){
      
    alert("Welcome to Javascript Class.");
   
}

function addTheTwoNumber() {
    var first_number;
    var second_number;
    var answer = 0;
    
    if (isNaN(document.getElementById('first_number').value)) {
        alert('Kindly input number only');
    } else {
        first_number = parseInt(document.getElementById('first_number').value);
        second_number = parseInt(document.getElementById('second_number').value);

        answer = first_number + second_number;
    }
    
    

    console.log('first_number: ' + first_number);

    document.getElementById('answer').value  =  answer;
    
}

function test(){
    var a = 5; var b = "5"; 
    if(a==5){
        if(b==6){
            console.log('Your head no correct');
        }else{
            console.log('Your head is correct');
        }
        console.log('yes');
    }else if(b==5){
        console.log('this is elseif statement');
    }else{ 
        console.log('No');
    }
}
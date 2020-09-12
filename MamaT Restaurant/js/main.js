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
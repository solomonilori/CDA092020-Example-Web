function welcome(){
      
    alert("Welcome to Javascript Class.");
   
}

function addTheTwoNumber() {
    document.getElementById('answer').value  = parseInt(document.getElementById('first_number').value) + parseInt(document.getElementById('second_number').value);
    //document.getElementById('answer').value  = document.getElementById('first_number').value + document.getElementById('second_number').value;
}
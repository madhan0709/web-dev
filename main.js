document.getElementById('form-div').addEventListener('submit',function(event){
    const name = document.getElementById("firstname").value.trim();
    const email = document.getElementById("email").value.trim();
    const datetimeInput = document.getElementById("datetime").value.trim();
    const number = document.getElementById("number").value.trim();
    if (!name || !email || !datetimeInput || !number){
        event.preventDefault();
        alert("Please fill the required details to book the appoinment");
    }
});



function validateForm() {
    
    var name = document.getElementById("Name").value;
    var email = document.getElementById("Mail").value;
    
   
    if (name === "" || email === "") {
        alert("Name and email are required!");
        return false;
    }
    
   
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address!");
        return false;
    
   
    return true;
}}

function purchase(){
    var name = document.getElementById("name").value; 
    var email = document.getElementById("email").value; 
    var phone = document.getElementById("phone").value; 
    var creditcard = document.getElementById("creditCard").value; 
    var nameOnCard = document.getElementById("cardName").value; 
    var cvv = document.getElementById("cvv").value;
    var error = "";
    if(name == ""){
        error += "Name cannot be empty";
    }else if(email == ""){
        error += "Enter valid email";
    }else if(phone == ""){
        error += "Enter a valid phone number";
    }else if(creditcard == ""){
        error += "Enter a valid card number";
    }else if(nameOnCard == ""){
        error += "Name on card cannot be empty";
    }else if(cvv == ""){
        error += "Enter valid CVV";
    }

    document.getElementById("error").innerHTML = error;
}
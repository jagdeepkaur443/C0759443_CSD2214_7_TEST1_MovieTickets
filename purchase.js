function purchase(){
    var name = document.getElementById("name"); 
    console.log(name);
    var email = document.getElementById("email"); 
    var phone = document.getElementById("phone"); 
    var creditcard = document.getElementById("creditcard"); 
    var nameOnCard = document.getElementById("nameOnCard"); 
    var cvv = document.getElementById("cvv");
    var error = "";
    if(name == ""){
        error = "Name cannot be empty";
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

    // if(error == ""){
    //     alert(name);
    // }
}
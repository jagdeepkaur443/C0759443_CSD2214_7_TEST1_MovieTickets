function selectmovie(){
    var e = document.getElementById("movies");
    var text = e.options[e.selectedIndex].text;
    document.getElementById("movieSelected").innerHTML = text;
    if(text == "Iron Man ($10)"){
        document.getElementById("ticketPrice").innerHTML = "$10";
    }else if(text == "Avengers ($25)"){
        document.getElementById("ticketPrice").innerHTML = "$20";
    }else if(text == "Jab We Met ($10)"){
        document.getElementById("ticketPrice").innerHTML = "$10";
    }else if(text == "Dil Hai Tuhara ($12)"){
        document.getElementById("ticketPrice").innerHTML = "$12";
    }else{
        document.getElementById("ticketPrice").innerHTML = "";
    }
}

function seatSelect(){
    x = document.getElementsByClassName("seat");
    x[0].style.backgroundColor = 'red';
}

function purchase(){
    var name = document.getElementById("name"); 
    var email = document.getElementById("email"); 
    var phone = document.getElementById("phone"); 
    var creditcard = document.getElementById("creditcard"); 
    var nameOnCard = document.getElementById("nameOnCard"); 
    var cvv = document.getElementById("cvv");
    var error = "";
    if(name == ""){
        error += "Name cannot be empty";
    }else if(email == ""){
        error += "Enter valid email";
    }else if(phone == "" || phone.length != 10){
        error += "Enter a valid phone number";
    }else if(creditcard == "" || creditcard.length != 16){
        error += "Enter a valid card number";
    }else if(nameOnCard == ""){
        error += "Name on card cannot be empty";
    }else if(cvv == "" || cvv.length != 3){
        error += "Enter valid CVV";
    }

    document.getElementById("error").innerHTML = error;
}
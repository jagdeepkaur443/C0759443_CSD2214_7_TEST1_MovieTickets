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

function totalPrice(){
    var tickets = document.getElementById("tickets").value;
    if()
}

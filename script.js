function selectmovie(){
var e = document.getElementById("movies");
var text = e.options[e.selectedIndex].text;
console.log(text);
}
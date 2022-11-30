$(document).ready(function(){
    // $("#submission").submit(function(event){
    //     event.preventDefault();
    //   alert("Submitted");
    // });
    // $("button").click(function(event){
    //   $("#submission").submit();
    // }); 
    
    $("#submission").on("submit",function(event){
        event.preventDefault();
        console.log("You submitted me!");
    });
  });


fetch("https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=05548a0a117c9bb7c72bdc984e886936")
    .then((response) => response.json())
    .then((data) => console.log(data));
  

var requesturl = 'https://api.github.com/users/trinasnooks/repos'

console.log(requesturl);
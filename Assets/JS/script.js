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


var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-name");
saveButton.addEventListener("click", function(event) {
event.preventDefault();
var searchInput = {
  comment: comment.value.trim()
};
localStorage.setItem("searchInput", JSON.stringify(searchInput));
renderMessage();
});
//saved output of searches to local storage
function renderMessage() {
  var finalSearch = JSON.parse(localStorage.getItem("searchInput"));
  if (finalSearch !== null) {
    document.querySelector(".message").textContent = finalSearch.comment
  }
}


var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');
function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://api.github.com/orgs/nodejs/repos';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');
        // Setting the text of link and the href of the link
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;
        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
}
fetchButton.addEventListener('click', getApi);
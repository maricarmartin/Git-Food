/*
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
*/


var comment = document.getElementById("msg");
var saveButton = document.getElementById("save");
var savedName = document.getElementById("saved-name");
var tableBody = document.getElementById('repo-table');
// var fetchButton = document.getElementById('fetch-button');
function getApi(event) {
    event.preventDefault()
    var searchInput = {
        comment: comment.value.trim()
    };
    console.log(searchInput);
  // fetch request gets a list of all the repos for the node.js organization//
  var requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${searchInput.comment}&appid=6340cdd69e0374925a141cce8b65923d&weather.main`;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
      /*for (var i = 0; i < data.length; i++) {
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
        
      }*/
    });
}

saveButton.addEventListener('click', getApi);
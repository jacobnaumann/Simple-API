/* Create a method that calls an api and then lists the response in a grid */
function getData() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/users/james-priest/repos', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      document.getElementById('responseGrid').innerHTML = ""
      var data = JSON.parse(xhr.responseText);
      var grid = document.getElementById('responseGrid')
      document.body.appendChild(grid);
      for (var i = 0; i < data.length; i++) {
        var item = document.createElement('div');
        item.className = 'grid-item';
        item.innerHTML = data[i].name;
        grid.appendChild(item);
      }
    }
  };
  xhr.send();
}
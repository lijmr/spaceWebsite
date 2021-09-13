var table = new Array(9);
var planets = ["he", "me", "ve", "ea", "ma", "ju", "sa", "ur", "ne"];
var numCol = 1;
localStorage.setItem("table", JSON.stringify(table));
localStorage.setItem("numCol", 1);
localStorage.setItem("isSaved", "no");


function setUpTable(){
  var tempTable = JSON.parse(localStorage.getItem("table"));

  for(var i = 1; i < parseInt(localStorage.getItem("numCol")); i++) {
    var temp = document.getElementById("testTable");
    for(var j = 0; j < temp.rows.length; j++) {
      var cell = temp.rows[j].insertCell(-1);
      var elem = document.createElement("input");
      var txtName = planets[j] + i;
      elem.setAttribute("type", "text");
      elem.setAttribute("name", txtName);
      elem.setAttribute("autocomplete", "off");
      if(j == 0) {
        elem.setAttribute("placeholder", "header");
      }
      else {
        elem.setAttribute("placeholder", "info");
      }
      cell.appendChild(elem);
    } 
  }

  if(localStorage.getItem("isSaved") == "no"){
    for(var i = 0; i < tempTable.length; i++) {
      for(var j = 0; j < tempTable[i].length; j++) {
        x = document.getElementById("testTable").rows[i].cells;
        var elem = document.createElement("input");
        var txtName = planets[i] + j;
        elem.setAttribute("type", "text");
        elem.setAttribute("name", txtName);
        elem.setAttribute("autocomplete", "off");
        elem.setAttribute("value", tempTable[i][j]);
        if(i == 0) {
          elem.setAttribute("placeholder", "header");
        }
        else {
          elem.setAttribute("placeholder", "info");
        }
        x[j + 1].innerHTML = "";
        x[j + 1].appendChild(elem);
      }
    }
  }
  else {
    var x;

    for(var i = 0; i < tempTable.length; i++) {
      for(var j = 0; j < tempTable[i].length; j++) {
        x = document.getElementById("testTable").rows[i].cells;
        x[j + 1].innerHTML = tempTable[i][j];
      }
    }
    var editButton = document.getElementById("edit");
    editButton.setAttribute("type", "button");

    var saveButton = document.getElementById("save");
    saveButton.setAttribute("type", "hidden");

    var addColButton = document.getElementById("addCol");
    addColButton.setAttribute("type", "hidden");
  }
}

function make2DArray(col) {
  var tempTable = JSON.parse(localStorage.getItem("table"));

  for(var i = 0; i < tempTable.length; i++) {
    tempTable[i] = new Array(col);
  }

  localStorage.setItem("table", JSON.stringify(tempTable));
}

function extractData(col) {
  make2DArray(col);

  var tempTable = JSON.parse(localStorage.getItem("table"));

  for(var i = 0; i < tempTable.length; i++) {
    for(var j = 0; j < tempTable[i].length; j++) {
      var val = planets[i] + j;
      tempTable[i][j] = document.forms["infoChart"][val].value;
    }
  }

  localStorage.setItem("table", JSON.stringify(tempTable));
}

function editData(id) {
  var tempTable = JSON.parse(localStorage.getItem("table"));
  var x;

  for(var i = 0; i < tempTable.length; i++) {
    for(var j = 0; j < tempTable[i].length; j++) {
      x = document.getElementById(id).rows[i].cells;
      var elem = document.createElement("input");
      var txtName = planets[i] + j;
      elem.setAttribute("type", "text");
      elem.setAttribute("name", txtName);
      elem.setAttribute("autocomplete", "off");
      elem.setAttribute("value", tempTable[i][j]);
      if(i == 0) {
        elem.setAttribute("placeholder", "header");
      }
      else {
        elem.setAttribute("placeholder", "info");
      }
      x[j + 1].innerHTML = "";
      x[j + 1].appendChild(elem);
    }
  }

  localStorage.setItem("table", JSON.stringify(tempTable));

  var saveButton = document.getElementById("save");
  saveButton.setAttribute("type", "button");

  var addColButton = document.getElementById("addCol");
  addColButton.setAttribute("type", "button");

  var editButton = document.getElementById("edit");
  editButton.setAttribute("type", "hidden");

  localStorage.setItem("isSaved", "no");
}

function saveData(id) {
  extractData(parseInt(localStorage.getItem("numCol")));

  var tempTable = JSON.parse(localStorage.getItem("table"));
  var x;

  for(var i = 0; i < tempTable.length; i++) {
    for(var j = 0; j < tempTable[i].length; j++) {
      x = document.getElementById(id).rows[i].cells;
      x[j + 1].innerHTML = tempTable[i][j];
    }
  }

  var editButton = document.getElementById("edit");
  editButton.setAttribute("type", "button");

  var saveButton = document.getElementById("save");
  saveButton.setAttribute("type", "hidden");

  var addColButton = document.getElementById("addCol");
  addColButton.setAttribute("type", "hidden");

  localStorage.setItem("isSaved", "yes");
}

function addColumn() {
  var temp = document.getElementById("testTable");

  for (var i = 0; i < temp.rows.length; i++) {
    var cell = temp.rows[i].insertCell(-1);
    var elem = document.createElement("input");
    var txtName = planets[i] + localStorage.getItem("numCol");
    elem.setAttribute("type", "text");
    elem.setAttribute("name", txtName);
    elem.setAttribute("autocomplete", "off");
    if(i == 0) {
      elem.setAttribute("placeholder", "header");
    }
    else {
      elem.setAttribute("placeholder", "info");
    }
    cell.appendChild(elem);
  }

  localStorage.setItem("numCol", parseInt(localStorage.getItem("numCol")) + 1);

  document.getElementById("result").innerHTML = localStorage.getItem("numCol");
}
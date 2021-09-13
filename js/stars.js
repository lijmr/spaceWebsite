var starID = ["Su", "Al", "Ba", "Wo", "La", "Si", "Lu"];
var newStarNum = 1;

function changeContent(str) {
    clearScreen();
    
    var x = document.getElementById(str);
    x.style.display = "block";
}

function addStar() {
    var section = document.getElementById("starSection");
    var div = document.createElement("div");
    var formElem = document.createElement("form");
    var newFormName = "Form" + newStarNum;
    var newID = "New" + newStarNum;
    starID.push(newID);

    var headerInput = document.createElement("input");
    var imageInput = document.createElement("input");
    var bodyInput = document.createElement("textArea");
    var saveButton = document.createElement("input");
    var enter1 = document.createElement("br");
    var enter2 = document.createElement("br");
    var enter3 = document.createElement("br");

    div.setAttribute("class", "starDiv");
    div.setAttribute("id", newID);

    formElem.setAttribute("name", newFormName);

    var headID = "header" + newStarNum;
    var imgID = "image" + newStarNum;
    var bodyID = "body" + newStarNum;
    var aTagID = "a" + newStarNum;

    createInputs(headerInput, "header", "starHeader");
    createInputs(imageInput, "image", "starImage");
    bodyInput.setAttribute("rows", "10");
    bodyInput.setAttribute("cols", "80");
    bodyInput.setAttribute("placeholder", "body");
    bodyInput.setAttribute("id", bodyID)
    bodyInput.setAttribute("class", "starBody");

    saveButton.setAttribute("type", "button");
    saveButton.setAttribute("value", "Save");

    saveButton.onclick = function() { saveData(headID, imgID, bodyID, saveButton, aTagID) };
    
    inputsApplied(section, div, formElem, headerInput, imageInput, bodyInput, enter1, enter2, enter3, saveButton);

    addTab("New Star", newID);
    changeContent(newID);

    newStarNum++;
}

function createInputs(type, typeStr, css){
    var name = typeStr + newStarNum;
    type.setAttribute("type", "text");
    type.setAttribute("placeholder", typeStr);
    type.setAttribute("autocomplete", "none");
    type.setAttribute("id", name);
    type.setAttribute("class", css);
}

function inputsApplied(place1, place2, form, type1, type2, type3, bre1, bre2, bre3, save) {
    form.appendChild(type1);
    form.appendChild(bre1);
    form.appendChild(type2);
    form.appendChild(bre2);
    form.appendChild(type3);
    form.appendChild(bre3);
    form.appendChild(save);
    place2.appendChild(form);
    place1.appendChild(place2);
}

function saveData(headerIn, imageIn, bodyIn, saveB, a) {
    var headerInfo = document.getElementById(headerIn).value;
    var imageInfo = document.getElementById(imageIn).value;
    var bodyInfo = document.getElementById(bodyIn).value;

    document.getElementById(headerIn).outerHTML = "<h1>" + headerInfo + "</h1>";
    document.getElementById(imageIn).outerHTML = "<img src='" + imageInfo + "' class='visual'>";
    document.getElementById(bodyIn).outerHTML = "<article><p>" + bodyInfo + "</p></article>";
    document.getElementById(a).innerHTML = headerInfo;
    saveB.setAttribute("type", "hidden");
}

function addTab(starName, id) {
    var navList = document.getElementById("nav");
    var newNav = document.createElement("li");
    var aElem = document.createElement("a");
    var t = document.createTextNode(starName);

    aElem.setAttribute("name", "current");
    var aID = "a" + newStarNum;
    aElem.setAttribute("id", aID);
    aElem.onclick = function() { changeContent(id) };
    aElem.appendChild(t);
    newNav.appendChild(aElem);

    navList.insertBefore(newNav, newStar);
}

function clearScreen() {
    for(var i = 0; i < starID.length; i++) {
        var temp = document.getElementById(starID[i]);
        temp.style.display = "none";
    }
}
function Galaxy(gtype, gdistance, gmagnitude) {
    this.type = gtype;
    this.dis = gdistance;
    this.mag = gmagnitude;
}

var Mi = new Galaxy("spiral", "kly999", "mag0");
var An = new Galaxy("spiral", "Mly99", "mag49");
var Wo = new Galaxy("irregular", "Mly99", "mag15");
var Sm = new Galaxy("irregular", "kly999", "mag49");
var Ce = new Galaxy("elliptical", "Mly15", "mag99");
var Sa = new Galaxy("elliptical", "kly999", "mag49");

var galObjects = [Mi, An, Wo, Sm, Ce, Sa];
var galaxies = ["Mi", "An", "Wo", "Sm", "Ce", "Sa"];

selectGalaxy = () => {
    var t = document.getElementById('type');
    var d = document.getElementById('distance');
    var m = document.getElementById('magnitude');

    var tValue = t.options[t.selectedIndex].value;
    var dValue = d.options[d.selectedIndex].value;
    var mValue = m.options[m.selectedIndex].value;

    for(var i = 0; i < galaxies.length; i++) {
        var temp = document.getElementById(galaxies[i]);
        temp.style.display = "none";
    }

    for(var i = 0; i < galaxies.length; i++) {
        var temp = document.getElementById(galaxies[i]);

        if(galObjects[i].type == tValue || tValue == "default") {
            if(galObjects[i].dis == dValue || dValue == "default") {
                if(galObjects[i].mag == mValue || mValue == "default") {
                    temp.style.display = "block";
                }
            }
        }
    }
}
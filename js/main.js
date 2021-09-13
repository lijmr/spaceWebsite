var PLANETS = ["planet", "planets", "mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var STARS = ["star", "stars", "sun", "proxima", "alpha", "barnard", "centauri", "wolf", "lalande", "sirius", "luyten"];
var GALAXIES = ["galaxies", "galaxy", "milky way", "small magellanic cloud", "small magellanic", "magellanic", "andromeda", "centaurus", "wolf lundmark mellote", "wolf-lundmark-mellote", "sagittarius dwarf spheroidal", "sagittarius dwarf"];

function searched() {
    var x = document.forms["mainSearch"]["Search"].value.toLowerCase();

    if(x == "") {
        alert('Enter something into the search bar!');
        return false;
    }

    for (var i = 0; i < PLANETS.length; i++) {
        if(x.indexOf(PLANETS[i]) != -1) {
            location.href = "../html/planets.html";
            return false;
        }
    }

    for (var i = 0; i < STARS.length; i++) {
        if(x.indexOf(STARS[i]) != -1) {
            location.href = "../html/stars.html";
            return false;
        }
    }

    for (var i = 0; i < GALAXIES.length; i++) {
        if(x.indexOf(GALAXIES[i]) != -1) {
            location.href = "../html/galaxies.html";
            return false;
        }
    }

    alert("Sorry, it looks like we couldn't find what you were searching for.");
}
document.getElementById("c1").onmouseover = function() {mouseOver()};
document.getElementById("c1").onmouseout = function() {mouseOut()};
function mouseOver() {
    document.getElementById("c1").style.color = "red";
}

function mouseOut() {
    document.getElementById("c1").style.color = "black";
}
document.body.style.backgroundColor = "red";
document.getElementById("header").style.backgroundColor= "blue";
document.body.style.fontFamily = "sans-serif";
document.getElementById("nickname").innerHTML = "Jessie Bessie";
document.getElementById("favorites").innerHTML = "Sour patch watermelons";
document.getElementById("hometown").innerHTML = "Morgan, Utah";

// extra credit
var listItem = document.getElementsByTagName("li");
for(var i = 0; i < listItem.length; i++) {
	listItem[i].style.color = "red";
	listItem[i].className = "listItem";
	listItem[i].style.backgroundColor= "white";
}
var image = document.createElement("img");
image.src = "bridge.jpg"
document.body.appendChild(image);
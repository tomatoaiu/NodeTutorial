var x = document.querySelectorAll(".aaa");
var last = x[x.length - 1];
console.log(last); // NodeList [ <p> ]

// create element
var child = document.createElement("div");
// give text to the elements just created
var text = document.createTextNode("child");
// add text under element
child.appendChild(text);
// add class to elemet
child.className = "aaa";
// add element under parent
last.append(child);

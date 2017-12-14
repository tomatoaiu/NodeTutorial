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

// clone child
var uncle = child.cloneNode(true);

// add element under parent
last.append(child);

// error
// last.parentNode.insertBefore(child);
uncle.textContent = "uncle";

var aunt = uncle.cloneNode(true);

// add uncle immediately after last(element)
last.parentNode.insertBefore(uncle, last.nextSibling);

aunt.innerHTML = "aunt\
                    <div>aunt's child</div>";

uncle.parentNode.insertBefore(aunt, last.nextSibling);

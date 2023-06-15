// 1 - Select the section with an id of container without using querySelector.
const num1 = document.getElementById("container");

// 2 - Select the section with an id of container using querySelector.

const num2 = document.querySelector("container");

// 3 - Select all of the list items with a class of "second".

const lilist = document.getElementsByClassName(".second");

// 4 - Select a list item with a class of third, but only the list item inside of the ol tag.

const item = document.querySelector('ol > li.third');


// 5 - Give the section with an id of container the text "Hello!".
document.getElementById("container").appendChild(document.createTextNode("Hello"));


// 6 - Add the class main to the div with a class of footer.

document.querySelector(".footer").classList.add(".main");

// 7 - Remove the class main on the div with a class of footer.

document.querySelector(".footer").classList.remove(".main")
// 8 - Create a new li element.

const list = document.createElement("li");

// 9 - Give the li the text "four".

list.innerText = "four";

// 10 - Append the li to the ul element.

document.querySelector("ul").appendChild(list);

// // 11 - Loop over all of the lis inside the ol tag and give them a background color of "green".

const ordered = document.querySelectorAll("ol > li");
for (const child of ordered) {
   child.style.backgroundColor = "green"
}

// 12 - Remove the div with a class of footer.

const divFoot = document.querySelector(".footer");
divFoot.remove();

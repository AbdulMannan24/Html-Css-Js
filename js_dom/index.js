//DOM manipulation 

//getElementById("id")
// let element = document.getElementById("first");
//getElementByClassName

/* 
    every single thing is considered a node in 
    dom tree 
    Even a comment;
    node - element, text, comment nodejs
*/
/*
-> Selecting Elements in DOM
element.getElementById('id');
*/

let element = document.getElementById("dom"); 
// selects first element with the id
//  though only 1 id must exist in a html file
//element.innerText = "Changed By DOM manipulaiton";

//element = document.getElementsByName("language");
// returns list of elements

element = document.getElementsByTagName('input'); 
// returns list of all input elements in the file
//console.log(element);

element = document.getElementsByClassName('classname');
// gets list of all elements with the particular class name
//console.log(element);

// querySelector()
// the query selector method allows you to select the first element 
// that matches one or more css selectors-> .class or #id or tags other combination selectors 
element = document.getElementById("dom");
//let output = element.querySelector('.demo');
//console.log(output);
// it is working on element like a
//console.log(output);

//querySelectorAll()
//element = document.querySelectorAll('.demo');
//console.log(element);

/*
    Traversal in Dom 
    Node - can contain other things like comments, texts, etc
    Element - a html element like <h1></h1>
*/

let parentElement = document.getElementById("learnTraversal");
// there is a diff bw firstChild n firstElement child
// if we have empty space that will show up as firstchild 
//console.log(parentElement.firstChild);
//console.log(parentElement.firstElementChild);
//console.log(parentElement.lastElementChild);
//console.log(parentElement.lastElementChild.previousElementSibling);

// learning next sibling and previous sibling 
// -> element.previousElementSibling
// -> element.nextElementSibling

// Manipulating the html elements
// -> creating elements 
// --> creating element and adding directly to the html body

// let div = document.createElement("div");
// div.innerHTML = "<p>This is just the beginnning of DOM</p>";
// document.body.appendChild(div);
// div.className = "sogood"

// adding an item to an existing list or anything 
let list = document.getElementsByClassName('list');
let b = list[0].firstElementChild;
let li = document.createElement("li");
li.innerText = 'Express.js';
li.className = 'list';
b.appendChild(li);































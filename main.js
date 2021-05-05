// DECLARATIONS
let mainHeading = document.querySelector("#main-heading");
let pageHeader = document.querySelector("#page-header");
let para1 = document.querySelector("#para1");
let para2 = document.querySelector("#para2");
let para4 = document.querySelector("#para4");
let red = document.querySelector("#red");
let blue = document.querySelector("#blue");
let yellow = document.querySelector("#yellow");
let green = document.querySelector("#green");
let black = document.querySelector("#black");

// MANIPULATION
// Question2
mainHeading.innerHTML = "New DOM Layout";
pageHeader.classList = "bg-success";

// Question3
para1.innerHTML =
	"The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";
para2.innerHTML =
	"The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";

// Question4
btn.addEventListener("click", () => {
	para4.innerHTML =
		"The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
});

// Question5
red.classList = "bg-danger";
blue.classList = "bg-primary";
yellow.classList = "bg-warning";
green.classList = "bg-success";
black.classList = "bg-dark";

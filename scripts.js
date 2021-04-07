function hideAllPages() {
	document.getElementById("products").setAttribute("style", "display: none");
	document.getElementById("new-product").setAttribute("style", "display: none");
}

function displayProducts() {
	hideAllPages();
	document.getElementById("products").setAttribute("style", "");
}

function displayNewProduct() {
	hideAllPages();
	document.getElementById("new-product").setAttribute("style", "");
}

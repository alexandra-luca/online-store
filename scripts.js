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

products = [];

function addProduct(name, price, description, image_url) {
	let product = {
		name,
		price,
		description,
		image_url
	}

	products.push(product);
}

let description1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut odio eget nulla fermentum pulvinar. Donec pulvinar lacus non libero cursus, ut porttitor augue luctus. Donec euismod purus sem, at placerat mi condimentum ut. Nam luctus enim ut porta viverra. Morbi risus ipsum, venenatis a pretium eget, rutrum a urna.";
let description2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor ligula eu sapien pretium sollicitudin. Suspendisse ac massa ante. Nulla efficitur nulla non est euismod, at mattis ligula interdum. Aliquam erat volutpat. Etiam facilisis accumsan ligula, convallis condimentum odio dictum eget. Donec porta interdum interdum. Ut eget odio malesuada, porttitor.";
let description3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor eros laoreet pretium convallis. Nulla elementum, ex ac dignissim condimentum, urna turpis commodo lacus, eu luctus magna nibh sit amet eros. Nunc dignissim efficitur luctus. Donec quis tincidunt turpis, et scelerisque ligula. Duis condimentum massa non vestibulum dictum. Curabitur euismod.";
let description4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo est, porttitor sed mi nec, gravida pulvinar nunc. Maecenas euismod, ligula semper pellentesque ultricies, sem urna pretium mi, quis ornare nibh diam sed odio. Maecenas pellentesque pharetra fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.";

addProduct("Patterned Mask", "$15.99", description1, "images/product1.jpg");
addProduct("Glamorous Mask", "$10.99", description2, "images/product2.jpg");
addProduct("Retro Mask", "$12.99", description3, "images/product3.jpg");
addProduct("Watercolor Mask", "$10.99", description4, "images/product4.jpg");

function fillProducts(products) {
	const container = document.getElementById("products");
	container.innerHTML = "";

	products.forEach((product, index) => {
		let html = `
		<section id="p${index}" class="pclass">
			<div>
				<h2>${product.name}</h2>
				<h3>${product.price}</h3>
				<p>${product.description}</p>
				<img src="${product.image_url}" alt="${product.name}">
				<button type="button">Add to cart</button>
			</div>
		</section>`;
		container.innerHTML += html;
	});
}

fillProducts(products);

function createNewProduct() {
	const name = document.getElementById("input_name").value;
	const price = document.getElementById("input_price").value;
	const desc = document.getElementById("input_desc").value;
	const img = document.getElementById("input_img").value;

	addProduct(name, price, desc, img);
	fillProducts(products);
}

function searchProduct() {
	const search = document.getElementById("input_search").value;

	fillProducts(products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())));
}

my_cart = []

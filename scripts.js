function hideAllPages() {
	document.getElementById("products").setAttribute("style", "display: none");
	document.getElementById("new-product").setAttribute("style", "display: none");
	document.getElementById("my-cart").setAttribute("style", "display: none");	
}

function displayProducts() {
	hideAllPages();
	document.getElementById("products").setAttribute("style", "");
}

function displayNewProduct() {
	hideAllPages();
	document.getElementById("new-product").setAttribute("style", "");
}

function displayMyCart() {
	hideAllPages();
	document.getElementById("my-cart").setAttribute("style", "");
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
let description2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in nisl eu ex egestas rhoncus. Maecenas sed tortor a libero euismod aliquet. Praesent fermentum blandit ultricies. Donec non metus bibendum, faucibus arcu convallis, lacinia odio. Sed id placerat leo, id iaculis odio. Nulla ut vestibulum urna, quis posuere metus. Aenean iaculis tempus nunc vitae tincidunt. Fusce augue elit, semper quis nibh et, posuere tincidunt mi. Maecenas efficitur purus a commodo commodo. Vivamus sagittis tincidunt pretium. Donec odio enim, aliquet at blandit sed, efficitur vel mauris. Vivamus nec mi molestie eros pulvinar dignissim vel quis nibh. Etiam nulla diam, vestibulum non nunc commodo, efficitur dictum mauris. Maecenas vel venenatis eros.";
let description3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tempor eros laoreet pretium convallis. Nulla elementum, ex ac dignissim condimentum, urna turpis commodo lacus, eu luctus magna nibh sit amet eros. Nunc dignissim efficitur luctus. Donec quis tincidunt turpis, et scelerisque ligula. Duis condimentum.";
let description4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo est, porttitor sed mi nec, gravida pulvinar nunc. Maecenas euismod, ligula semper pellentesque ultricies, sem urna pretium mi, quis ornare nibh diam sed odio. Maecenas pellente pharetra fringilla. Pellentesque habitant.";

addProduct("Patterned Mask", 15.99, description1, "images/product1.jpg");
addProduct("Glamorous Mask", 10.99, description2, "images/product2.jpg");
addProduct("Retro Mask", 12.99, description3, "images/product3.jpg");
addProduct("Watercolor Mask", 10.99, description4, "images/product4.jpg");

function fillProducts(products) {
	const container = document.getElementById("products");
	container.innerHTML = "";

	products.forEach((product, index) => {
		let html = `
		<section id="p${index}" class="pclass">
			<div>
				<h2>${product.name}</h2>
				<h3>$${product.price}</h3>
				<div class="image-and-text">
					<img src="${product.image_url}" alt="${product.name}">
					<p>${product.description}</p>
				</div>
				<button class="button_add" onclick="addToCart('${product.name}', '${product.price}')" type="button">Add to cart</button>
				<button class="button_delete" onclick="deleteProduct('${product.name}')" type="button">Delete</button>
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

function fillCart() {
	const container = document.getElementById("my-cart");
	container.innerHTML = "";

	let innerHTML = "<table>";
	innerHTML += "<tr><th>Product</th><th>Price</th></tr>";

	my_cart.forEach((product) => {
		let html = `
		<tr>
			<td>${product.name}</td>
			<td>$${product.price}</td>
		</tr>`;
		innerHTML += html;
	});

	innerHTML += "</table>";

	container.innerHTML = innerHTML;
}

function addToCart(name, price) {
	let product = {
		name,
		price
	}
	my_cart.push(product);
	fillCart();
}

addToCart("Bottle of water", 4.99);
addToCart("Pack of chocolate chips", 7.99);
addToCart("Bag of cookies", 11.99);

function deleteProduct(name) {
	if (confirm("Are you sure?")) {
		products = products.filter((p) => p.name != name);
		fillProducts(products);
	}
}

function sortProducts() {
	var element = document.getElementById("select_sort");
	var selectedValue = element.value; 

	if (selectedValue == "nameasc") {
		// sort by name asc
		products.sort((a, b) => {
			let prod1 = a.name.toUpperCase();
			let prod2 = b.name.toUpperCase();

			if (prod1 < prod2) {
				return -1;
			}

			if (prod1 > prod2) {
				return 1;
			}

			return 0;
		});
	} else if (selectedValue == "namedesc") {
		// sort by name desc
		products.sort((a, b) => {
			let prod1 = a.name.toUpperCase();
			let prod2 = b.name.toUpperCase();

			if (prod1 > prod2) {
				return -1;
			}

			if (prod1 < prod2) {
				return 1;
			}

			return 0;
		});
	} else if (selectedValue == "priceasc") {
		// sort by price asc
		products.sort((a, b) => {
		  	return a.price - b.price;
		});
	} else if (selectedValue == "pricedesc") {
		// sort by price desc
		products.sort((a, b) => {
			return b.price - a.price;
		});
	} 

	fillProducts(products);
}


// Sample products data with image URLs
const products = [
{ name: "Sticker Set", category: "Stickers", price: "$10", image:["products/stickers/1.jpg","products/stickers/2.jpg","products/stickers/3.jpg"] },
{ name: "Poster Print", category: "Posters", price: "$20", image: ["products/posters/1.PNG","products/posters/2.PNG","products/posters/3.PNG"] },
{ name: "Graphic Tee", category: "Shirts", price: "$25", image: ["products/shirts/3.JPEG","products/shirts/2.PNG","products/shirts/1.PNG"] },
{ name: "Hoodie", category: "Hoodies", price: "$35", image: ["products/hoodie/1.JPEG","products/hoodie/2.JPEG","products/hoodie/3.JPEG"] },
{ name: "Custom Logo Design", category: "Logos", price: "Contact for price", image: "images/logo.jpg" },
{ name: "Digital Marketing Package", category: "Digital Marketing", price: "Contact for price", image: "images/digital-marketing.jpg" }
];

// Function to render products
function renderProducts(products) {
const productsContainer = document.getElementById("products");
productsContainer.innerHTML = "";

products.forEach(product => {
const productCard = document.createElement("div");
productCard.classList.add("product-card");

// Create an empty div to hold the images
const imageContainer = document.createElement("div");
imageContainer.classList.add("image-container");

// Loop through each image URL and create an <img> tag
product.image.forEach(imageUrl => {
    const productImage = document.createElement("img");
    productImage.src = imageUrl;
    productImage.alt = product.name;
    productImage.classList.add("product-image");
    imageContainer.appendChild(productImage);
});

// Append the image container to the product card
productCard.appendChild(imageContainer);

// Add other product information
productCard.innerHTML += `
    <h2>${product.name}</h2>
    <p>Category: ${product.category}</p>
    <p>Price: ${product.price}</p>
`;

// Append the product card to the products container
productsContainer.appendChild(productCard);
});
}

// Initial rendering of products
renderProducts(products);

// Search functionality
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
const searchTerm = searchInput.value.toLowerCase();
const filteredProducts = products.filter(product =>
product.name.toLowerCase().includes(searchTerm) || product.category.toLowerCase().includes(searchTerm)
);
renderProducts(filteredProducts);
});


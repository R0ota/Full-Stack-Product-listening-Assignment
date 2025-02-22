// Define the API URL where the products are hosted
const API_URL = "http://localhost:3000/api/products";

async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    const products = await response.json();

    displayProducts(products);
  } catch (error) {
    console.error(" Error fetching products:", error);
    document.getElementById("product-container").innerHTML =
      "<p>Failed to load products. Please try again.</p>";
  }
}

// Function to display products dynamically on the page
function displayProducts(products) {
  const productList = document.getElementById("product-container");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
    <img src="http://localhost:3000/images/${product.image}" alt="${product.name}">
    <div>
      <h2>${product.name}</h2>
      <p>$${product.price}</p>
    </div>
  `;

    productList.appendChild(productCard);
  });
}

fetchProducts();

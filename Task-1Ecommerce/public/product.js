const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

fetch("/api/products")
.then(res => res.json())
.then(products => {

    const product = products.find(p => p._id === productId);

    const container = document.getElementById("product");

    container.innerHTML = `
        <h2>${product.name}</h2>
        <p>Price: ₹${product.price}</p>
        <p>${product.description}</p>

        <button onclick="addToCart('${product._id}','${product.name}',${product.price})">
        Add To Cart
        </button>
    `;
});

function addToCart(id,name,price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        id:id,
        name:name,
        price:price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");

}
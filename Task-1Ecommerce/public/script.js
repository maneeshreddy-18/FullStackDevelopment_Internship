fetch("/api/products")
.then(res => res.json())
.then(products => {

    const container = document.getElementById("products");

    products.forEach(product => {

        const div = document.createElement("div");
        div.className = "product";

        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button onclick="viewProduct('${product._id}')">View Details</button>
        `;

        container.appendChild(div);

    });

});

function viewProduct(id){
    window.location.href = "product.html?id=" + id;
}
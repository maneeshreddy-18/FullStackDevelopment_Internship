let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cartItems");

cart.forEach(item => {

    const div = document.createElement("div");

    div.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: ₹${item.price}</p>
    `;

    container.appendChild(div);

});
function placeOrder(){

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    fetch("/api/orders",{

        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            items:cart,
            total:cart.reduce((sum,item)=>sum+item.price,0)
        })

    })
    .then(res=>res.json())
    .then(data=>{

        alert("Order placed successfully!");

        localStorage.removeItem("cart");

    });

}
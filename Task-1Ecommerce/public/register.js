function register(){

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("/api/users/register",{

        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({
            username,
            email,
            password
        })

    })
    .then(res=>res.json())
    .then(data=>{
        alert(data.message);
    });

}
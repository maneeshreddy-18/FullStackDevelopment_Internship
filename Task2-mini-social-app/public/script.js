let currentUser = JSON.parse(localStorage.getItem("user"))

async function register(){

const username=document.getElementById("regUser").value
const password=document.getElementById("regPass").value

await fetch("/register",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username,password})
})

alert("Registration successful")

window.location="login.html"

}

async function login(){

const username=document.getElementById("loginUser").value
const password=document.getElementById("loginPass").value

const res=await fetch("/login",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username,password})
})

const data=await res.json()

if(data.id){

localStorage.setItem("user",JSON.stringify(data))

alert("Login successful")

window.location="feed.html"

}else{

alert("Invalid login")

}

}

async function createPost(){

const content=document.getElementById("content").value

await fetch("/post",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
userId:currentUser.id,
content
})
})

alert("Post created")

window.location="feed.html"

}

async function loadPosts(){

const res=await fetch("/posts")

const data=await res.json()

const container=document.getElementById("posts")

container.innerHTML=""

data.posts.forEach(post=>{

let html=`<div class="post">

<p>${post.content}</p>

<p>❤️ Likes: ${post.likes.length}</p>

<button onclick="likePost(${post.id})">Like</button>

<br><br>

<input id="c${post.id}" placeholder="Write comment">

<button onclick="comment(${post.id})">Comment</button>

`

const comments=data.comments.filter(c=>c.postId==post.id)

comments.forEach(c=>{
html+=`<p class="comment">💬 ${c.text}</p>`
})

html+="</div>"

container.innerHTML+=html

})

}

async function likePost(postId){

await fetch("/like",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
postId,
userId:currentUser.id
})
})

loadPosts()

}

async function comment(postId){

const text=document.getElementById("c"+postId).value

await fetch("/comment",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
postId,
userId:currentUser.id,
text
})
})

loadPosts()

}
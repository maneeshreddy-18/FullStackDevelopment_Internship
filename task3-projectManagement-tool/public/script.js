let user=JSON.parse(localStorage.getItem("user"))

function getProjectId(){
const params=new URLSearchParams(window.location.search)
return params.get("id")
}

async function register(){

const username=document.getElementById("regUser").value
const password=document.getElementById("regPass").value

await fetch("/register",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username,password})
})

alert("Registered")

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

window.location="dashboard.html"

}else{

alert("Invalid login")

}

}

async function createProject(){

const name=document.getElementById("projectName").value

await fetch("/project",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
name,
ownerId:user.id
})
})

loadProjects()

}

async function loadProjects(){

const res=await fetch("/projects")

const projects=await res.json()

const container=document.getElementById("projects")

if(!container) return

container.innerHTML=""

projects.forEach(p=>{

container.innerHTML+=`
<div class="card">
<h3>${p.name}</h3>
<a href="project.html?id=${p.id}">
<button>Open</button>
</a>
</div>
`

})

}

async function createTask(){

const title=document.getElementById("taskTitle").value
const projectId=getProjectId()

await fetch("/task",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
projectId,
title,
assignedTo:user.id
})
})

loadTasks()

}

async function loadTasks(){

const projectId=getProjectId()

const res=await fetch("/tasks/"+projectId)

const tasks=await res.json()

const container=document.getElementById("tasks")

if(!container) return

container.innerHTML=""

tasks.forEach(t=>{

container.innerHTML+=`

<div class="card">

<h3>${t.title}</h3>

<p>Status: ${t.status}</p>

<select onchange="updateStatus(${t.id},this.value)">
<option value="Pending">Pending</option>
<option value="In Progress">In Progress</option>
<option value="Completed">Completed</option>
</select>

<br><br>

<input id="comment${t.id}" placeholder="Write comment">

<button onclick="addComment(${t.id})">Comment</button>

<div id="comments${t.id}"></div>

</div>

`

loadComments(t.id)

})

}

async function updateStatus(taskId,status){

await fetch("/updateTask",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
taskId,
status
})
})

loadTasks()

}

async function addComment(taskId){

const text=document.getElementById("comment"+taskId).value

await fetch("/comment",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
taskId,
userId:user.id,
text
})
})

loadComments(taskId)

}

async function loadComments(taskId){

const res=await fetch("/comments/"+taskId)

const comments=await res.json()

const container=document.getElementById("comments"+taskId)

container.innerHTML=""

comments.forEach(c=>{

container.innerHTML+=`
<p>💬 ${c.text}</p>
`

})

}

loadProjects()
loadTasks()
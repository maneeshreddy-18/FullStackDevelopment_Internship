const express=require("express")
const cors=require("cors")
const fs=require("fs")

const app=express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

const DATA_FILE="./database/data.json"

function readData(){
return JSON.parse(fs.readFileSync(DATA_FILE))
}

function writeData(data){
fs.writeFileSync(DATA_FILE,JSON.stringify(data,null,2))
}

//////// REGISTER

app.post("/register",(req,res)=>{

const {username,password}=req.body

const data=readData()

const user={
id:Date.now(),
username,
password
}

data.users.push(user)

writeData(data)

res.json(user)

})

//////// LOGIN

app.post("/login",(req,res)=>{

const {username,password}=req.body

const data=readData()

const user=data.users.find(
u=>u.username==username && u.password==password
)

if(user){
res.json(user)
}else{
res.json({message:"Invalid login"})
}

})

//////// CREATE PROJECT

app.post("/project",(req,res)=>{

const {name,ownerId}=req.body

const data=readData()

const project={
id:Date.now(),
name,
ownerId
}

data.projects.push(project)

writeData(data)

res.json(project)

})

//////// GET PROJECTS

app.get("/projects",(req,res)=>{

const data=readData()

res.json(data.projects)

})

//////// CREATE TASK

app.post("/task",(req,res)=>{

const {projectId,title,assignedTo}=req.body

const data=readData()

const task={
id:Date.now(),
projectId,
title,
assignedTo,
status:"Pending"
}

data.tasks.push(task)

writeData(data)

res.json(task)

})

//////// GET TASKS

app.get("/tasks/:projectId",(req,res)=>{

const data=readData()

const tasks=data.tasks.filter(
t=>t.projectId==req.params.projectId
)

res.json(tasks)

})

//////// UPDATE TASK STATUS

app.post("/updateTask",(req,res)=>{

const {taskId,status}=req.body

const data=readData()

const task=data.tasks.find(t=>t.id==taskId)

if(task){
task.status=status
writeData(data)
res.json(task)
}else{
res.json({message:"Task not found"})
}

})

//////// ADD COMMENT

app.post("/comment",(req,res)=>{

const {taskId,userId,text}=req.body

const data=readData()

const comment={
id:Date.now(),
taskId,
userId,
text
}

data.comments.push(comment)

writeData(data)

res.json(comment)

})

//////// GET COMMENTS

app.get("/comments/:taskId",(req,res)=>{

const data=readData()

const comments=data.comments.filter(
c=>c.taskId==req.params.taskId
)

res.json(comments)

})

app.listen(3000,()=>{
console.log("Server running at http://localhost:3000")
})
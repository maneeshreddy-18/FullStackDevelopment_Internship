const express = require("express")
const cors = require("cors")
const fs = require("fs")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

const DATA_FILE = "./database/data.json"

function readData(){
    return JSON.parse(fs.readFileSync(DATA_FILE))
}

function writeData(data){
    fs.writeFileSync(DATA_FILE, JSON.stringify(data,null,2))
}

//////////////// REGISTER //////////////////

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

//////////////// LOGIN //////////////////

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

//////////////// CREATE POST //////////////////

app.post("/post",(req,res)=>{

const {userId,content}=req.body

const data=readData()

const post={
id:Date.now(),
userId,
content,
likes:[]
}

data.posts.push(post)

writeData(data)

res.json(post)

})

//////////////// GET POSTS //////////////////

app.get("/posts",(req,res)=>{

const data=readData()

res.json({
posts:data.posts,
comments:data.comments
})

})

//////////////// LIKE //////////////////

app.post("/like",(req,res)=>{

const {postId,userId}=req.body

const data=readData()

const post=data.posts.find(p=>p.id==postId)

if(!post.likes.includes(userId)){
post.likes.push(userId)
}

writeData(data)

res.json(post)

})

//////////////// COMMENT //////////////////

app.post("/comment",(req,res)=>{

const {postId,userId,text}=req.body

const data=readData()

const comment={
id:Date.now(),
postId,
userId,
text
}

data.comments.push(comment)

writeData(data)

res.json(comment)

})

//////////////// FOLLOW //////////////////

app.post("/follow",(req,res)=>{

const {followerId,followingId}=req.body

const data=readData()

data.followers.push({
followerId,
followingId
})

writeData(data)

res.json({message:"Followed successfully"})

})

app.listen(3000,()=>{
console.log("Server running at http://localhost:3000")
})
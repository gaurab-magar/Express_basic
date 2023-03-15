const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))

PORT = 3000
let users= ['ram','shyam']

app.get('/users',(req, res)=> {
  res.send(users)
})


// 127.0.0.1:3000/add_user?name=sagar
console.log("gaurab magar")

app.get('/add_user',(req, res)=> {
  if(req.query.name){
    users.push(req.query.name)
    res.send("user added")
  }else{
    res.send("please provide name")
  }
})

app.post('/add_post',(req, res)=> {
  if(req.body.name){
    users.push(req.body.name)
    res.send(" added name")
  }else{
    res.send('please provide name')
  }
})

app.get('/del_user',(req, res)=> {
  if(req.query.name){
    users=users.filter((user)=>{
      return user !== req.query.name
    })
    res.send("user deleted")
  }else{
    res.send("please provide name")
  }
})

app.listen(PORT,()=>{
  console.log(`server is runnning pn port ${PORT}`)
})

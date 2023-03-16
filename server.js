const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))
const uuidv4 = require('uuid').v4


PORT = 3000
let users= [
  {
    name:"user1",
    id: uuidv4(),
    email:"user1@gmail.com"
  },
  {
    name:"user2",
    id: uuidv4(),
    email:"user2@gmail.com"
  }
]
let categories= [
  {
    id: uuidv4(),
    type:"horror"
  },
  {
    id: uuidv4(),
    type:"funny"
  }
]

app.get('/users',(req, res)=> {
  res.send(users)
})

app.post('/add_post',(req, res)=> {
  if(req.body.name && req.body.email){
      users.push({
        id: uuidv4(),
        name: req.body.name,
        email: req.body.email
    })
    res.send(" added name")
  }else{
    res.send('please provide name')
  }
})

app.get('/del_user',(req, res)=> {
  if(req.query.id){
    users=users.filter((user)=>{
      return user.id !== req.query.id
    })
    res.send("user deleted")
  }else{
    res.send("please provide name")
  }
})


app.get('/categories',(req,res)=>{
    res.send(categories)
})

app.get('/add_categories',(req,res)=>{
    if(req.query.type){
        categories.push({
          id:uuidv4(),
          type: req.body.type
        })
        res.send('categories added')
    }else{
        res.send('please provide categories')
    }
})

app.get('/delete_user',(req,res)=>{
    if(req.query.id){
        categories = categories.filter((category)=>{
            return category.id !== req.query.id
        })
        res.send('category deleted')
    }else{
        res.send('please provide categry')
    }
})

app.listen(PORT,()=>{
  console.log(`server is runnning On port ${PORT}`)
})
console.log(uuidv4())
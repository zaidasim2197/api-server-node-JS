import express from 'express'
const app = express()
const port = process.env.PORT || 3000;

let todos=[];

app.use(express.json{})
app.post('/todo', (req, res) => {
   todos.push( req.body.text);
  res.send({
    message: "Your Todo is saved;",
    data: todos
  })
})

app.get('/todos', (req, res) => {
    
  res.send({
    message: "Here is your todo List",
    data:todos
  })
})
app.get('/water', (req, res) => {
    console.log("Here is your water" )
  res.send('Here is your water')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
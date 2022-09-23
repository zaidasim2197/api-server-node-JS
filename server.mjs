import express from 'express'
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    console.log("Hello World From Zaid Computer" )
  res.send('Hello World From Zaid Computer!')
  res.links({
    Github: 'https://github.com/zaidasim2197'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
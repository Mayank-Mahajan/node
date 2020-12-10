const express = require('express')
const app = express()
const port = 3000
app.set ('view engine','ejs')

const checkUrl=function(req, res, next){
  console.log("current route is ",req.url)
  next();
}
app.use(checkUrl);



app.get('/', (req, res) => {
  res.render('index.ejs');
})

app.get('/contact', (req, res) => {
  
  res.render('contact.ejs');
})

app.get('/pricing', (req, res) => {

  res.render('pricing.ejs');
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
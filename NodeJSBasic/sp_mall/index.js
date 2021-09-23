const express = require('express')
// const goodsRouter = require('./routes/goods.js');
// const userRouter = require('./routes/user.js');
// const detailRouter = require('./routes/detail.js');
const goodsRouter = require("./routers/goods.js");
const connect = require("./schemas/index.js");

const app = express()
const port = 3000

connect();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({
  extended: false
}))
app.use(express.json())
app.use(express.static('public'));

// app.use('/goods', goodsRouter);
// app.use('/user', userRouter);
// app.use('/detail', detailRouter);
app.use("/api", [goodsRouter]);


app.get('/', (req, res) => {
  res.render('index');
})

// app.get('/test', (req, res) => {
//   let asd = req.query.name;
//   res.render('test', {
//     name: asd
//   });
// })

app.get('/home', (req, res) => {
  res.render('index');
})

app.get('/goods', (req, res) => {
  res.render('index');
})

app.get("/cart", (req, res) => {
  res.render("cart");
});

app.get("/detail", (req, res) => {
  res.render("detail");
});

app.get('/order', (req,res)=>{
  res.render('order');
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
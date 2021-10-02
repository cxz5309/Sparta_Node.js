const express = require('express');

const app = express();
const port = 8080;

app.get('/api', (req, res)=>{
  res.send("hi");
})

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
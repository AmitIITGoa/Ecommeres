const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dotenv =  require('dotenv');
const auth = require('./routes/auth');
const user = require('./routes/user');
const  prd =  require('./routes/product');
const  cart =  require('./routes/cart');
const  order =  require('./routes/order');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000'
  }));

  const port =  process.env.PORT || 5000;

dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
    console.log("Hello World!");
    res.sendFile(__dirname + '/index.html');
});

mongoose.connect(process.env.mongodb_url)   //  to make a url safe  we  put it in the env  file for  security  

.then (() => {
    console.log("conneted");
});

app.get("/api/test" , (req, res) => {
    res.send("  you  are  come to  the test  side ");
});

app.use("/auth" , auth) ;

app.use("/user" , user) ;
app.use("/product" , prd ) ;
app.use("/cart" , cart) ;
app.use("/order" , order) ;

 




app.listen(port, () => {
    console.log("Server running on port", port);
});

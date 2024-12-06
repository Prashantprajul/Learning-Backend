const express=require('express');
const app=express();
const bodyParser=require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    res.send(`<form action='/product' method="POST">
        <input type="text" name='title'>
        <button type="submit"> Add-Product</button>
        </form>`)
})

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    res.send('<h1> Hello from server</h1>');
})

app.listen(3000,()=>{
    console.log("server is running");
})
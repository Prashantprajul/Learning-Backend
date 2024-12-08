const express=require('express');
const app=express();
const path=require('path');
const bodyParser=require('body-parser');

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');


app.use(express.static(path.join(__dirname,'public')))//Here we have added the public folder which can be easily accessed in html files
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);//by his we can filter path (means the path having /admin will enter this file)
app.use(shopRoutes);
app.use((req,res)=>{

res.sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(3000,()=>{ 
    console.log("server is running");
})
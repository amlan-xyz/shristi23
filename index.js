const express=require('express');
const mongoose=require('mongoose')
const path=require('path')
const ejsMate=require('ejs-mate')

const app=express();

app.use(express.json());
app.use(express.urlencoded({
	extended:true,
}))

app.engine('ejs',ejsMate);
app.set('view engine','ejs')

// path
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
	res.render('index')
})
// app.all('*',(req,res,next)=>{
// 	next(new ExpressError('Page Not Found',404));
// })


app.listen(3000,()=>{
	console.log("Listening to port 3000");
})
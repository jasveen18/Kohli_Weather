const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

const static_path = path.join(__dirname, "../public"); //absolute path of static pages.
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set("views", template_path);
hbs.registerPartials(partials_path);


app.use(express.static(static_path));

//routing
app.get("/" , (req,res)=>{
      res.render('index');
})

app.get("/about" , (req,res)=>{
    res.render('about');
})

app.get("/weather" , (req,res)=>{
    res.render('weather');
})

// app.get("*" , (req,res)=>{
//     res.send('404page', {
//           errorMsg: "Oops! Page not found, Click Here to go"
//     });
// })

app.listen(2000, ()=>{
    console.log(`listening to port 2000`);
})
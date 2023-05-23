const express = require("express")
const app = express()
const path = require('path')
const hbs = require('hbs')

// require("./db/conn")
const port =process.env.PORT||3000;
const staticpath = path.join(__dirname, "../public")
const templatepath = path.join(__dirname, "../templates/views")
const partialspath = path.join(__dirname, "../templates/partials")

app.use(express.static(staticpath))
app.set("view engine", "hbs")
hbs.registerPartials( partialspath)
app.set("views", templatepath)
// // app.set("views",template_path)
app.get("/home", (req, res) => {
    res.render('index')
})
// app.get("/", (req, res) => {
//     res.send('index')
// })
app.get("/about", (req, res) => {
    res.render('about')
})
app.get("/weather", (req, res) => {
    res.render('weather')
})

app.get("*", (req, res) => {
    res.render('error')
})
app.listen(port, () => {
    console.log(`the website is succesfully serving on port number ${port}`);
})
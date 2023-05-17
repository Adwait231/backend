const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const cors = require("cors");
require("./db/conn");

const Register = require("./models/registers");
const Booking = require("./models/bookings");
const Contact = require("./models/contacts");
const Search = require("./models/searches");
const { request } = require("http");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin : ["http://localhost:3000", "https://indian-cuisine.onrender.com"]
}));

app.use(express.static(static_path))
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/register", (req, res) => {
    res.render("register");
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/api", (req, res) => {
    res.render("api");
})
app.get("/contact", (req, res) => {
    res.render("contact");
})
app.get("/login", (req, res) => {
    res.render("login");
})
app.get("/menu", (req, res) => {
    res.render("menu");
})
app.get("/api", (req, res) => {
    res.render("api");
})
app.get("/booking", (req, res) => {
    res.render("booking");
})
app.get("/search", (req, res) => {
    res.render("nutrition");
})

app.post("/register", async(req, res) => {
    try{
        const registerEmployee = new Register({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            phone : req.body.phone,
            password : req.body.password
        })

        const registered = await registerEmployee.save();
        res.status(201).render("index");
    } catch (error){
        res.status(400).send(error);
    }
})

app.get("/search/:key", async(req, res) => {
    const key = request.params.key;
    const api_url = `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${key}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
})


app.post("/booking", async(req, res) => {
    try{
        const booktable = new Booking({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            tableType : req.body.tableType,
            guestNumber : req.body.guestNumber,
            placement : req.body.placement,
            bookdate : req.body.bookdate,
            time : req.body.time,
            note : req.body.note
        })

        const booked = await booktable.save();
        res.status(201).render("index");
    } catch (error){
        res.status(400).send(error);
    }
})

app.post("/contact", async(req, res) => {
    try{
        const contactUs = new Contact({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            subject : req.body.subject,
            message : req.body.message
        })

        const contacted = await contactUs.save();
        res.status(201).render("index");
    } catch (error){
        res.status(400).send(error);
    }
})

app.listen(port, ()=> {
    console.log(`Server running at port ${port}`);
})
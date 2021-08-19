const http = require('http');
const express = require('express');
const cors = require('cors');
// const port = process.env.PORT || 80;
const port = 3000 // localhost:3000
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/static', express.static('public')); 

app.listen(port, () => console.log(`Server up and running on port ${port}.`));

const db = require("./models");
const User = db.User;
const Form = db.Form;

app.get("/", async (req, res) => {

  // const _user = await User.create({
  // email: "${Math.random()}_heonsub6558@gmail.com",
  // password: "sseop",
  // firstName: "Heonseop",
  // lastName: "Noh",
  // height: 169
  // })

  // const form = await Form.create({
  //   userId: 4,
  //   title: "ahha"
  // })

  const user = await User.findOne({
    include: Form,
    order : [ [ 'createdAt', 'DESC' ] ],
  })
  
  res.json({ message: "Welcome to our application.", user: user});
});

app.get("/courses", async (req, res) => {
  // const courses = await db.Course.findAll({})
  // res.json({ message: "Welcome to our application.", courses:  courses});
});

app.post("/courses", async (req, res) => {
  res.json({ message: "Welcome to our application."});

});
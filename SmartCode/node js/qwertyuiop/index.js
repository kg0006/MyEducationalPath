const express = require("express");
const router = require("./Routes/index");
const { readError } = require("./middleware/readFile");
const GetServices = require("./services/GetServices");

const app = express();

app.locals.services = {
  get: new GetServices(),
};

app.use(express.json());
app.use(express.static("pages"));

app.use("/", router);

app.use("/users", router);

app.use("/users/:id", router);
//app.use("/login", router);

app.all("*", readError, (req, res) => {
  res.status(400).send(res.locals.err);
});

app.listen(3200, (err) => {
  if (err) console.log(err);
  else console.log("Server is running on 3200 port!");
});

//////////////////

// Registration
// user = {id : 1, name : "Alex", email : "alex@gmail.com", age : 18, role : user, gender : "male"}
// age >= 18 || age <= 65
// name = Alex
// email = '@'
//
// Login
//
//1. /
// կվերադարձնի փաստաթուղթ
//2. /api/users
// կվերադարձնի բոլոր user-րին
//3. /api/users/1
// կվերադարձնի մեկ user-ի
//4. /api/users?name=value
// Դասավորված տվյալներ
//5. /api/users?sort=min || sort=max
// Դասավորված տվյալներ
//////// POST
//6. /api/users METHOD POST
/////// PATCH
//7. /api/users/id
////// DELETE
//8. /api/users/id
// Մնացած բոլոր URL-երի դեպքում
// Error HTML

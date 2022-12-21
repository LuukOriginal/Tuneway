// const Express = require("express")
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const Cors = require("cors")
// const bodyParser = require("body-parser")

// const App = Express()
// const Port = 3001

// App.use(Cors())

// App.use(bodyParser.urlencoded({
//   extended: true
// }));
// App.use(bodyParser.json());

// App.post("/register", (req, res) => {
//   bcrypt
//     .hash(req.body.password, 10)
//     .then((hashedPassword) => {
//       const user = new User({
//         email: req.body.email,
//         password: hashedPassword,
//       });

//       user
//         .save()
//         .then((result) => {
//           res.status(201).send({
//             message: "User Created Successfully",
//             result,
//           });
//         })

//         .catch((error) => {
//           res.status(500).send({
//             message: "Error creating user",
//             error,
//           });
//         });
//     })
//     .catch((e) => {
//       res.status(500).send({
//         message: "Password was not hashed successfully",
//         e,
//       });
//     });
// });

// App.post("/login", (req, res) => {
//   User.findOne({ email: req.body.email })
//     .then((user) => {
//       bcrypt
//         .compare(req.body.password, user.password)
//         .then((passwordCheck) => {

//           if(!passwordCheck) {
//             return res.status(400).send({
//               message: "Passwords does not match",
//               error,
//             });
//           }

//           const token = jwt.sign(
//             {
//               userId: user._id,
//               userEmail: user.email,
//             },
//             "RANDOM-TOKEN",
//             { expiresIn: "24h" }
//           );

//           res.status(200).send({
//             message: "Login Successful",
//             email: user.email,
//             token,
//           });
//         })

//         .catch((error) => {
//           res.status(400).send({
//             message: "Passwords does not match",
//             error,
//           });
//         });
//     })

//     .catch((e) => {
//       res.status(404).send({
//         message: "Email not found",
//         e,
//       });
//     });
// });

// const dbConnect = require("./db/dbConnect");
// const User = require("./db/userModel");

// dbConnect();

// App.listen(Port, () => {
//     console.log("Api is running on http://localhost:3001")
// })

const port = 3001

const app = require("./src/config/express.config.js")
// listen to requests
app.listen(port, (err) => {
	if (err) {
		// return logger.error('server failed to start', err);
		return console.warn('server failed to start', err)
	}
	return console.log(`server started [port] = [${port}]`);
});
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

require("dotenv").config();

// Create a new express application
const app = express();

// Use the bodyParser middleware to parse JSON request bodies
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// app.use(
//   cors({
//     origin: {"http://MERN-Portfolio.vercel.app"},
//     methods: {"POST", "GET"},
//     credentials: true
//   })
// );

// testing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Define a route for sending an email
app.post("/send", (req, res) => {
  console.log(req.body);
  const { name, email, subject, message } = req.body;

  // Create a transporter object for Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Define the email message
  const mailOptions = {
    from: "Message from Portfolio",
    to: process.env.EMAIL_USER,
    subject: subject,
    html: `
    <p>You have a message from your Portfolio,</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email id:</strong> ${email}</p>
    <p><strong>Message:</strong> <span style="font-size: 16px; color:FF0000;">${message}</span></p>
  `,
  };

  // Use the transporter object to send the email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start the express server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});

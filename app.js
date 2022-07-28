require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const passport = require("passport");
const db = require("./database/db");
const router = require("./routes/router");
const NotFoundError = require("./errors/notFoundError");
const userLocalStrategy = require("./authentication/localStrategy");
const userJwtStrategy = require("./authentication/jwtStartegy");

const app = express();
const port = process.env.PORT;

// Database connection
db.connect();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: true }));

// User
passport.use("login", userLocalStrategy());
passport.use("jwt", userJwtStrategy());

// Routes
app.use("/api", router);

// Unmatched routes handler
app.all('*', (req, res, next) => {
    next(new NotFoundError());
});

// Error handler
app.use((error, req, res, next) => {
    res.status(error.status || 500).json(error);
});

// Serving
app
    .listen(port, () => {
        console.log(`\x1b[32mserver is running on http://localhost:${port}\x1b[0m`);
    })
    .on("error", (error) => {
        console.log("\x1b[31mport " + error.port + " is already in use\x1b[0m");
    });
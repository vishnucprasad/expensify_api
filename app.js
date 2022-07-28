require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./database/db");
const router = require("./routes/router");

const app = express();
const port = process.env.PORT;

// Database Connection
db.connect();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: true }));

// Routers
app.use("/api", router);

// Error Handlers
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
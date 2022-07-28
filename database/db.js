const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const connect = () => {
    const mongoUri = `${process.env.MONGO_URI}/${process.env.DATABASE_NAME}`;
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    // Connecting to mongoose
    mongoose.connect(mongoUri, options);

    // Event on mongoose connected
    mongoose.connection.on("connected", () => {
        console.log(`\x1b[32mmongoose connected to ${mongoUri}\x1b[0m`);
    });

    // Event on mongoose connection error
    mongoose.connection.on("error", (err) => {
        console.log(`\x1b[31mmongoose connecton error : ${err}\x1b[0m`);
    });

    // Event on mongoose disconnected
    mongoose.connection.on("disconnected", (err) => {
        console.log("\x1b[31mmongoose disconnected\x1b[0m");
    });

    // Event on termination signal
    process.on("SIGINT", () => {
        // Closing mongoose connection
        mongoose.connection.close(() => {
            console.log("\x1b[31mmongoose disconnected through app termination\x1b[0m");
            process.exit(0);
        });
    });
};

module.exports = { connect };
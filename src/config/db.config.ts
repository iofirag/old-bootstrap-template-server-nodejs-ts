import * as mongoose from 'mongoose';
import { DbConnectionStr } from './../utils/consts';

//configuring connection to mongoLab
// mongoose.set('useCreateIndex', true)
const connection: Promise<typeof mongoose> = mongoose.connect(DbConnectionStr, {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Save connection object
const conn: mongoose.Connection = mongoose.connection;
// Mongoose error message output
conn.on("error", console.error.bind(console, "connection error:"));
// Once a connection is initiated - do the following
conn.once("open", () => {
  console.log("DB connected");
});

// When the node process is terminated (Ctrl+c is pressed) , close the connection to the DB.
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log("Mongoose disconnected on app termination");
    process.exit(0);
  });
});

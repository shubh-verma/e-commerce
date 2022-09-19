const app = require("./app");

const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

//Handling Uncaught Exception

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server due to uncaught exception`);
  process.exit(1);
});

// config
dotenv.config({ path: "backend/config/config.env" });

//connecting to Database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promis Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server due to unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});

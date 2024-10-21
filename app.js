import express from "express";
import path from "path";
import indexRouter from "./routes/indexRouter.js";

const app = express();
const PORT = 8080;
const __dirname = import.meta.dirname;

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});

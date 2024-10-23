import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  const messages = req.app.locals.messages;
  res.render("index", { title: "Mini Message Board", messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form", { title: "Mini Message Board" });
});

indexRouter.post("/new", (req, res) => {
  req.app.locals.messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

export default indexRouter;

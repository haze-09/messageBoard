import { getMessages, postMessage } from "../db/queries.js";

export const indexGet = async (req, res) => {
  let messages = await getMessages();
  res.render("index", { title: "Mini Message Board", messages: messages });
};

export const indexNewGet = (req, res) => {
  res.render("form", { title: "Mini Message Board" });
};

export const indexNewPost = async (req, res) => {
  const {name,text} = req.body;
  await postMessage(name,text);
  res.redirect("/");
};

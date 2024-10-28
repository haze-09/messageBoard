export const indexGet = (req, res) => {
  res.render("index", { title: "Mini Message Board" });
};

export const indexNewGet = (req, res) => {
  res.render("form", { title: "Mini Message Board" });
};

export const indexNewPost = (req, res) => {
  res.redirect("/");
};

const index = (req, res) => {
  res.render("index", {
    title: "nunjucks index",
    message: "처음으로",
  });
};
const about = (req, res) => {
  res.render("about", {
    title: "nunjucks about",
    message: "소개",
  });
};
const customer = (req, res) => {
  res.render("cs", {
    title: "customer center",
    message: "고객센터",
  });
};
module.exports = {
  index,
  about,
  customer,
};

const homePageRouter = require("./homePage");
const usersRouter = require("./user");
const foodRouter = require("./food");
const adminRouter = require("./admin");
const wiki = require("./wiki.js");

function route(app) {
  app.use("/", homePageRouter);
  app.use("/user", usersRouter);
  app.use("/food", foodRouter);
  app.use("/admin", adminRouter);
  app.use('/wiki', wiki);

}

module.exports = route;

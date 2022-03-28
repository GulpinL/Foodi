const homePageRouter = require("./homePage");
const usersRouter = require("./users");
const foodRouter = require("./food");
const adminRouter = require("./admin");

function route(app) {
  app.use("/", homePageRouter);
  app.use("/users", usersRouter);
  app.use("/food", foodRouter);
  app.use("/admin", adminRouter);
}

module.exports = route;

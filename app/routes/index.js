const homePageRouter = require("./homePage");
const usersRouter = require("./user");
const foodRouter = require("./food");
const adminRouter = require("./admin");
const authenticationRouter=require("./authentication");

function route(app) {
  app.use("/", homePageRouter);
  app.use("/user", usersRouter);
  app.use("/food", foodRouter);
  app.use("/admin", adminRouter);
  app.use('/authentication', authenticationRouter);

}

module.exports = route;

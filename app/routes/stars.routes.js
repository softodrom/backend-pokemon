const controller = require("../controllers/stars.controller");

module.exports = function (app) {
  app.post("/addStar", controller.addStar);
  app.post("/test", controller.test);
};

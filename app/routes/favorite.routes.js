const controller = require("../controllers/favorite.controller");

// module.exports = function (app) {
//   app.get("/test", controller.Test);
// };
module.exports = function (app) {
  app.get("/getFavById", controller.getFavById);
  app.post("/addFavorite", controller.addFavorite);
};

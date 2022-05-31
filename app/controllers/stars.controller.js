const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.addStar = (req, res) => {
  User.update({ stars: 3 }, { where: { id: 1 } })
    .then(() => {
      res.send({ message: "User was registered successfully!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

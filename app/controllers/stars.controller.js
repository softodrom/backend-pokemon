const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.addStar = (req, res) => {
  User.update({ stars: 3 }, { where: { id: 1 } })
    .then(() => {
      res.send({ message: "Added stars!" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// exports.test = (req, res) => {
//   User.findOne({ where: { id: req.params.id } }).then(() => {
//     return User.increment("stars").catch((err) => {
//       res.status(500).send({ message: err.message });
//     });
//   });
// };

// User.increment('stars', {by: 1, where: { id: req.params.id }})

exports.test = async (req, res) => {
  let user = await User.findOne({where: { id: req.body.id}});
  // console.log(user.stars);
  User.update({ stars: user.stars + 1 }, { where: { id: req.body.id } }).then(() => {
    res.send({ message: "Added stars!" });
  }).catch((err) => {
    res.status(500).send({ message: err.message });
  });
};
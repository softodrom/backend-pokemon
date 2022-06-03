const db = require("../models");
const Favorite = db.favorite;

exports.addFavorite = async (req, res) => {
  console.log(req.body);

  let exists = await Favorite.count({
    where: { userId: req.body.userId, pokemonId: req.body.pokemonID },
  });

  if (exists === 0) {
    let created = await Favorite.create({
      pokemonID: req.body.pokemonID,
      userId: req.body.userId,
    });
    res.send({ status: 201, message: "pokemon added" });
  } else {
    Favorite.destroy({
      where: { userId: req.body.userId, pokemonId: req.body.pokemonID },
    });

    res.send({ status: 500, message: "pokemon deleted" });
  }
};

exports.getFavById = async (req, res) => {
  let favorites = await Favorite.findAll({ where: { userId: req.query.id } });
  console.log(req.query);
  res.send(favorites);
};

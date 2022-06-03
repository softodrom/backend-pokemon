module.exports = (sequelize, Sequelize) => {
  const Favorite = sequelize.define("favorites", {
    pokemonID: {
      type: Sequelize.INTEGER,
    },
  });
  return Favorite;

};

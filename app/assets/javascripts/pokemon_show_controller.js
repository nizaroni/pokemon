var PokemonShowController = function (pokemon) {
  this.pokemon = pokemon;
  this.$el = $("<p>");
};

PokemonShowController.prototype.render = function () {
  this.pokemon.fetch(this.render.bind(this));
  this.$el.html(this.pokemon.name);
  return this;
};

module.exports = PokemonShowController;

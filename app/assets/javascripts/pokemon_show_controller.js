var PokemonShowController = function (pokemon) {
  this.pokemon = pokemon;
  this.$el = $("<p>");
  this.pokemon.fetch(this.render.bind(this));
};

PokemonShowController.prototype.render = function () {
  this.$el.html(this.pokemon.name);
  return this;
};

module.exports = PokemonShowController;

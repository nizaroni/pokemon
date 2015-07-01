var PokemonShowView = function (pokemon) {
  this.pokemon = pokemon;
  this.$el = $("<p>");
};

PokemonShowView.prototype.render = function () {
  this.$el.html(this.pokemon.name);
  return this;
};

module.exports = PokemonShowView;

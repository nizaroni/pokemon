var PokemonItemView = require("./pokemon_item_view.js");

var PokedexView = function (pokedex) {
  this.pokedex = pokedex
  this.$el = $("<ul>").addClass("pokedex-list");
};

PokedexView.prototype.render = function () {
  var view = this;
  this.pokedex.pokemons.forEach(function (pokemon) {
    var pokemonView = new PokemonItemView(view.$el, pokemon);
    pokemonView.render();
  });

  return this;
};

module.exports = PokedexView;

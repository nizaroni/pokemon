var PokemonItemController = require("./pokemon_item_controller.js");

var PokedexController = function (pokedex) {
  this.pokedex = pokedex
  this.$el = $("<ul>").addClass("pokedex-list");
};

PokedexController.prototype.render = function () {
  var view = this;
  this.pokedex.pokemons.forEach(function (pokemon) {
    var pokemonView = new PokemonItemController(view.$el, pokemon);
    pokemonView.render();
  });

  return this;
};

module.exports = PokedexController;

var PokemonItemController = require("./pokemon_item_controller.js");

var PokedexController = function (router, pokedex) {
  this.pokedex = pokedex;
  this.$el = $("<ul>").addClass("pokedex-list");
  this.router = router;
};

PokedexController.prototype.render = function () {
  this.pokedex.fetchThemAll(this.render.bind(this));
  var view = this;
  this.pokedex.pokemons.forEach(function (pokemon) {
    var pokemonView = new PokemonItemController(view.$el, pokemon);
    pokemonView.render();
  });

  $("ul.pokedex-list").on("click", "a", function (event) {
    event.preventDefault();
    var pokemonId = $(event.currentTarget).attr("pokemon-id");
    view.router.go("pokemon-show/" + pokemonId);
  });

  return this;
};

module.exports = PokedexController;

var Pokedex = require("./models/pokedex.js");
var PokedexController = require("./pokedex_controller.js");
var PokemonShowController = require("./pokemon_show_controller.js");

var AppRouter = function (routes) {
  this.pokedex = new Pokedex();
  this.routes = routes;
  this.container;
};

AppRouter.prototype.go = function (route) {
  var regexRoute = /[\w-]+\//;
  var routeName = route.match(regexRoute)[0];
  var regexId = /\/(\d+)/;
  var id = route.match(regexId) == null ? null : parseInt(route.match(regexId)[1]);
  routeName = id ? routeName + ":id" : routeName;
  var methodToCall = this.routes[routeName];
  this[methodToCall](id);
};

AppRouter.prototype.renderPokedex = function () {
  var pokedexController = new PokedexController(this.pokedex);
  this.pokedex.fetchThemAll(pokedexController.render.bind(pokedexController));
  this.renderView(pokedexController);
  var self = this;
  $("ul.pokedex-list").on("click", "a", function (event) {
    event.preventDefault();
    var pokemonId = $(event.currentTarget).attr("pokemon-id");
    self.go("pokemon-show/" + pokemonId);
  });
}

AppRouter.prototype.renderPokemonShow = function (id) {
  var pokemon = this.pokedex.get(id);
  var pokemonShowController = new PokemonShowController(pokemon)
  pokemon.fetch(pokemonShowController.render.bind(pokemonShowController));
  this.renderView(pokemonShowController);
}

AppRouter.prototype.renderView = function (view) {
  this.container.empty();
  view.render();
  this.container.append(view.$el);
}

module.exports = new AppRouter({
  "pokedex/": "renderPokedex",
  "pokemon-show/:id": "renderPokemonShow"
});

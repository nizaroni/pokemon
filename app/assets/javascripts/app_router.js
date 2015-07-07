var PokedexController = require("./pokedex_controller.js");
var PokemonShowController = require("./pokemon_show_controller.js");
var Pokedex = require("./models/pokedex.js");

var AppRouter = function (routes) {
  this.pokedex = new Pokedex();
  this.routes = routes;
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
  var pokedexController = new PokedexController(this, this.pokedex);
  this.renderView(pokedexController);
}

AppRouter.prototype.renderPokemonShow = function (id) {
  var pokemon = this.pokedex.get(id);
  var pokemonShowController = new PokemonShowController(pokemon)
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

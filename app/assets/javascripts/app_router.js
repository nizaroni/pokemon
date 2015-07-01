var Pokedex = require("./models/pokedex.js");
var PokedexView = require("./pokedex_view.js");
var PokemonShowView = require("./pokemon_show_view.js");

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
  var pokedexView = new PokedexView(this.pokedex);
  this.pokedex.fetchThemAll(pokedexView.render.bind(pokedexView));
  this.renderView(pokedexView);
  var self = this;
  $("ul.pokedex-list").on("click", "a", function (event) {
    var pokemonId = $(event.currentTarget).attr("pokemon-id");
    self.renderPokemonShow(pokemonId);
  });
}

AppRouter.prototype.renderPokemonShow = function (id) {
  var pokemon = this.pokedex.get(id);
  var pokemonShowView = new PokemonShowView(pokemon)
  pokemon.fetch(pokemonShowView.render.bind(pokemonShowView));
  this.renderView(pokemonShowView);
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

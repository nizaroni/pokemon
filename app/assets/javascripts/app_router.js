var Pokedex = require("./models/pokedex.js");
var PokedexView = require("./pokedex_view.js");

var AppRouter = function ($element) {
  this.pokedex = new Pokedex();
  this.pokedex.fetchThemAll(this.renderPokedex.bind(this));
	this.$el = $element;
  this.renderPokedex();
};

AppRouter.prototype.renderPokedex = function () {
  var pokedexView = new PokedexView(this.pokedex);
  this.renderView(pokedexView);
}

AppRouter.prototype.renderView = function (view) {
  this.$el.empty();
  view.render();
  this.$el.append(view.$el);
}

module.exports = AppRouter;

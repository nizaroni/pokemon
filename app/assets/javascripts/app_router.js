(function () {

	window.PokeApi = window.PokeApi || {};

	var AppRouter = PokeApi.AppRouter = function ($element) {
    this.pokedex = new PokeApi.Pokedex();
    this.pokedex.fetchThemAll(this.renderPokedex.bind(this));
		this.$el = $element;
    this.renderPokedex();
	};

  AppRouter.prototype.renderPokedex = function () {
    var pokedexView = new PokeApi.Views.PokedexView(this.pokedex);
    this.renderView(pokedexView);
  }

  AppRouter.prototype.renderView = function (view) {
    this.$el.empty();
    view.render();
    this.$el.append(view.$el);
  }
})()

(function () {

	window.PokeApi = window.PokeApi || {};
  window.PokeApi.Views = window.PokeApi.Views || {};

	var PokedexView = PokeApi.Views.PokedexView = function ($parentEl) {
    this.pokedex = new PokeApi.Pokedex();
    this.pokedex.fetchThemAll();
    this.$parentEl = $parentEl;
    this.$el = $("<ul>");
	};

	PokedexView.prototype.render = function () {
    var view = this;
    this.pokedex.pokemons.forEach(function (pokemon) {
      var pokemonView = new PokeApi.Views.PokemonIndexView(view.$el, pokemon);
      pokemonView.render();
    });
    this.$parentEl.append(this.$el);

    return this;
	};
})()

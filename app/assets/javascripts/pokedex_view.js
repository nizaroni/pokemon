(function () {

	window.PokeApi = window.PokeApi || {};
  window.PokeApi.Views = window.PokeApi.Views || {};

	var PokedexView = PokeApi.Views.PokedexView = function (pokedex) {
    this.pokedex = pokedex
    this.$el = $("<ul>");
	};

	PokedexView.prototype.render = function () {
    var view = this;
    this.pokedex.pokemons.forEach(function (pokemon) {
      var pokemonView = new PokeApi.Views.PokemonIndexView(view.$el, pokemon);
      pokemonView.render();
    });

    return this;
	};
})()

(function () {

	window.PokeApi = window.PokeApi || {};
  window.PokeApi.Views = window.PokeApi.Views || {};

	var PokemonItemView = PokeApi.Views.PokemonItemView = function ($parentEl, pokemon) {
    this.$parentEl = $parentEl;
    this.pokemon = pokemon;
    this.$el = $("<li>");
	};

	PokemonItemView.prototype.render = function () {
    this.$el.html(this.pokemon.name);
    this.$parentEl.append(this.$el);

    return this;
	};
})()

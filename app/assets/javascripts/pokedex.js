(function () {

	window.PokeApi = window.PokeApi || {};

	var Pokedex = PokeApi.Pokedex = function () {
		this.url = "/api/pokedex/1";
    this.pokemons = [];
	};

	Pokedex.prototype.fetchThemAll = function () {
		var pokedex = this;
		$.ajax({
			url: this.url,
			method: "GET",
			success: function (pokedexInfo) {
        pokedexInfo.pokemon.forEach(function (pokeInfo){
          var pokemon = new PokeApi.Pokemon(pokeInfo);
          pokedex.pokemons.push(pokemon);
        });
			}
		});
	};
})()

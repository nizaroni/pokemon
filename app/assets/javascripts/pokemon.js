(function () {

	window.Pokedex = window.Pokedex || {};

	var Pokemon = Pokedex.Pokemon = function () {
		this.url = "/api/pokemon/";
	}

	Pokemon.prototype.fetch = function (id) {
		var pokemon = this;
		$.ajax({
			url: this.url + id,
			method: "GET",
			success: function (pokemonInfo) {
				$.extend(pokemon, pokemonInfo);
			}
		})
	}
})()
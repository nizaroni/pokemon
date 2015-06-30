var Pokemon = function (pokeInfo) {
	this.url = "/api/pokemon/";
	this.id = parseInt(pokeInfo.resource_uri.slice(15, -1));
	this.name = pokeInfo.name;
};

Pokemon.prototype.fetch = function () {
	var pokemon = this;
	$.ajax({
		url: this.url + this.id,
		method: "GET",
		success: function (pokemonInfo) {
			$.extend(pokemon, pokemonInfo);
		}
	});
};

module.exports = Pokemon;

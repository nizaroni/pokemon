var Pokemon = require("./pokemon.js");

var Pokedex = function () {
	this.url = "/api/pokedex/1";
  this.pokemons = [];
};

Pokedex.prototype.get = function (id, callback) {
	return this.pokemons.filter(function (pokemon) {
		return pokemon.id == id;
	})[0];
};

Pokedex.prototype.fetchThemAll = function (callback) {
	var pokedex = this;
	$.ajax({
		url: this.url,
		method: "GET",
		success: function (pokedexInfo) {
      pokedexInfo.pokemon.forEach(function (pokeInfo){
        var pokemon = new Pokemon(pokeInfo);
        pokedex.pokemons.push(pokemon);
      });
      callback();
		}
	});
};

module.exports = Pokedex;

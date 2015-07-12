var Pokemon = function (pokeInfo) {
  this.url = "/api/pokemon/";
  this.id = parseInt(pokeInfo.resource_uri.slice(15, -1));
  this.name = pokeInfo.name;
};

Pokemon.prototype.fetch = function (callback) {
  var pokemon = this;
  $.ajax({
    url: this.url + this.id,
    method: "GET",
    success: function (pokemonInfo) {
      $.extend(pokemon, pokemonInfo);
      pokemon.fetchSprite(pokemonInfo, pokemonInfo.sprites[0].resource_uri, callback);
    }
  });
};

Pokemon.prototype.fetchSprite = function(data, endpoint, callback) {
  spriteId = endpoint.split("/")[4];
  var pokemon = this;
  $.ajax({
    url: "/api/sprite/" + spriteId,
    success: function(sprite) {
      console.log("got sprite");
      pokemon.sprite = sprite;
      callback(pokemon);
    },
    error: function(err) {
      console.log(err);
    } 
  });
}

module.exports = Pokemon;

var PokemonShowController = function (router, pokemon) {
  this.pokemon = pokemon;
  this.router = router;
  this.$el = $("<div>", {class: "pokemon", html: ""});
};

PokemonShowController.prototype.setBackToListListener = function () {
  var controller = this;
  $("#back-to-list").on("click", function () {
    event.preventDefault();
    controller.router.go("pokedex/");
  });
}

PokemonShowController.prototype.render = function () {
  console.log("rendering pokemon");
  console.log(this.pokemon);
  var name = "<h2>" + this.pokemon.name + "</h2>";
  if (this.pokemon.species !== "") {
    var species = "<p>Species: " + this.pokemon.species + "</p>"
  } else {
    var species = "<p>Species: none </>";
  };
  if (this.pokemon.sprite) {
    var sprite = "<p><img src='http://pokeapi.co" + this.pokemon.sprite.image + "' alt='sprite'></p>";
  } else {
    var sprite = "";
  };
  var height = "<p>Height: " + this.pokemon.height + "</p>";
  var weight = "<p>Weight: " + this.pokemon.weight + "</p>";
  var indexLink = "<p><a href='javascript:void(0)' id='back-to-list'>Back to Index</a></p?>";
  var newHtml = sprite + name + species + height + weight + indexLink;
  this.$el.html(newHtml);
  this.setBackToListListener();

  return this;
};

module.exports = PokemonShowController;

var PokemonItemController = function ($parentEl, pokemon) {
  this.$parentEl = $parentEl;
  this.pokemon = pokemon;
  this.$el = $("<li>");
};

PokemonItemController.prototype.render = function () {
  this.$el.html("<a href='javascript:void(0)' pokemon-id='" + this.pokemon.id + "' >" + this.pokemon.name + "</a>");
  this.$parentEl.append(this.$el);


  return this;
};

module.exports = PokemonItemController;

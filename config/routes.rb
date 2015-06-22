Rails.application.routes.draw do
  root to: "static_pages#home"

  get "/pokedex", to: "static_pages#pokedex"

  get "/api/*uri", to: "pokemon_requests#forward"
end

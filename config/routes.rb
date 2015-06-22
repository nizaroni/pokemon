Rails.application.routes.draw do
  root to: "static_pages#home"

  get "/pokedex", to: "static_pages#pokedex"

  get "api/pokedex", to: "pokemon_requests#pokedex"
  get "api/pokemon/:pokemon_id", to: "pokemon_requests#pokemon"
  get "api/move/:move_id", to: "pokemon_requests#move"
end

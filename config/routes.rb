Rails.application.routes.draw do
  root to: "static_pages#home"

  get "/api/*uri", to: "pokemon_requests#forward"
end

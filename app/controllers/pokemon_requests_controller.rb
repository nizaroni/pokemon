require 'net/http'

class PokemonRequestsController < ApplicationController
	POKEMON_API_URL = "http://pokeapi.co/api/v1"

	def get_info(urlString)
		uri = URI.parse(urlString)
		response = Net::HTTP.get_response(uri)
		response.body
	end

	def pokedex
		urlString = "#{POKEMON_API_URL}/pokedex/"
		render json: get_info(urlString)
	end

	def pokemon
		urlString = "#{POKEMON_API_URL}/pokemon/#{params[:pokemon_id]}/"
		render json: get_info(urlString)
	end

	def move
		urlString = "#{POKEMON_API_URL}/move/#{params[:move_id]}/"
		render json: get_info(urlString)
	end
end

require 'net/http'

class PokemonRequestsController < ApplicationController
	POKEMON_API_URL = "http://pokeapi.co/api/v1"

	def get_info(url_string)
		uri = URI.parse(url_string)
		response = Net::HTTP.get_response(uri)
		response.body
	end

	def forward
		url_string = "#{POKEMON_API_URL}/#{params[:uri]}/"
		render json: get_info(url_string)
	end
end

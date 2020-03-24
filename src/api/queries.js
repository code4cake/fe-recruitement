// @format

import gql from 'graphql-tag'

const GET_ALL_POKEMONS = gql`
  query AllPokemons($first: Int!) {
    Pokemons(first: $first) {
      id
      name
      image
      types(first: 1) {
        name
      }
      abilities {
        name
      }
      stats {
        name
        value
      }
    }
  }
`
const GET_POKEMON_PHOTO = gql`
  query PokemonPhoto($image: String!) {
    Pokemon(image: $image) {
      id
      image
    }
  }
`

const GET_POKEMON_DETAILS = gql`
  query PokemonDetails($name: String!) {
    Pokemon(name: $name) {
      id
      name
      types {
        name
      }
      abilities {
        name
      }
      stats {
        name
        value
      }
    }
  }
`

export { GET_ALL_POKEMONS, GET_POKEMON_DETAILS, GET_POKEMON_PHOTO }

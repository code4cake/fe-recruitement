// @format
const gql = require('graphql-tag')

const typeDefs = gql`
  type PokemonType {
    name: String!
  }

  type PokemonAbility {
    name: String!
  }

  type PokemonStat {
    name: String!
    value: Int!
  }

  type Pokemon {
    id: ID!
    name: String!
    image: String!
    types: [PokemonType]
    abilities: [PokemonAbility]
    moves: [PokemonMove]
    stats: [PokemonStat]
  }
`

module.exports = typeDefs

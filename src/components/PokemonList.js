// @flow
// @format

import * as React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_ALL_POKEMONS } from '../api/queries'

import Paragraph from './Paragraph'
import Pokemon from './Pokemon'

import { CardsSection } from '../styles/globals'

export type PokemonListProps = {
  // [TODO]
}

function PokemonList(props: PokemonListProps): React.Node {
  const { loading, error, data } = useQuery(GET_ALL_POKEMONS, {
    variables: { first: 151 },
  })

  if (loading) return <Paragraph text="Loading..." />
  if (error) return <Paragraph text={`Error: ${error.message}`} textColor="red" />

  return (
    <CardsSection>
      {data.Pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))}
    </CardsSection>
  )
}

export default PokemonList

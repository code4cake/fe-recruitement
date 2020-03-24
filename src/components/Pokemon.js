// @flow
// @format

import * as React from 'react'

import { Avatar, Button, CardArticle, Paragraph } from '../styles/globals'

export type PokemonProps = {
  pokemon: {
    +id: number,
    +image: string,
    +name: string,
    +types: Array<any>,
    +abilities: Array<any>,
    +stats: Array<any>,
    onHandleSave: () => void,
    onHandleSelect: () => void,
  },
}

function Pokemon(props: PokemonProps): React.Node {
  const { pokemon } = props

  function onHandleSave() {
    console.log(`I was save: ${pokemon.name}`)
  }

  function onHandleSelect() {
    console.log(`I was selected: ${pokemon.name}`)
  }

  return (
    <CardArticle>
      <Avatar alt="pokemon-image" src={pokemon.image} />
      <Paragraph>ID: {pokemon.id}</Paragraph>
      <Paragraph>Name: {pokemon.name}</Paragraph>

      {/* [TODO]: Need to either use lodash or a `.map()` for the following data */}
      <Paragraph>Type: {pokemon.types.name}</Paragraph>
      <Paragraph>Abilities: {pokemon.abilities.name}</Paragraph>
      <Paragraph>Stats: {pokemon.stats.name}</Paragraph>

      <Button onClick={onHandleSelect}>Select this Pokemon</Button>
      <Button onSubmit={onHandleSave}>Save this Pokemon</Button>
    </CardArticle>
  )
}

export default Pokemon

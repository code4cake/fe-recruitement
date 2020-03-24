// @flow
// @format

import * as React from 'react'
import DownShift from 'downshift'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const AutoComplete = ({ items, onChange }) => (
  <DownShift onChange={onChange}>
    {({ getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex }) => (
      <div>
        <input {...getInputProps({ placeholder: 'Search a Pokemon!' })} />
        {isOpen ? (
          <div style={{ border: '1px solid #ccc' }}>
            {items
              .filter((i) => !inputValue || i.name.toLowerCase().includes(inputValue.toLowerCase()))
              .slice(0, 10)
              .map((pokemon, index) => (
                <div
                  {...getItemProps({ item: pokemon.name })}
                  key={pokemon.id}
                  style={{
                    backgroundColor: highlightedIndex === index ? 'gray' : 'white',
                    fontWeight: selectedItem === pokemon.name ? 'bold' : 'normal',
                  }}
                >
                  {pokemon.name}
                </div>
              ))}
          </div>
        ) : null}
      </div>
    )}
  </DownShift>
)

const Search = ({ data: { Pokemons = [], loading } }) => (
  <AutoComplete
    items={Pokemons}
    onChange={(selectedItem) => console.log(`This is the selected Item : ${selectedItem}`)}
  />
)

const allPokemonsQuery = gql`
  query Pokemons($inputValue: String!) {
    Pokemons(first: 151) {
      id
      name
    }
  }
`

export default graphql(allPokemonsQuery)(Search)

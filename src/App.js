// @flow
// @format

import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import client from './api/graphql'

import Logo from './components/Logo'
import PokemonList from './components/PokemonList'

import { H1, MainGridContainer } from './styles/globals'

const App = () => (
  <ApolloProvider client={client}>
    <MainGridContainer>
      <Logo src="https://vignette.wikia.nocookie.net/logopedia/images/2/2b/Pokemon_2D_logo.svg/revision/latest/scale-to-width-down/639?cb=20170115063554" />
      <H1>Pokemon Stats App</H1>
      <PokemonList />
    </MainGridContainer>
  </ApolloProvider>
)

export default App

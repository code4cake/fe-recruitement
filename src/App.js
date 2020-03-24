// @flow
// @format

import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import client from './api/graphql'

import Logo from './components/Logo'

import { H1, MainGridContainer } from './styles/globals'

const App = () => (
  <ApolloProvider client={client}>
    <MainGridContainer>
      <Logo />
      <H1>Pokemon Stats App</H1>
    </MainGridContainer>
  </ApolloProvider>
)

export default App

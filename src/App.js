// @flow
// @format

import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import client from './api/graphql'

import { Container, Logo } from './styles/globals'

const App = () => (
  <ApolloProvider client={client}>
    <Container>
      <Logo src="https://vignette.wikia.nocookie.net/logopedia/images/2/2b/Pokemon_2D_logo.svg/revision/latest/scale-to-width-down/639?cb=20170115063554" />

      <div>BUILD YOUR APP here</div>
    </Container>
  </ApolloProvider>
)

export default App

// @flow
// @format

import * as React from 'react'

import { Logo as StyledLogo } from '../styles/globals'

type Props = {
  src: string,
}

const Logo = ({ src }: Props) => (
  <StyledLogo
    testId="logo"
    src="https://vignette.wikia.nocookie.net/logopedia/images/2/2b/Pokemon_2D_logo.svg/revision/latest/scale-to-width-down/639?cb=20170115063554"
  />
)

export default Logo

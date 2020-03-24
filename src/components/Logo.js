// @flow
// @format

import * as React from 'react'

import { Logo as StyledLogo } from '../styles/globals'

type Props = {
  src: string,
}

const Logo = ({ src }: Props) => <StyledLogo data-testid="logo" src={src} />

export default Logo

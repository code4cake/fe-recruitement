// @flow
// @format

import * as React from 'react'

import { Paragraph as StyledParagraph } from '../styles/globals'

type Props = {
  text: string,
}

const Paragraph = ({ text }: Props) => (
  <StyledParagraph data-testid="paragraph">{text}</StyledParagraph>
)

export default Paragraph

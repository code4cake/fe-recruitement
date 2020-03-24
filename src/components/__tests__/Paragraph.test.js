// @format

import React from 'react'
import { render } from '@testing-library/react'

import Paragraph from '../Paragraph'

test('renders a `<Paragraph />` html element with some test', () => {
  const { getByTestId } = render(<Paragraph text="I am some random text" />)
  expect(getByTestId('paragraph')).toBeInTheDocument()
})

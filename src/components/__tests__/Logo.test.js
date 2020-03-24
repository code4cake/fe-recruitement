// @format

import React from 'react'
import { render } from '@testing-library/react'

import Logo from './Logo'

test('renders a Logo with an image onto the DOM', () => {
  const { getByTestId } = render(<Logo />)
  expect(getByTestId('logo')).toBeInTheDocument()
})

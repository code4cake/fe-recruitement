// @format

import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

test('renders the App title', () => {
  const { getByText } = render(<App />)
  expect(getByText('Pokemon Stats App')).toBeInTheDocument()
})

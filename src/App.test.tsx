import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)

    const text = screen.getByText("Vite + React");
    expect(text).toBeInTheDocument();
  })
})
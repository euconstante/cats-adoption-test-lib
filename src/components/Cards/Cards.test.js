import { render, screen } from '@testing-library/react'
import cats from '../../mocks/cats.json'

import Cards from '../Cards'

describe('Cards', () => {
  test('should render five card component', () => {
    render(<Cards cats={cats} />)
    expect(screen.getAllByRole('article').length).toBe(5)
  })
})

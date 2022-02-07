import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import Pets from '../Pets'
import cats from '../../mocks/cats.json'

const server = setupServer(
  rest.get('http://localhost:4000/cats', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(cats)
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Pets', () => {
  test('should render five card component', async () => {
    render(<Pets />)
    const cards = await screen.findAllByRole('article')
    expect(cards.length).toBe(5)
  })
})

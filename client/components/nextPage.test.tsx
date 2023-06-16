// @vitest-environment jsdom
import { screen, within } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { renderRoute } from '../test-utils'
import server from '../../server/server'
import request from 'supertest'

import * as db from '../../server/db/db'

vi.mock('../../server/db/db')

//////////////////// ROUTES ////////
describe('<NextPage>', () => {
    it('should render the characters', async () => {
      // render http://localhost:5173/nextPage/{name}
      renderRoute('/nextPage/{name}')
  
      expect(
        screen.getByRole('heading', { name: /hi/i })
      ).toBeInTheDocument()
  
    })
})

//////////////////// API ROUTES ////////



describe('GET /api/v1/nextPage', () => {
    it('should return an array of characters', async () => {
      
    // Arrange
      vi.mocked(db.getCharacters).mockResolvedValue([
        { id: 1, name: 'Turtle', power: 0.00001, image: 'https://i.makeagif.com/media/3-24-2019/iWrPAL.gif' },
      ])
  
      // Act
      const response = await request(server).get('/api/v1/nextPage')
  
      // Assert
      expect(response.body).toMatchInlineSnapshot(`
        {
          "characters": [
            {
              "id": 1,
              "image": "https://i.makeagif.com/media/3-24-2019/iWrPAL.gif",
              "name": "Turtle",
              "power": 0.00001,
            },
          ],
        }
      `)
    })
})
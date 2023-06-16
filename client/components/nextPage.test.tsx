// @vitest-environment jsdom
import { screen, within } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { renderRoute } from '../test-utils'
import server from '../../server'
import request from 'supertest'

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

describe('GET /api/v1/sharks', () => {
    it('should return an array of sharks', async () => {
      // Arrange
      // now getAllSharks looks like:
      /**
       * async function getAllSharks() {
       *   return [{ id: 1, name: 'Baby Shark', colour: 'Green' }]
       * }
       */
      vi.mocked(db.getAllSharks).mockResolvedValue([
        { id: 1, name: 'Baby Shark', colour: 'Green' },
      ])
  
      // Act
      const response = await request(server).get('/api/v1/sharks')
  
      // Assert
      expect(response.body).toMatchInlineSnapshot('')
    })
})
import { Router } from 'express'

import * as db from '../db/db'

const router = Router()

//server = /api/v1

router.get('/nextPage', async (req, res) => {
  try {
    const characters = await db.getCharacters()

    res.json({ characters: characters.map((character) => character) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
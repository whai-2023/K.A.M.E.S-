import connection from './connection'
import { Characters } from '../../models/model'

export function getCharacters(db = connection): Promise<Characters[]> {
  return db('whatever').select()
}

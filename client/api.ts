import request from 'superagent'

const rootUrl = '/api/v1'

export function getCharacters(): Promise<string[]> {
  return request.get(rootUrl + '/nextPage').then((res) => {
    return res.body.characters
  })
}

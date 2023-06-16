import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getCharacters } from '../api'
import { Character } from '../../models/model'

function NextPage() {
  const { name } = useParams()
  console.log(name)

  const randomPower = Math.random() * (44999 - 0.0001) + 0.0001

  const charactersQuery = useQuery(['characters'], () => getCharacters())
  console.log(charactersQuery.data)

  const characters = charactersQuery.data as unknown as Character[]

  const characterBelow = characters?.filter(
    (character) => character.power <= randomPower
  )
  const characterAbove = characters?.find(
    (character) => character.power > randomPower
  )

  return (
    <div className="nextpageContainer">
      <div className="name">
        <h1>Hi {name}</h1>
      </div>

      <div className="randomPower">
        <h2>
          Your power is: &nbsp;
          <span className="randomPowerValue">{randomPower.toFixed(4)}</span>
        </h2>
      </div>

      <div className="canBeat">
        <h3>You can beat:</h3>
        {characterBelow &&
          characterBelow.map((character, index) => (
            <div key={index}>
              <p>
                {character.name} - {character.power}{' '}
              </p>
              <img src={character.image} alt={character.name}></img>
            </div>
          ))}
      </div>

      <div className="cannotBeat">
        <h3>But you cannot beat:</h3>
        {characterAbove && (
          <div>
            <p>
              {characterAbove.name} - {characterAbove.power}{' '}
            </p>
            <img src={characterAbove.image} alt={characterAbove.name}></img>
          </div>
        )}
      </div>
    </div>
  )
}

export default NextPage

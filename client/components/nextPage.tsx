import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getCharacters } from '../api'

function NextPage() {

  const { name } = useParams()
  console.log(name)

  const randomPower = (Math.random() * (44999 - 0.0001)) + 0.0001

  const charactersQuery = useQuery(['characters'], () => getCharacters())
  console.log(charactersQuery.data)

  const characters = charactersQuery.data

  const characterBelow = characters?.filter(character => character.power <=randomPower)
  const characterAbove = characters?.find(character => character.power >randomPower)

  return (
    <div className="nextpageContainer">
      
      <div className="name">
        Hi { name }
      </div>

      <div className="randomPower">
        Your power is: &nbsp;
        <span className="randomPowerValue">{randomPower.toFixed(4)}</span>
      </div>

      
          <div className="canBeat">
            You can beat:
            {characterBelow && characterBelow.map((character, index) => (
              <div key={index} >
               {character.name} - {character.power} <img src={character.image} alt={character.name}></img> 
              </div>
            ))}
          </div>

          <div className="cannotBeat">
           But you cannot beat:
            {characterAbove && (
            <div >
             {characterAbove.name} - {characterAbove.power} <img src={characterAbove.image} alt={characterAbove.name}></img> 
            </div>
            )}
          </div>
        
    

    </div>
  )
}

export default NextPage
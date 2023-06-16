import { useParams } from 'react-router-dom'


function NextPage() {

  const { name } = useParams()
  console.log(name)

  const randomPower = (Math.random() * (44999 - 0.0001)) + 0.0001

  return (
    <div className="nextpageContainer">
      
      <h1 className="name">
        Hi { name }
      </h1>

      <div className="randomPower">
        Your power is: &nbsp;
        <span className="randomPowerValue">{randomPower.toFixed(4)}</span>
      </div>

    </div>
  )
}

export default NextPage
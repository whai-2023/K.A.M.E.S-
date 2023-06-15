/* eslint-disable jsx-a11y/media-has-caption */
import { Link } from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [name, setName] = useState('')

  return (
    <div className="backgroundContainer">
      
      <div className="centeredContainer">
        
        <div className="title">
          <img src='/title.png' alt='dragon ball z title' className="titleLogo"></img>
        </div>
        
        <div className="logo">
          <img src='/logo.png' alt='kame logo' className="logo"></img>
        </div>

        <div className="textInputContainer">
          <input 
            type="text"
            placeholder="Type name here..."
            className="textInput"
            value={name}
            onChange={(event) => setName(event.target.value)} 
            required
          />
        </div>

        <div className="buttonContainer">
          {name && (
            <Link to={`/nextPage/${name}`}>
              <button className="generator-button">Generate Your Power Level</button>
            </Link>
          )
          } 
        </div>
        
        {/* <div className="audioContainer">
          <audio src="/dbz.mp3" autoPlay controls/>
        </div> */}
      </div>
      
    </div>
  )
}
/* eslint-enable jsx-a11y/media-has-caption */

export default App

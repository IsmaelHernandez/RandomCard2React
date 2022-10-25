import { useState } from 'react'
import './App.css'
import users from './json/users.json'
import CardUsers from './components/CardUsers'
import colors from './utils/colors'


function App() {
  //funcion para calcular elemento random
  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

  let userRandom = getRandomElement(users)
  let colorRandom = getRandomElement(colors)

  //Guardar el usuario random 
  const [ramdonUser, setRamdonUser] = useState(userRandom)
  const [ramdonColor, setRamdonColor] = useState(colorRandom)

  // console.log(ramdonUser)
  // console.log(ramdonColor)

  const objStyleBackground = {
    backgroundColor: ramdonColor
  }

  const getRandomAll = () => {
     userRandom = getRandomElement(users)
     colorRandom = getRandomElement(colors)

    setRamdonUser(userRandom)
    setRamdonColor(colorRandom)
  }

  return (
    <div className="App" style={objStyleBackground}>
      <CardUsers ramdonUser={ramdonUser} ramdonColor={ramdonColor} getRandomAll={getRandomAll} />
    </div>
  )
}

export default App

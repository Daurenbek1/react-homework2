import './styles/App.scss'
import { useState } from 'react'
import { Home } from './pages/Home'

function App() {

  const [numbers, setNumbers] = useState([]);

  const handleNumber = () => {
    const newArray = [];
    for(let i=0; i<5; i++) {
      let random = Math.floor(Math.random()*36)
      func(newArray, random)
    }
    newArray.sort( function(a, b) {
      return a - b
    })
    setNumbers(newArray)
  }

  const func = (newArray, random) => {
    if(!newArray.includes(random)) {
      newArray.push(random)
    } else {
      func(newArray, Math.floor(Math.random()*36))
    }
  }

  return (
    <div className="App">
      <Home numbers={numbers} handleNumber={handleNumber}/>
    </div>
  );
}

export default App;

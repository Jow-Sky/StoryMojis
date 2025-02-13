import { useState } from 'react'
import './App.css'
import {Gi3dStairs,GiBeech,GiBee,GiBeachBall,GiBigWave,GiCamel,GiAxolotl,GiBanknote,GiAmbulance,GiBalloonDog,GiCapybara,GiCakeSlice,GiCommercialAirplane,GiConsoleController,GiCoffeeCup,GiFamilyHouse,GiHiking,GiLockedChest,GiMeal,GiPiggyBank,GiPresent} from "react-icons/gi";
 
 
 
  
 

function App() {
    const [randomNumber, setRandomNumber] = useState('')
    const [imagens, setImagens] = useState([<Gi3dStairs />,<GiBeech />,<GiBee />,<GiBeachBall />,<GiBigWave />,<GiCamel />,<GiAxolotl />,<GiBanknote />,<GiAmbulance />,<GiBalloonDog />,<GiCapybara />,<GiCakeSlice />,<GiCommercialAirplane />,<GiConsoleController />,<GiCoffeeCup />,<GiFamilyHouse />,<GiHiking />,<GiLockedChest />,<GiMeal />,<GiPiggyBank />,<GiPresent />])
    const generateRandomNumber = () => {
    const n = Math.floor(Math.random() * imagens.length) 
    setRandomNumber(imagens [n])
    setImagens(prev => prev.filter((_, index) => index !== n))
    if (imagens.length === 0) {
      alert("Todas as imagens já foram mostradas!")
      return
  }

  }

  return (

    <>
        <div className = "topo">
        <h1 className = "titulo">Gerador de imagens Aleatórios</h1>
        </div>
        <div className="App">
         
        <button onClick={generateRandomNumber}>Gerar imagen</button>
       <p>{randomNumber}</p>
        </div>
    </>
  )
}

export default App
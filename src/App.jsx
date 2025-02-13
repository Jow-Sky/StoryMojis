import { useState } from 'react'
import './App.css'
import {Gi3dStairs,GiBeech,GiBee,GiBeachBall,GiBigWave,GiCamel,GiAxolotl,GiBanknote,GiAmbulance,GiBalloonDog,GiCapybara,GiCakeSlice,GiCommercialAirplane,GiConsoleController,GiCoffeeCup,GiFamilyHouse,GiHiking,GiLockedChest,GiMeal,GiPiggyBank,GiPresent} from "react-icons/gi";

 
 
 
  
 

function App() {
    const [randomNumber, setRandomNumber] = useState('')

    const [botao, setbotao] = useState([])

    const [imagens, setImagens] = useState([<Gi3dStairs />,<GiBeech />,<GiBee />,<GiBeachBall />,<GiBigWave />,<GiCamel />,<GiAxolotl />,<GiBanknote />,<GiAmbulance />,<GiBalloonDog />,<GiCapybara />,<GiCakeSlice />,<GiCommercialAirplane />,<GiConsoleController />,<GiCoffeeCup />,<GiFamilyHouse />,<GiHiking />,<GiLockedChest />,<GiMeal />,<GiPiggyBank />,<GiPresent />])
    
    const [imagensClone, setImagensClone] = useState([...imagens])
    
    const gerarRandomNumber = () => {
    
    const n = Math.floor(Math.random() * imagensClone.length) 
    
    setRandomNumber(imagensClone [n])
    
    setImagensClone(prev => prev.filter((_, index) => index !== n))
    if (imagensClone.length === 0) {
      alert("Todas as imagens já foram mostradas!")
      return
     
    }
    
  }
   const reset = () =>{
      setRandomNumber(null)
      setImagensClone([...imagens])
   }
  

  return (

    <>
        <div className = "topo">
        <h1 className = "titulo">Gerador de imagens Aleatórios</h1>
        </div>
        <div className="App">
         
         {imagensClone.length === 0 ? <button className = "botao-reset" onClick={reset}>reset</button>:<button className = "botao-gerar" onClick={gerarRandomNumber}>Gerar imagen</button>}
  
        
       <p>{randomNumber}</p>
        </div>
    </>
  )
}

export default App
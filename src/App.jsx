import { useEffect, useState } from 'react'
import Inputs from './components/Inputs'
import Results from './components/Results'
import './global.css'


function App() {
  const [userName, SetUserName] = useState('') ;
  const [userWeight, SetUserWeight] = useState(0) ;
  const [userHeight, SetUserHeight] = useState(0) ;
  const [resultImc, SetResultImc] = useState(0) ;
  const [classificationImc, SetClassificationImc] = useState('') ;

  useEffect (() => {
    if (userWeight>0 && userHeight>0) {
      const result = userWeight / (userHeight * userHeight) ;
      SetResultImc(result.toFixed(2)) ;

      if (result < 18.5) {
        SetClassificationImc('Abaixo do peso') ;
      } else if (result < 24.9) {
        SetClassificationImc('Peso Normal') ;
      } else if (result < 29.9) {
        SetClassificationImc('Sobrepeso (acima do peso desejado)') ;
      } else {
        SetClassificationImc('Obesidade') ;
      }
    } else {
      SetResultImc('') ;
      SetClassificationImc('')
    }

  },[userHeight, userWeight])

  return (
    <div className="container">
      <Inputs userName={event => SetUserName(event.target.value)} userWeight={event => SetUserWeight(event.target.value)} userHeight={event => SetUserHeight(event.target.value)}/>
      <Results userName={userName} resultImc={resultImc} classificationImc={classificationImc}/>
    </div>
  )
}

export default App

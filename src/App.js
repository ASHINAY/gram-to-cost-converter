import { useState } from 'react';
import './App.css';
import CalculationComponent from './components/CalculationComponent';
import Navbar from './components/Navbar';
import ResultComponent from './components/ResultComponent';

function App() {
  const [result, setResult] = useState(0);
  const [priceof1kg, setPriceof1kg] = useState("");
  const [price, setPrice] = useState("");
  const [showResult, setShowResult] = useState(true);
  const [calculationType, setCalculationType] = useState("Price");
  const projectName = "Gram To Cost Converter";

  return (
    <div style={{ backgroundColor: "#fadfe3", height: '100vh' }}>
      <Navbar projectName={projectName} />
      <CalculationComponent calculationType={calculationType}
        setCalculationType={setCalculationType}
        priceof1kg={priceof1kg}
        price={price}
        setShowResult={setShowResult} 
        setresult = {setResult}/>
       {showResult &&
        <ResultComponent result={result}/>
      }
    </div>
  );
}
export default App;

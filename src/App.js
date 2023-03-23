import { useState } from 'react';
import './App.css';
import CalculationComponent from './components/CalculationComponent';
import Navbar from './components/Navbar';
import ResultComponent from './components/ResultComponent';

function App() {
  const [result, setResult] = useState(0);
  const [priceof1kg, setPriceof1Kg] = useState("");
  const [price, setPrice] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [calculationType, setCalculationType] = useState("Price");
  const [suffix, setSuffix] = useState("Rs");
  const projectName = "Gram To Cost Converter";

  return (
    <div style={{ backgroundColor: "#fadfe3", height: '100vh' }}>
      <Navbar projectName={projectName} />
      <CalculationComponent calculationType={calculationType}
        setCalculationType={setCalculationType}
        setPriceof1kg={setPriceof1Kg}
        setPrice={setPrice}
        setShowResult={setShowResult}
        setResult={setResult}
        priceof1kg={priceof1kg}
        price={price}
        setSuffix={setSuffix} />
      {showResult &&
        <ResultComponent result={result} 
        suffix={suffix}/>
      }
    </div>
  );
}
export default App;

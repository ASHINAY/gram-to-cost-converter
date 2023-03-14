import { useState } from 'react';
import './App.css';
import CalculationComponent from './components/CalculationComponent';
import Navbar from './components/Navbar';
import ResultComponent from './components/ResultComponent';

function App() {
  const [result, setResult] = useState(0);
  const [priceof1kg, setPriceof1kg] = useState("");
  const [price, setPrice] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [calculationType, setCalculationType] = useState("Price");
  const projectName = "Gram To Cost Converter";

  const onCalculateBtnclick = () => {
    let result = 0;
    if (calculationType === "Price") {
      result = (1000 / priceof1kg) * price + " cost ";
    } else if (calculationType === "Grams") {
      result = (priceof1kg / 1000) * price + " gram ";
    } else if (calculationType === "KiloGrams") {
      result = (price / priceof1kg) + " Kg ";
    }
    setResult(result);
    setShowResult(true);
  }
  const onChangePriceof1kg = (e) => {
    let typedValue = e.target.value;
    setPriceof1kg(typedValue);
  }
  const onChangePrice = (e) => {
    let typedValue = e.target.value;
    setPrice(typedValue);
  }

  return (
    <div style={{ backgroundColor: "#fadfe3", height: '100vh' }}>
      <Navbar projectName={projectName} />
      <CalculationComponent calculationType={calculationType}
        onChangePriceof1kg={onChangePriceof1kg}
        onChangePrice={onChangePrice}
        onCalculateBtnclick={onCalculateBtnclick}
        setCalculationType={setCalculationType}
        priceof1kg={priceof1kg}
        price={price} />
       {showResult &&
        <ResultComponent result={result} />
      }
    </div>
  );
}
export default App;

import React from 'react'
import '../App.css';

function CalculationComponent(props) {
  const {
    calculationType,
    setCalculationType,
    setPriceof1kg,
    setPrice,
    setShowResult,
    setResult,
    priceof1kg,
    price,
    setSuffix,
  } = props;

  const onCalculateBtnclick = () => {
    let temp = 0;
    if (calculationType === "Price") {
      setSuffix("grams~ kgs");
      temp = (1000 / priceof1kg) * price;
    } else if (calculationType === "Grams") {
      setSuffix("g");
      temp = (priceof1kg / 1000) * price;
    } else if (calculationType === "KiloGrams") {
      setSuffix("Kg");
      temp = (price / priceof1kg);
    }
    setResult(temp);
    setShowResult(true);
    console.log(typeof temp);
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
    <div className="Container">
      <h style={{ fontWeight: '500' }}>BasicDetails</h>
      <div style={{ height: '1px', background: 'gray' }}></div>
      <div>Enter Price of 1 KG</div>
      <input type='text'
        style={{ height: '45px', fontSize: '20px' }}
        onChange={(e) => { onChangePriceof1kg(e) }}></input>
      <div className="Container1" >Calculator</div>
      <div style={{ height: '1px', background: 'gray' }}></div>
      <div className="Container3">Choose One to Calculate</div>
      <select name="calculationType" style={{ height: '40px', fontSize: '20px' }}
        value={calculationType}
        onChange={(e) => setCalculationType(e.target.value)}>
        <option value="Price">Price</option>
        <option value="Grams">grams</option>
        <option value="KiloGrams"> Kilogram</option>
      </select>
      <div className="Container2"> Enter {calculationType}</div>
      <input type='text'
        placeholder={`Enter ${calculationType == "Price"
          ? "Price"
          : calculationType == "Grams"
            ? "Grams"
            : "KiloGrams"
          }`}
        style={{ height: "40px", fontSize: "20px" }}
        onChange={(e) => {
          onChangePrice(e);
        }}
      ></input>
      <button onClick={onCalculateBtnclick} style={{ backgroundColor: '#F16767', height: '45px', color: 'white', justifyContent: 'center', margin: '10px 0', fontSize: '20px' }}>Calculate</button>
    </div>
  )
}
export default CalculationComponent
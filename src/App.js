import logo from './logo.svg';
import './App.css';

function App() {

  const onSearchBtnclick = () => {


  }
  return (
    <div style={{ backgroundColor: "#fadfe3", height: '100vh' }}>
      <div className="App">
        Gram To Cost Converter
      </div>
      <div className="Container">
        <h style={{ fontWeight: '500' }}>BasicDetails</h>
        <div style={{ height: '1px', background: 'gray' }}></div>
        <div>Enter Price of 1 KG</div>
        <input type='text' style={{ height: '40px' }}></input>
        <div className="Container1" >Calculator</div>
        <div style={{ height: '1px', background: 'gray' }}></div>
        <div className="Container3">Choose One to Calculate</div>
        <select name="calculationType" style={{ height: '40px' }} >
          <option value="Price">Price</option>
          <option value="gramsToCost">Grams</option>
          <option value="costToGrams"> KiloGrams</option>
        </select>

        <div className="Container2">Enter Price</div>
        <input type='text' placeholder='Enter Price' style={{ height: '40px' }} ></input>

        <button onClick={onSearchBtnclick} style={{ backgroundColor: '#F16767', height: '40px', color: 'white', justifyContent: 'center', margin: '10px 0' }}>Calculate</button>

      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>

        <div className='subContainer'>
          <span style={{ color: '#FFFFFF', fontWeight: '400', fontSize: '30px' }}>Answer there</span>
        </div>
      </div>
    </div>
  );
}

export default App;

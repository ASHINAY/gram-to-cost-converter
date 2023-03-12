import '../App.css';

function ResultComponent({ result }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='subContainer' >
        <span style={{ color: '#FFFFFF', fontWeight: '400', fontSize: '30px' }}>{result}</span>
      </div>
    </div>
  )
}

export default ResultComponent
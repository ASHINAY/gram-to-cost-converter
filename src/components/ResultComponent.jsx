import '../App.css';

function ResultComponent(props) {
  const {
    result,
    suffix,
  } = props;
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='subContainer' >
        <span style={{ color: '#FFFFFF', fontWeight: '400', fontSize: '30px' }}>{result.toFixed(0)}{suffix}</span>
      </div>
    </div>
  )
}

export default ResultComponent
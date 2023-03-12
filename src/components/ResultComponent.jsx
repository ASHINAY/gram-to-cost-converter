import '../App.css';

function ResultComponent({ projectResult }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='subContainer' >
        <span style={{ color: '#FFFFFF', fontWeight: '400', fontSize: '30px' }}> {projectResult}</span>
      </div>
    </div>
  )
}

export default ResultComponent
import '../App.css';

function Navbar(props) {
  const { projectName } = props;
  return (
    <div className='App'>{projectName}</div>
  )
}
export default Navbar
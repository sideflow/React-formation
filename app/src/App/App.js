import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      DEMAT BREIZH
      <br/>
      <Button bgcolor="tomato" title="Mon button"></Button>
      <Button title="Default bgcolor"></Button>
      <Button bgcolor="skyblue" title="My button2" style={{textDecoration: 'underline', color: 'grey'}} action={()=>{alert('Le bouton est cliqué')}}></Button>
    </div>
  );
}

export default App;

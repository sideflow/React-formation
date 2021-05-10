import React from 'react';
import './App.css';
import Button from './components/Button/Button';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: "Hello", counter:0}
  }

  componentDidMount() {
    this.setState({text:'Cliquez ici !!'});
  }

  componentDidUpdate() {
    console.log('Le contenu du component est: ', this.state);
  }

  render() {
    return <div className="App">
    <Button title="cliquer ici !!" action={()=>{
      this.setState({counter:this.state.counter + 1})
    }}/>
    {JSON.stringify(this.state)}
    </div>
  }

}

export default App;

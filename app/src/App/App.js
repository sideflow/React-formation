import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import AnimatedButton from './components/AnimatedButton/AnimatedButton';
import MemeSVGViewer from './components/MemeSVGViewer/MemeSVGViewer';
import {REST_SERVER_ADR} from './config/config';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: "Hello", counter: 0, memes: []}
  }

  componentDidMount() {
    fetch(`${REST_SERVER_ADR}/memes?_expand=image`, {headers: {"Content-Type":"application/json"}})
    .then((resp)=>resp.json(), (error)=>{console.log(error); return [];})
    .then(arr=> {
      console.log(arr);
      this.setState({memes:arr})
      return arr;
    })
  }
  
  componentDidUpdate() {
    console.log('Le contenu du component est: ', this.state);
  }

  render() {
    return <div className="App">
    <Button title="cliquer ici !!" action={()=>{
      this.setState({counter:this.state.counter + 1})
    }}/>
    <AnimatedButton title="animated " action={()=>{console.log('hello');}}/>
    {
      this.state.memes.map((element, index) => {
        return <MemeSVGViewer meme={element} key={"viewer-"+index}/>

      })
    }
    <br/>
    {JSON.stringify(this.state)}
    </div>
  }

}

export default App;

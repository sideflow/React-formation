import React from 'react';
import './App.css';
import MemeThumbnail from './components/MemeThumbnail/MemeThumbnail';
import MemeSVGViewer from './components/MemeSVGViewer/MemeSVGViewer';

import store from './store/store';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: "Hello", counter: 0, memes: []}
  }

  componentDidMount() {
    this.setState({memes: store.getState().memes});
    store.subscribe(() => {
      this.setState({memes: store.getState().memes})
    });
  }
  
  componentDidUpdate() {
    console.log('Le contenu du component est: ', this.state);
  }

  render() {
    return <div className="App">
      <MemeThumbnail/>
      {
        this.state.memes.map((element, index) => {
          return <MemeSVGViewer meme={element} key={"viewer-"+index}/>
        })
      }
      {JSON.stringify(this.state)}
    </div>
  }

}

export default App;

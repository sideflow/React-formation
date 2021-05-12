import React from 'react';
import './App.css';
import MemeThumbnail from './components/MemeThumbnail/MemeThumbnail';
import MemeSVGViewer from './components/MemeSVGViewer/MemeSVGViewer';

import store, {initialState as storeInitialState} from './store/store';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: "Hello", counter: 0, ...storeInitialState};
  }

  componentDidMount() {
    this.setState({...store.getState()});
    store.subscribe(() => {
      this.setState({...store.getState()})
    });
  }
  
  componentDidUpdate() {
    console.log('Le contenu du component est: ', this.state);
  }

  render() {
    return <div className="App">
      <MemeThumbnail>
        {
          this.state.memes.map((element, index) => {
            return (<>{JSON.stringify(element)}
              <MemeSVGViewer meme={{...element, image: this.state.images.find((e) => e.id === element.imageId)}} key={"viewer-"+index}/></>);
          })
        }
      </MemeThumbnail>
      {JSON.stringify(this.state)}
    </div>
  }

}

export default App;

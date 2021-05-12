import React from 'react';
import './App.css';
import MemeEditor from './components/MemeEditor/MemeEditor';
import MemeSVGViewer from './components/MemeSVGViewer/MemeSVGViewer';
import MemeThumbnail from './components/MemeThumbnail/MemeThumbnail';

import store, {initialState as storeInitialState} from './store/store';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {text: "Hello", counter: 0, ...storeInitialState};
  }

  componentDidMount() {
    this.setState({...store.getState().srvdata});
    store.subscribe(() => {
      this.setState({...store.getState().srvdata})
    });
  }
  
  componentDidUpdate() {
    console.log('Le contenu du component est: ', this.state);
  }

  render() {
    return <div className="App">
    <MemeEditor />
    <hr/>
    <MemeThumbnail>
        {
          this.state.memes.map((element, index) => {
            return <MemeSVGViewer meme={{ ...element, image: this.state.images.find((e) => e.id === element.imageId) }} key={"viewer-" + index} />;
          })
        }
      </MemeThumbnail>
      <br />
      {JSON.stringify(this.state)}
    </div>
  }

}

export default App;

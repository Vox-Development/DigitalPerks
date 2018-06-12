import React from 'react';
//import LinkedStateMixin from 'react-addons-linked-state-mixin'; // ES6
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import Container from 'muicss/lib/react/container';

//Styles
import './App.css';
//Pages
import ADSL from './pages/adsl';
import FTTH from './pages/ftth';
import MOBILE from './pages/mobile';
import CLOUD from './pages/cloud';
import VOICE from './pages/voice/index';

//Import banners
import HEADER from './pages/header';
// import BANNER from './pages/banner';

class App extends React.Component {

  render() {
    return (
      <Container>
        <HEADER />
        <Tabs justified={true} >
          <Tab value="pane-1" label="ADSL" >
            <ADSL />
          </Tab>
          <Tab value="pane-2" label="FTTH" >
            <FTTH />
          </Tab>
          <Tab value="pane-3" label="MOBILE DATA">
            <MOBILE />
          </Tab>
          <Tab value="pane-4" label="VOICE">
            <VOICE />
          </Tab>
          <Tab value="pane-5" label="CLOUD">
            <CLOUD />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default App;

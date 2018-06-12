import React from 'react';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import Container from 'muicss/lib/react/container';

//Pages
import SUPREME from './supreme';
import UNCAPPED from './uncapped';
import VOBI from './vobi';
import BANNER from './../banner';

class VOICE extends React.Component {
  render() {
    return (
      <Container className="mui--text-center velifix">
        <BANNER ima="./VOICE.png" />
        <Tabs>
          <Tab value="pane-1" label="UNCAPPED">
            <UNCAPPED />
          </Tab>
          <Tab value="pane-2" label="VOICE SUPREME">
            <SUPREME />
          </Tab>
          <Tab value="pane-3" label="VOBI">
            <VOBI />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default VOICE;

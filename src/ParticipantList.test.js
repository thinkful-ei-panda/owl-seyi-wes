import React from 'react';
import ReactDOM from 'react-dom';
import ParticipantList from './ParticipantList';
import store from './store';

import renderer from 'react-test-renderer';


describe('Participant List', () => {
  it('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(<ParticipantList participants={[...store.participants]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ParticipantList participants={[...store.participants]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});


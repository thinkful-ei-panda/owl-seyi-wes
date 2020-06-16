import React from 'react';
import ReactDOM from 'react-dom';
import ChatLog from './ChatLog';
import store from './store'

import renderer from 'react-test-renderer';

//<ChatLog chatEvents={props.chatEvents} participants={props.participants}/>
describe('ChatLog', () => {

    const props={
        chatEvents:store.chatEvents,
        participants:store.participants
    }
  it('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(<ChatLog {...props}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ChatLog {...props}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});


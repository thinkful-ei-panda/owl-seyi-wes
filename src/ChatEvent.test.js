import React from 'react';
import ReactDOM from 'react-dom';
import ChatEvent from './ChatEvent';
import store from './store'

import renderer from 'react-test-renderer';

//<ChatEvent key={index} participants={props.participants} chatEvent={props.chatEvents[index]} />
describe('ChatEvent', () => {

    const props={
        key:0,
        participants:store.participants,
        chatEvent:{
            participantId: 2,
            type: 'thumbs-up',
            timestamp: 1548852484247
        },
    }
  it('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(<ChatEvent {...props}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ChatEvent {...props}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});


import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage';
import store from './store'

import renderer from 'react-test-renderer';

//<Stage participants={props.participants}/>
describe('Stage', () => {

    const props={
        participants:store.participants
    }
  it('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(<Stage {...props}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Stage {...props}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});


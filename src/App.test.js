import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import renderer from 'react-test-renderer';
import store from './store';

describe('App', () => {
  it('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(<App participants={store.participants} chatEvents={store.chatEvents}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<App participants={store.participants} chatEvents={store.chatEvents}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});


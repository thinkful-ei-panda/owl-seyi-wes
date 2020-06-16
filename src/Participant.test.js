import React from 'react';
import ReactDOM from 'react-dom';
import Participant from './Participant';

import renderer from 'react-test-renderer';


describe('Participant', () => {

    const props={
        key:0,
        participant:{
            id: 1,
            name: 'Koren Templeton',
            avatar:
                'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
            inSession: true,
            onStage: true
        }
    }
  it('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(<Participant {...props}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Participant {...props}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});


import React from 'react';
import ReactDOM from 'react-dom';
import StageParticipant from './StageParticipant';
import store from './store'

import renderer from 'react-test-renderer';

//<StageParticipant key={props.participants[index].id} participant={props.participants[index]} />
describe('StageParticipant', () => {

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
    ReactDOM.render(<StageParticipant {...props}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<StageParticipant {...props}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});


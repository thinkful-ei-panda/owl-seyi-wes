import React from 'react';
import StageParticipant from './StageParticipant';

function Stage(props){
    return (
        <section className='stage'>
        {
        props.participants.map((arrEle,index) => <StageParticipant key={props.participants[index].id} participant={props.participants[index]} />)
        }
        </section>
        
    )
}
export default Stage
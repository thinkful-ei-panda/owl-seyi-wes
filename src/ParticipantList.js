import React from 'react';
import Participant from './Participant';

function ParticipantList(props){
    return (
        <section className='participant-list'>
        {
        props.participants.map((arrEle,index) => <Participant key={props.participants[index].id} participant={props.participants[index]} />)
        }
        </section>
        
    )
}

export default ParticipantList;
import React from 'react';
import Participant from './Participant';

function ParticipantList(props){
    return (
        <>
        {
        props.participants.map((arrEle,index) => <Participant participant={props.participants[index]} />)
        }

        </>
        
    )
}

export default ParticipantList;
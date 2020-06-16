import React from 'react';

function StageParticipant(props){
    if (props.participant.onStage===true){
        return  (<div className='stage-participant-container'>                    
                    <div>
                        <div className='stage-name'>{props.participant.name}</div>
                    </div>
                    <div>
                        <img src={props.participant.avatar} alt='avatar' />
                    </div>
                </div>)
    } else{
        return <></>
    }
}

export default StageParticipant
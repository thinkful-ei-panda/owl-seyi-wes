import React from 'react';

function Participant(props){
    if (props.participant.inSession===true&&props.participant.onStage===false){
        return  (<div className='participant-container'>
                    <div className='left small'>
                        <img src={props.participant.avatar} alt='avatar' />
                    </div>
                    <div className='right'>
                        <div>{props.participant.name}</div>
                        <div>in session</div>
                    </div>
                </div>)
    } else if(props.participant.inSession===true&&props.participant.onStage===true){
        return  (<div className='participant-container'>
                    <div className='left small'>
                        <img src={props.participant.avatar} alt='avatar' />
                    </div>
                    <div className='right'>
                        <div>{props.participant.name}</div>
                        <div>on stage</div>
                    </div>
                </div>)
    } else{
        return <></>
    }
}

export default Participant
import React from 'react';

function ChatEvent(props){

    const person=props.participants.find(participant => participant.id===props.chatEvent.participantId)
    const date=new Date(props.chatEvent.timestamp);
    let adjustedTime=date.toLocaleTimeString().split('');
    adjustedTime.splice(4,3);
    adjustedTime=adjustedTime.join('');
    switch (props.chatEvent.type){
        case 'join':
            return  <div className='chat-event-container2 center'>
                        <div>{adjustedTime}</div>
                        <div className='event'>{person.name} joined</div>
                    </div>
        case 'leave':
            return  <div className='chat-event-container2 center'>
                        <div>{adjustedTime}</div>
                        <div className='event'>{person.name} left the session</div>
                    </div>
        case 'thumbs-up':
            return  <div className='chat-event-container2 center'>
                        <div>{adjustedTime}</div>
                        <div className='event'>{person.name} gave a thumbs up</div>
                    </div>
        case 'thumbs-down':
            return  <div className='chat-event-container2 center'>
                        <div>{adjustedTime}</div>
                        <div className='event'>{person.name} gave a thumbs down</div>
                    </div>
        case 'raise-hand':
            return  <div className='chat-event-container2 center'>
                        <div>{adjustedTime}</div>
                        <div className='event'>{person.name} raised their hand</div>
                    </div>
        case 'clap':
            return  <div className='chat-event-container2 center'>
                        <div>{adjustedTime}</div>
                        <div className='event'>{person.name} clapped</div>
                    </div>
        case 'join-stage':
            return  <div className='chat-event-container2 center'>
                        <div>{adjustedTime}</div>
                        <div className='event'>{person.name} joined the stage</div>
                    </div>
        case 'leave-stage':
            return  <div className='chat-event-container2 center'>
                        <div>{adjustedTime}</div>
                        <div className='event'>{person.name} left the stage</div>
                    </div>
        case 'message':
            return  <div className='chat-event-container'>
                        <div className='small'><img src={person.avatar} alt='avatar'/></div>
                        <div>
                            <div>{person.name}<span className='time'>{adjustedTime}</span></div>
                            <div>{props.chatEvent.message}</div>
                        </div>
                    </div>
        default:
            return <></>
    }
}

export default ChatEvent
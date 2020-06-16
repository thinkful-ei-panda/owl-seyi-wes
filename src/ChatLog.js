import React from 'react';
import ChatEvent from './ChatEvent';

function ChatLog(props){
    return (
        <section className='chat-log'>
        {
        props.chatEvents.map((arrEle,index) => <ChatEvent key={index} participants={props.participants} chatEvent={props.chatEvents[index]} />)
        }
        </section>
        
    )
}

export default ChatLog
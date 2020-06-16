import React from 'react';
import ParticipantList from './ParticipantList';
import Stage from './Stage';
import ChatLog from './ChatLog';

function App(props) {
  return (
    <main className='App'>
      <ParticipantList participants={props.participants}/>
      <ChatLog chatEvents={props.chatEvents} participants={props.participants}/>
      <Stage participants={props.participants}/>
    </main>
  );
}

export default App;
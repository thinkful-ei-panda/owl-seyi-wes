import React from 'react';
import ParticipantList from './ParticipantList';
import Stage from './Stage';
import ChatLog from './ChatLog';

function App(props) {
  return (
    <main className='App'>
      <ParticipantList participants={props.participants}/>
      <Stage />
      <ChatLog />
    </main>
  );
}

export default App;
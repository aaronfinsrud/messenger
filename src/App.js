import React, { useState, useEffect } from 'react';
import './App.css';
import MessageWindow from './MessageWindow.jsx';
import TextBar from './TextBar.jsx';
import { registerOnMessageCallback, send, startWebsocketConnection } from './websocket';

/*
* TODO:
* Oauth login
* allow for persistence of messages
* implement styledcomponents
*/

function App() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    startWebsocketConnection();
  }, []);

  const onMessageReceived = (msg) => {
    msg = JSON.parse(msg);
    setMessages([...messages, msg]);
    console.log('messages received: ', messages)
  }

  registerOnMessageCallback(onMessageReceived.bind(this));

  const sendMessage = (text) => {
    const message = {
      username,
      text,
    };
    send(JSON.stringify(message));
  };

  if ( username === null ) {
    return(
      <div className='container'>
        <div className='container-title'>Enter username</div>
        <TextBar onSend={setUsername}/>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className='container-title'>Messages</div>
      <MessageWindow messages={messages} username={username} />
      <TextBar onSend={sendMessage}/>
    </div>
  );
}

export default App;

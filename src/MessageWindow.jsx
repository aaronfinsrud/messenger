import React, { useRef, useEffect, } from 'react';

const Message = ({ text, username, self}) => {
  return(
    <div className={'message' + (self ? ' message-self' : '')}>
      <div className='message-username'>{username}</div>
      <div className='message-text'>{text}</div>
    </div>
  )
}

const MessageWindow = ({messages=[], username}) => {
  const messageWindow = useRef(null);
  useEffect(() => {
    messageWindow.current.scrollTop = messageWindow.current.scrollHeight - messageWindow.current.clientHeight;
  }, []);


  return (
  <div className='message-window' ref={messageWindow}>
    {messages.map((msg, i) => {
      return <Message key={i} text={msg.text} username={msg.username} self={username === msg.username}/>
    })
    }
  </div>
  );
}

export default MessageWindow;
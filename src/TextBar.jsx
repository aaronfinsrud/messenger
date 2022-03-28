import React, { useRef } from 'react';

const TextBar = ({ onSend }) => {
  const input = useRef(null);

  const sendMessage = () => {
    onSend(input.current.value)
    input.current.value = '';
  }

  const sendMessageIfEnter = (e) => {
    if (e.keycode === 13) sendMessage();
  }

  return(
    <div className='textbar'>
      <input
      className='textbar-input'
      type='text'
      ref={input}
      onKeyDown={sendMessageIfEnter} />
      <button className='textbar-send' onClick={sendMessage}>
        Send
      </button>

    </div>
  );
}

export default TextBar;

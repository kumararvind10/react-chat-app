import React from 'react';
import MyMessage from './MyMessage';
import MyMessageForm from './MyMessageForm';
import TheirMessage from './TheirMessage';


const ChatFeed = (props) => {

  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderMessage = (message) => {
    const keys = Object.keys(message);
    return keys.map((key, index) => {
      const message = messages[key]
      const lastMessageKey = index === 0 ? null : keys[index - 1]
      const isMyMessage = userName === messages.sender.username;
      return (
        <div key={`msg_${index}`} style={{ width: '100 %' }}>
          <div className="message-block">
            {
              isMyMessage ? <MyMessage message={message} /> : <TheirMessage message={message} lastMessage={message[lastMessageKey]} />
            }

          </div>
          <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
            read-receipts
                    </div>
        </div>
      )

    })
  }

  return (
    <div className="chat-feed">
      <div className='chat-title-container'>
        <div className='chat-title'>
          {
            chat?.title
          }

        </div>
        <div className="chat-subtitle">
          {
            chat.people.map((person) => `${person.person.username}`)
          }
        </div>

      </div>
      {renderMessage()}
      <div style={{ height: '100px' }} />
      <div className='message-form-container'>
        <MyMessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  )
}

export default ChatFeed;
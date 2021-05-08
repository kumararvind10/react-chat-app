import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed'
const App = () => {
    return (
        <ChatEngine
            height='100vh'
            projectID='34964a14-6c0d-4883-875c-413a13d9363c'
            userName='arvind'
            userSecret='12345'
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />

    )
}


export default App;
import React from 'react'
import './Messages.css'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message/Message.js'


const Messages = ({messages,Id}) => (
<ScrollToBottom className='messages'>
    {messages.map((message,i)=><div key={i}><Message message={message} Id={Id}/></div>)}
</ScrollToBottom>
)

export default Messages
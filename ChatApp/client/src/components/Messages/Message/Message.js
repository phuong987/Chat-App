import React from 'react'
import './Message.css'
import ReactEmoji from 'react-emoji'

const Message = ({message,Id}) => {
    let isSentByCurrentUser = false;
    if(message.id === Id){
        isSentByCurrentUser = true
    }
    return(
        isSentByCurrentUser ?
        (
            <div className='messageContainer justifyEnd'>
                <p className='sentText pr-10'>{message.user}</p>
                <div className='messageBox backgroundBlue'>
                    <p className='messageText colorWhite'>{ReactEmoji.emojify(message.text)}</p>
                </div>
            </div>
        )
        :
        (
            <div className='messageContainer justifyStart'>
            <div className='messageBox bkackgroundLight'>
                <p className='messageText colorDark'>{ReactEmoji.emojify(message.text)}</p>
            </div>
            <p className='sentText pl-10'>{message.user}</p>
            </div>
        )
    )
}
export default Message
import { useEffect, useState } from 'react'
import { getChatMessages } from '../../api/chat'
import { ChatMessageDTO } from '../../interface/ChatMessageDTO'
import { ChatItem } from '../ChatItem'
import './chat-item-list.scss'

export const ChatItemList = () => {
    const [chatMessages, setChatMessages] = useState<ChatMessageDTO[]>([])
    const className = 'component-chat-item-list'

    useEffect(() => {
        getChatMessages().then((data) => {
            setChatMessages(data)
        })
    }, [])

    return (
        <div className={className}>
            {chatMessages.map((chatMessage) => (
                <ChatItem
                    key={chatMessage.id}
                    title={chatMessage.title}
                    body={chatMessage.last_message.message}
                    time={chatMessage.last_message.created_at}
                    avararSrc={chatMessage.avatar}
                />
            ))}
        </div>
    )
}

import { FC } from 'react'
import { IChatItemList } from './interface'
import './chat-item.scss'
import { Avatar } from '../Avatar'
import { Time } from '../Time'

export const ChatItem: FC<IChatItemList> = (props: IChatItemList) => {
    const { title, body, time, avararSrc } = props

    const className = `component-chat-item`

    return (
        <div className={className}>
            <Avatar src={avararSrc} />
            <div className={className + '--info'}>
                <div className={className + '--head'}>
                    <div>{title}</div>
                    <Time time={time} />
                </div>
                <div className={className + '--body'}>{body}</div>
            </div>
        </div>
    )
}

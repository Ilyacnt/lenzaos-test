import { ChatItemList } from '../../components/ChatItemList'
import { IPage } from '../../interface/page'
import './index-page.scss'

import { FC } from 'react'

export const PageIndex: FC<IPage> = (props: IPage) => {
    const className = 'index-page'

    return (
        <div className={className}>
            <div className={className + '--sidebar'}>
                <div className={className + '--header'}>All chats</div>
                <ChatItemList />
            </div>
            <div className={className + '--content'}>content</div>
        </div>
    )
}

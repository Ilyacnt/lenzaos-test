import { wrapper } from '../../utils/wrapper'
import { URLS } from '../../constants/urls'

export const getChatList = () => {
    return wrapper('get', URLS.LIST)
}

export const getChatMessages = () => {
    return wrapper('get', URLS.MESSAGES)
}

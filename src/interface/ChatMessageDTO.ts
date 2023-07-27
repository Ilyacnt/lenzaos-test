export interface ChatMessageDTO {
    id: string
    created_at: number
    title: string
    avatar: string
    private: boolean
    last_message: LastMessageDTO
    count_unread: number
    users: UserDTO[]
}

export interface LastMessageDTO {
    created_at: number
    user_id: string
    user_name: string
    user_surname: string
    you: boolean
    message: string
}

export interface UserDTO {
    id: string
    name: string
    surname: string
    avatar: string
    you?: boolean
}

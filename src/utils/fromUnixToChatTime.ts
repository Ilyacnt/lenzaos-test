import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

export const fromUnixToChatTime = (unixTimestamp: number): string => {
    return dayjs.unix(unixTimestamp).tz('Europe/Moscow').format('HH:mm')
}

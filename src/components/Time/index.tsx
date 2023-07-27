import { FC, useEffect, useState } from 'react'
import { ITime } from './interface'
import { fromUnixToChatTime } from '../../utils/fromUnixToChatTime'
import { ReactComponent as ReadStatusIcon } from '../../assets/read-status.svg'
import './time.scss'

export const Time: FC<ITime> = (props: ITime) => {
    const { time, my = false } = props
    const [convertedTime, setConvertedTime] = useState<string | null>(null)
    const className = 'component-time'

    useEffect(() => {
        setConvertedTime(fromUnixToChatTime(time))
    }, [])

    return (
        <div className={className}>
            {convertedTime}
            {my && <ReadStatusIcon />}
        </div>
    )
}

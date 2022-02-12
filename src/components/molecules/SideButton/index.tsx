import { CaretDown, House } from 'phosphor-react'
import React from 'react'
import BoxLetter from '../../atoms/BoxLetter'

import SB from './SideButton.module.scss'

interface Props {
    Icon: any
    title: string
    letter?: string
    dropdown: boolean
}

const SideButton: React.FC<Props> = ({ Icon, title, letter, dropdown }) => {
    return (
        <>
            <div className={SB.sideButton}>
                <div className={SB.sideButtonInner}>
                    <Icon className={SB.icon} size={28} />
                    <div className={SB.text}>{title}</div>
                </div>
                {letter && <BoxLetter letter={letter} />}
                {dropdown && <CaretDown className={SB.CaretDownThing} size={18} />}
            </div>
        </>
    )
}

export default SideButton

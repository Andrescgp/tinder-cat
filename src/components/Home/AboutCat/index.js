import React, { useContext } from 'react'
import { Interest } from './components/Interests'
import { MsiContext } from '../../../contexts/MsiContext'

export const AboutCat = () => {

    const mensaje = useContext(MsiContext)

    return (
        <div className="about-cat">
            About cat
            <br /><br />
            { mensaje }
            <Interest />
        </div>
    )
}
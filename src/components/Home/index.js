import React from 'react'
import { Profile } from './Profile'
import { ViewCats } from './ViewCats'
import { AboutCat } from './AboutCat'
import { ProfileContextStore } from '../../contexts/ProfileContext'


export const Home = () => {
    
    return(
    
    
    <div className="home-page">

        <ProfileContextStore>
            <Profile />
            <ViewCats />
            <AboutCat />
        </ProfileContextStore>

       
    </div>
    )
}

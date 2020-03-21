import React from 'react'
import { Profile } from './profile'
import { ViewCats } from './viewcats'
import { AboutCat } from './aboutcat'

export const Home = () => (
    <div className="home-page">
        <Profile />
        <ViewCats />
        <AboutCat />
    </div>
)
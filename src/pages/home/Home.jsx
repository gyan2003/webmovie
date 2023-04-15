import React from 'react'
import HeroBanner from './herobanner/HeroBanner'
import './style.scss'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './toprated/TopRated'

const Home = () => {
  return (
    <div className='homePage'>
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
      
    </div>
  )
}

export default Home
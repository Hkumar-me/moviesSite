import React from 'react'
import SideNav from './SideNav'
import TopNav from './TopNav'
import Wallpaper from './Wallpaper'
import HorizontalList from './HorizontalList'


function Home() {
  return (
    <div className='w-full h-screen flex text-[#e8eaf5] overflow-hidden'>
        <SideNav />
        <div className="Hero w-[80%] bg-[#041C32] h-screen p-2">
            <TopNav/>
            {/* <Wallpaper /> */}
            <HorizontalList />
        </div>
    </div>
  )
}

export default Home

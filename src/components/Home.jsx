import React from 'react'
import SideNav from './SideNav'
import TopNav from './TopNav'
import Wallpaper from './Wallpaper'
function Home() {
  return (
    <div className='w-full h-screen flex text-[#e8eaf5] overflow-hidden'>
        <SideNav />
        <div className="Hero w-[80%] bg-[#041C32] h-screen">
            <TopNav/>
            {/* <Wallpaper /> */}
        </div>
    </div>
  )
}

export default Home

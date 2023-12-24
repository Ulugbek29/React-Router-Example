import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar/SideBar'

export default function HomePage() {
  return (
    <div className='self-end w-[80%] min-h-screen h-full bg-[#DCE9F8]'>
    <SideBar />

    <div className='w-full h-full p-4'>
    <Outlet />
    </div>
    </div>
  )
}

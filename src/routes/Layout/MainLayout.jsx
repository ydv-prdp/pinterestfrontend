import React from 'react'
import { Outlet } from 'react-router'
import LeftBar from '../../components/leftBar/LeftBar'
import TopBar from '../../components/topBar/TopBar'

const MainLayout = () => {
  return (
    <div className="w-full flex gap-1 text-black">
      <LeftBar/>
      <div className="flex-1 mr-4">
        <TopBar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout
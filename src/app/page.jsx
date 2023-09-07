'use client'
import { useState } from 'react'
import MainLayout from '../../components/MainLayout'

export default function Home() {
  const [openLayout, setOpenLayout] = useState(false);
  const handleOpenLayout = () =>{
    setOpenLayout(true)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-[url('/images/bg.png')] bg-no-repeat bg-cover">
      
      <div className="image-container-center">
      <img src="/images/oli.png" alt="" className="oli" />
    </div> 
   <div className="image-container">
      <img src="/images/pink globe.png" alt="" className="glow-image" />
    </div>   
    <div className="image-container">
      <img src="/images/yellow globe.png" alt="" className="glow-image" />
    </div> 
    <div className="image-container">
      <img src="/images/blue globe.png" alt="" className="glow-image" />
    </div>  
    <div className='home-img-container' onClick={handleOpenLayout}>
      <img src="/images/oli home buttomn.png" alt="" className="home-image" />
      </div> 
      {
        openLayout && <MainLayout />
      }
    </main>
  )
}


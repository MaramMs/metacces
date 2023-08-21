import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-[url('/images/bg.png')] bg-no-repeat bg-center bg-cover">
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
    <div className='home-img-container'>
      <img src="/images/oli home buttomn.png" alt="" className="home-image"/>
      </div> 
    </main>
  )
}


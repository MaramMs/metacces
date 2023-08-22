import { Select } from 'antd'
import Link from 'next/link'
import React from 'react'

const MainLayout = () => {
  return (
   <div className='min-h-screen'  style={{backdropFilter:'blur(50px)',width:'100vw',height:'100vh'}}>
 <div className='p-16 flex flex-col justify-between w-full min-h-screen' style={{padding:'16px'}}>
 <div className='flex justify-between'>
      <h1 className='text-[#FFFAFA] text-[30px]' style={{color:'#FFFAFA',margin:'auto',fontSize:'40px'}}>Metacces</h1>
      <Select
      defaultValue="EN"
      style={{
      
      }}
      disabled
      options={[
        {
          value: 'EN',
          label: 'EN',
        },

        {
          value: 'ar',
          label: 'AR',
        },
      ]}
    />
    </div>
  
    <div className="gradient-border-wrapper">
      <div className="gradient-border-inner">
    Content
  </div>
    

</div>



    <div className='flex justify-between items-center'>
      <Link href='/' className='flex justify-center items-center rounded-[20px] w-[126px] h-[35.55px] text-[#FFFFFF] opacity-[13%]' style={{width:'126px', height:'35.55px', background:'rgb(112 112 112 / 26%)',justifyContent:'center', borderRadius:'14px' ,color:'#fff'}}>
        Follow Us
      
      </Link>
     
     <div className='flex items-center' style={{gap:'32.2px'}}>
     <ul className='flex' style={{gap:'12.2px'}}>
        <li className='bg-[#CECED2] w-[62.61px] h-[62.61px]' style={{background:'rgb(112 112 112 / 34%)' , width:'62.61px' , height:'62.61px',opacity:'100%' , borderRadius:'100%', display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid #707070'}}>
<Link href='/'>
<img src="/images/oliWhite.svg" alt="" />
</Link>
        </li>
        <li className='bg-[#CECED2] w-[62.61px] h-[62.61px]' style={{background:'rgb(112 112 112 / 34%)' , width:'62.61px' , height:'62.61px',opacity:'100%' , borderRadius:'100%', display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid #707070'}}>
<Link href='/'>
<img src="/images/nav2.svg" alt="" />
</Link>
        </li>
        <li className='bg-[#CECED2] w-[62.61px] h-[62.61px]' style={{background:'rgb(112 112 112 / 34%)' , width:'62.61px' , height:'62.61px',opacity:'100%' , borderRadius:'100%', display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid #707070'}}>
<Link href='/'>
<img src="/images/nav1.png" alt="" />
</Link>
        </li>
        

      </ul>
     <Link href='/'>
<img src="/images/oli home buttomn.png" alt="" />
</Link>
<ul className='flex' style={{gap:'12.2px'}}>
<li className='bg-[#CECED2] w-[62.61px] h-[62.61px]' style={{background:'rgb(112 112 112 / 34%)' , width:'62.61px' , height:'62.61px',opacity:'100%' , borderRadius:'100%', display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid #707070'}}>
<Link href='/'>
<img src="/images/nav3.svg" alt="" />
</Link>
        </li>
        <li className='bg-[#CECED2] w-[62.61px] h-[62.61px]' style={{background:'rgb(112 112 112 / 34%)' , width:'62.61px' , height:'62.61px',opacity:'100%' , borderRadius:'100%', display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid #707070'}}>
<Link href='/'>
<img src="/images/nav4.svg" alt="" />
</Link>
        </li>
<li className='bg-[#CECED2] w-[62.61px] h-[62.61px]' style={{background:'rgb(112 112 112 / 34%)' , width:'62.61px' , height:'62.61px',opacity:'100%' , borderRadius:'100%', display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid #707070'}}>
<Link href='/'>
<img src="/images/nav5.svg" alt="" />
</Link>
        </li>
</ul>
     </div>

      <div className='flex flex-col gap-1' style={{gap:'5px'}}>
        <span className='text-[#fff]' style={{color:'#fff'}}>Download App</span>
        <div className='flex gap-[5px] justify-evenly' style={{gap:'4.9px'}}>
          <Link href='/' className='flex justify-center items-center w-[46.43px] h-[46.43px] border' style={{width:'46.43px',height:'46.43px',border:'1px solid #707070',borderRadius:'10px',justifyContent:'center'}}>
            <img src="/images/appleIcon.svg" alt="" />
          </Link>
          <Link href='/' className='flex justify-center items-center w-[46.43px] h-[46.43px] border' style={{width:'46.43px',height:'46.43px',border:'1px solid #707070',borderRadius:'10px',justifyContent:'center'}}>
            <img src="/images/playIcon.svg" alt="" />
          </Link>
        </div>
      </div>

    </div>
 </div>
   </div>
  )
}

export default MainLayout

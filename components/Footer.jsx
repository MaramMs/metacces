import Link from 'next/link'
import React from 'react'
import NavBar from './NavBar'

const Footer = () => {
  return (
    <div className='flex justify-between items-center'>
      <Link href='/' className='flex justify-center items-center rounded-[20px] w-[126px] h-[35.55px] text-[#FFFFFF] opacity-[13%]' style={{width:'126px', height:'35.55px', background:'rgb(112 112 112 / 26%)',justifyContent:'center', borderRadius:'14px' ,color:'#fff'}}>
        Follow Us
      
      </Link>
     
     <div className='flex items-center' style={{gap:'32.2px'}}>
     <NavBar type='right' />
     <Link href='/'>
<img src="/images/oli home buttomn.png" alt="" />
</Link>
<NavBar type='left'/>

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
  )
}

export default Footer

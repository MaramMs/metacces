import React from 'react';
import styles from '../styles/components/subMenu.module.css'
import SubMenu from './SubMenu';

const NavBar = ({type}) => {
    const navItem = [
        {
            img:'/images/oliWhite.svg'
        },
{
    img:'/images/nav2.svg'
},{
    img:'/images/nav1.png'
}

    ]
    const navBarLeft = [
        {
            img:'/images/nav3.svg'
        },{
            img:'/images/nav4.svg'
        },{
            img:'/images/nav5.svg'
        }
    ]
  return (
    <ul className={styles.navList}  >
        {
         type === 'right' ? (
            navItem.map((item) =>{
                return  <li className='bg-[#CECED2] w-[62.61px] h-[62.61px]' style={{background:'rgb(112 112 112 / 34%)' , width:'62.61px' , height:'62.61px',opacity:'100%' , borderRadius:'100%', display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid #707070'}}>

                <img src={item.img} alt="" />
                <SubMenu />
                
                    </li>
})
           ) :navBarLeft.map((item)=>{
            return <li className='bg-[#CECED2] w-[62.61px] h-[62.61px]' style={{background:'rgb(112 112 112 / 34%)' , width:'62.61px' , height:'62.61px',opacity:'100%' , borderRadius:'100%', display:'flex',justifyContent:'center',alignItems:'center',border:'1px solid #707070'}}>

                <img src={item.img} alt="" />
                <SubMenu />
                
                    </li>
           }) 
        }
   

    

  </ul>
  )
}

export default NavBar
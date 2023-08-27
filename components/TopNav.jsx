import { Select } from 'antd'
import React from 'react'
import styles from '../styles/components/topNav.module.css'
import { DownOutlined } from '@ant-design/icons';


const TopNav = () => {
  return (
    <div className='flex justify-between'>
      <h1 className='text-[#FFFAFA] text-[30px]' style={{color:'#FFFAFA',margin:'auto',fontSize:'40px'}}>Metacces</h1>
      <Select
      defaultValue="EN" 
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
  )
}

export default TopNav

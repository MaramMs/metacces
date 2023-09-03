import React from 'react'
import styles from '../styles/components/addPage.module.css'
import { Button } from 'antd'

const AddPage = () => {
  return (
    <div className={styles.addPage}>
     <Button className={styles.addPageBtn}>
        Add Page
     </Button>
    </div>
  )
}

export default AddPage
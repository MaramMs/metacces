import { Button, Input, Radio } from 'antd'
import React, { useState } from 'react'
import styles from '../styles/components/footer.module.css'
const AddIcon = () => {
  const [value, setValue] = useState();
  const onChange = (e) => {
    // e.preventDefault()
    // console.log('radio checked', e.target.value);
    // setValue(e.target.value);
  };
  return (
    <div className={styles.addIcon}>
  
<div className={styles.nameLabel}>
   <label className={styles.labelInput}>
    Name
    </label> 
    <Input className={styles.nameInput}/>
</div>

<Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Right</Radio>
      <Radio value={2}>Left</Radio>
     
    </Radio.Group>

<div className={styles.icon}>
  <label>Icon</label>
  <div className={styles.btnsIcon}>
<Button className={styles.btnLoad}>Download</Button>
<Button className={styles.btnSave}>Save</Button>
  </div>
  <p className={styles.size}>Size= <span>45*45</span></p>

</div>

    </div>
  )
}

export default AddIcon
import React from 'react'
import styles from '../styles/components/addPage.module.css'
// import { Editor } from 'react-draft-wysiwyg';
// import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Button } from 'antd'

const AddPage = ({name}) => {
  return (
    <div className={styles.addPage}>
     <Button className={styles.addPageBtn}>
        Add Page
     </Button>
   {/* <Editor
  // editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  // onEditorStateChange={this.onEditorStateChange}
/>; */}
    </div>
  )
}

export default AddPage
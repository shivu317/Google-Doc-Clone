import { MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import style from "./dialogBox.module.css"
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

const ShareDialogBox = ({docName, onClose}) => {
  return (
    <div className={style.dialogContainer}>
        <div className={style.dialogHeading}>
             <h2>Share "{docName}"</h2> 
             <HelpOutlineOutlinedIcon/>
        </div>
     
      <TextField sx={{width:"100%"}} placeholder='Add people and groups'/>
      <h4>People with access</h4>
      <div className={style.owner}> <p><AccountCircleOutlinedIcon sx={{fontSize:"2rem"}}/> You</p> <p>Owner</p></div>
      <h4>General access</h4>
      <div className={style.selectContainer}>
        <p className={style.lockIcon}><LockOutlinedIcon/></p>
        

        <div className={style.select}>
        
        <select>
        <option value="Restricted"><strong>Restricted</strong></option>
        <option value="Anyone with link">Anyone with link</option>
        </select>
        <p style={{fontSize:"small"}}>Only people with access can open with the link</p>
        </div>
        
      </div >
      <div className={style.btnContainer}>
      <button className={style.copyBtn}><LinkOutlinedIcon/> <strong>Copy Link</strong></button>
      <button className={style.doneBtn} onClick={onClose}><strong>Done</strong></button>
      </div>
     
    </div>
  )
}

export default ShareDialogBox
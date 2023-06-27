import React, { useState } from 'react'
import style from "./menuBar.module.css"
import { Tooltip } from '@mui/material'
import DescriptionIcon from '@mui/icons-material/Description';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import BasicMenu from './Menu';
import { useRecoilState } from "recoil";
import { documentName } from '../../recoil/Atom';
import {
    fileMenuItems,
    helpMenuItems,
    editMenuItems,
    viewMenuItems,
    insertMenuItems,
    formatMenuItems,
    extensionMenuItems
} from '../../menuItems'
import { Dialog, DialogContent, DialogContentText } from '@mui/material';
import ShareDialogBox from './shareDialogBox/ShareDialogBox';


const MenuBar = () => {
    // const [docName, setDocName] = useState("Untitled Document")
    const [docName,setDocName]=useRecoilState(documentName)
    const [starred, setStarred] = useState(false)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = (value) => {
      setOpen(false);
    };

    return (
        <div className={style.menuBarContainer}>
            <div className={style.menuBar}>
                <Tooltip title="Docs home">
                    <h1><DescriptionIcon sx={{ color: '#4285F4', fontSize: "3rem" }} /></h1>
                </Tooltip>

                <div className={style.menuBarContent}>
                    <div className={style.menuBarContentTop}>
                        <input type="text"
                            value={docName}
                            onChange={(e) => setDocName(e.target.value)} />
                        <Tooltip title="Star">
                            <p onClick={() => setStarred(!starred)}>
                                {starred ? <StarIcon sx={{ fontSize: "1.5rem", color: '#4285F4' }} /> : <StarOutlineIcon sx={{ fontSize: "1.5rem" }} />}
                            </p>
                        </Tooltip>
                        <Tooltip title="Move">
                            <p><DriveFileMoveOutlinedIcon sx={{ fontSize: "1.5rem" }} /></p>
                        </Tooltip>
                        <Tooltip title="See document status">
                            <p><CloudDoneOutlinedIcon sx={{ fontSize: "1.5rem" }} /></p>
                        </Tooltip>
                    </div>

                    <div className={style.menuBarContentBottom}>
                        <BasicMenu menuItems={fileMenuItems} label="File" className={style.file} />
                        <BasicMenu menuItems={editMenuItems} label="Edit" className={style.edit} />
                        <BasicMenu menuItems={viewMenuItems} label="View" className={style.view} />
                        <BasicMenu menuItems={insertMenuItems} label="Insert" className={style.insert} />
                        <BasicMenu menuItems={formatMenuItems} label="Format" className={style.format} />
                        <BasicMenu menuItems={extensionMenuItems} label="Extensions" className={style.extension} />
                        <BasicMenu menuItems={helpMenuItems} label="Help" className={style.help} />
                    </div>
                </div>
            </div>
            <div className={style.menuBarSideOptions}>
                <Tooltip title="Open Comment History" >
                    <p><CommentOutlinedIcon sx={{ fontSize: "1.8rem" }} /></p>
                </Tooltip>
                <Tooltip title="Join a call here or present this tab to the call">
                    <p><VideocamOutlinedIcon sx={{ fontSize: "2.2rem" }} /></p>
                </Tooltip>

                <button onClick={handleClickOpen}>
                    <span className={style.shareBtn}> <LockOutlinedIcon sx={{ fontSize: "1.5rem" }} />Share</span>
                    <span className={style.shareIcon}><PersonAddAltOutlinedIcon /></span>
                </button>
                <Dialog open={open} onClose={handleClose} >
                    <DialogContent sx={{width:"32rem", height:"25rem", borderRadius:"2rem"}}>
                        <DialogContentText sx={{color:'black'}}>
                            <ShareDialogBox docName={docName} onClose={handleClose}/>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
                <p><AccountCircleOutlinedIcon sx={{ fontSize: "2.5rem" }} /></p>
            </div>
        </div>
    )
}

export default MenuBar
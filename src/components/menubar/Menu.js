import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import style from "./menuBar.module.css"


 const BasicMenu= React.forwardRef(({ menuItems, label, className,onClick} ,ref )=> {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }

    function handleClickFunction(text){
        
        if(text==="New"){
            window.open(window.location.href, '_blank');
        }
        else if( text==="Open"){
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.addEventListener('change', () => {
            const selectedFile = fileInput.files[0];
            console.log(selectedFile);
            });
            fileInput.click();
        }
        else if(text==="Rename"){
            onClick();
        }
        else if(text==="Undo"){
            document.execCommand("undo", false, null)
        }
        else if(text==="Redo"){
            document.execCommand("redo", false, null)
        }
        else if(text==="Cut"){
            document.execCommand("cut", false, null)
        }
        else if(text==="Copy"){
            document.execCommand("copy", false, null)
        }
        else if(text==="Paste"){
            document.execCommand("paste", false, null)
        }
        else if(text==="Text"){
            document.execCommand("bold", false, null)
        }
    
    }
    return (
        <div className={className}>
            <p className={style.menuBarContentBottomP}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                {label}
            </p>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >


                {menuItems && menuItems.map((item, index) =>
                    <MenuItem sx={{ width: "18rem" }} onClick={handleClose}>
                        <div ref={ref} 
                            onClick={()=>handleClickFunction(item.text)}
                            key={index} 
                            style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "spaceAround" }}>

                            {item.icon}
                            {item.text}
                        </div>
                    </MenuItem>
                )}
            </Menu>
        </div>
    );
})

export default BasicMenu
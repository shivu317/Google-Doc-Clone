import React, { useRef } from "react";
import { RxImage } from "react-icons/rx";
import { Tooltip } from '@mui/material';
import style from '../../../pages/Home/Home.module.css'

function SelectImage() {

  let inputRef = useRef();
  function handleImageOpen() {
    inputRef.current.click();
  }


  function image(e) {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {

      let imgUrl = URL.createObjectURL(e.target.files[0]);
      let img = document.createElement("img");

      img.style.maxWidth = "70%"; 
      img.style.maxHeight = "70%"; 

      img.src = imgUrl;
      document.execCommand("insertHTML", false, img.outerHTML);
    }
  }
 
     
  return (
    <div>
      <button style={{border:'transparent'}} className={style.undoContainer}>
        <Tooltip title='Insert image'>
          <label htmlFor="link">
            <RxImage onClick={handleImageOpen} style={{fontSize:'1.3rem'}}/>
          </label>
        </Tooltip>


      </button>
      <input ref={inputRef} hidden onChange={image} type="file" />
    </div>
  );
}

export default SelectImage;
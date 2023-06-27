import React, { useState } from 'react';
import { AiOutlineHighlight } from "react-icons/ai";
import { Tooltip } from '@mui/material';
import style from '../FontStyle/FontStyle.module.css';

function HighlightColor() {
    const [higlightColor, setHeighlightColor] = useState("#000000");
  const handleHighlightColor = (e) => {
    setHeighlightColor(e.target.value);
    console.log(e.target.value);
    document.execCommand("backColor", false, e.target.value);
  };
  return (
    <div className={style.fontStyleBox}>
      <Tooltip title='Highlight color'>
      <button  style={{border:'transparent'}} className={style.fontStyle}>
            <label htmlFor="highlighColor">
              <AiOutlineHighlight
                style={{ zIndex: "1", color: higlightColor }}
              />
            </label>
            <input
              // className={style.input}
              id="highlighColor"
              type="color"
              value={higlightColor}
              onChange={handleHighlightColor}
            />
          </button>
      </Tooltip>
       
    </div>
  )
}

export default HighlightColor;
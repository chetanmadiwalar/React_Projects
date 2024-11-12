import React from 'react'
import { useState } from 'react'
export default function TextAnalyse(props) {
function upper(){
    let upperText=text.toUpperCase();
    settext(upperText);
    props.showAlert("Converted to uppercase!","success");
}

function lower(){
    let lowerText=text.toLowerCase();
    settext(lowerText);
    props.showAlert("Converted to lowercase!","success");
}

function removeExtraSpaces(){
  let removeSpaces=text.split(/[ ]+/);
  settext(removeSpaces.join(" "));
  props.showAlert("Extra spaces removed!","success");
}

const copy = () => {
  navigator.clipboard.writeText(text);
  props.showAlert("Copied to clipboard!","success");
}

function clear(){
    settext('');
    props.showAlert("Text cleared!","success");
}

function handleChange(e){
    settext(e.target.value);
}

const [text, settext]=useState('');
  return (
    <div className={`text-${props.mode==='light'?'dark':'light'}`}>
        <div className="form-floating">
          <div className="mt-5 ms-3 me-5">
            <h3>Enter the text to analyse:</h3>
            <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#001739':'white',color:props.mode==='light'?'black':'white'}} rows="6" id="floatingTextarea" onChange={handleChange} value={text}></textarea>
          </div>
        </div>
        <button disabled={text.length==0} className="btn btn-danger ms-3 my-3" onClick={upper}>Upper case</button>
        <button disabled={text.length==0} className="btn btn-danger ms-3 my-3" onClick={lower}>Lower case</button>
        <button disabled={text.length==0} className="btn btn-danger ms-3 my-3" onClick={clear}>Clear text</button>
        <button disabled={text.length==0} className="btn btn-danger ms-3 my-3" onClick={copy}>Copy text</button>
        <button disabled={text.length==0} className="btn btn-danger ms-3 my-3" onClick={removeExtraSpaces}>Remove extra spaces</button>
        <div className='container my-4'>
            <h3>Your text summary</h3>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} number of words and {text.length} number of characters</p>
            <h4>Preview</h4>
            <p>{text.length>0?text:"Noting to preview!"}</p>
        </div>
    </div>
  )
}

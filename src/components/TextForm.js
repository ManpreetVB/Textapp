import React,{useState} from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value)
    }

    const handleUpClick =()=>{
        //console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick =()=>{
        //console.log("Lowercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success");
    }

    const handleClearClick =()=>{
        //console.log("Lowercase was clicked" + text);
        let newText='';
        setText(newText)
        props.showAlert("Text has been cleared","success");
    }

    const handleTrimClick =()=>{
        //console.log("Lowercase was clicked" + text);
        let newText=text.trim();
        setText(newText)
        props.showAlert("Text trimed successfully","success");
    }

    const handleCopyClick =()=>{
       // console.log("copy text");
       // var newText=document.getElementById("myBox")
       // newText.select();
        navigator.clipboard.writeText(text);//this is all we need 
        props.showAlert("Text has been copied","success");
    }

    const handleExtraSpaces =()=>{
     
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed","success");
  }

    const [text,setText]=useState("");
    // setText=("");

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
  <div className="mb-3">
   <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'lightgrey':'white',color:props.mode==='dark'?'white':'black' }}id="myBox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1"onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1"onClick={handleLoClick}>Convert to Lowercase</button>
  <button disabled={text.length===0}  type="submit" className="btn btn-primary mx-1 my-1"onClick={handleClearClick}>Clear Text</button>
  <button disabled={text.length===0}  type="submit" className="btn btn-primary mx-1 my-1"onClick={handleTrimClick}>Trim Text </button>
  <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1"onClick={handleCopyClick}>Copy Text </button>
  <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1"onClick={handleExtraSpaces}>Remove Extra Spaces </button>
  
  
  </div> 
  <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}character</p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}

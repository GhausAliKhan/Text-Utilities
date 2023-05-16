import React, { useState } from 'react'

function TextForm(props) {
    const handleonChange = (event) => {
        setText(event.target.value);
    }
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearText = () => {
        let newText = "";
        setText(newText);
    }
    const handleCopyText = () => {
        // let text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
    }
    const [text, setText] = useState("");


    return (
        <div className={`container text-center text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h1 className='display-4 my-3'>Enter Text to Analyze Below</h1>
            <div className="form-group">
                <textarea className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode}`} onChange={handleonChange} value={text} style={{ resize: 'none' }} placeholder='Enter Your Text Here....' id="myBox" rows="10"></textarea>
            </div>

            <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={handleUpperCase}>Upper Case</button>
            <button disabled={text.length === 0} className="btn btn-success m-1" onClick={handleLowerCase}>Lower Case</button>
            <button disabled={text.length === 0} className="btn btn-danger m-1" onClick={handleClearText}>Clear Text</button>
            <button disabled={text.length === 0} className="btn btn-warning m-1" onClick={handleCopyText}>Copy Text</button>

            <h6 className=' display-4 my-2'>Text Summary</h6>
            <p>{text.split(/\s/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters</p>

        </div>
    )
}

export default TextForm
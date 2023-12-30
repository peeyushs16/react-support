import {React, useState} from "react";
import { Alert } from '../components/Alert';

export const TextForm = (props) => {
    const [text, setText] = useState("Enter Text");
    const [textSummary, setTextSummary] = useState("0 words and 0 characters");

    const changeToUpper = () => {
        setText(text.toUpperCase());
        showAlert("Text updated to uppercase", "success");
    }
    const changeToLower = () => {
        setText(text.toLowerCase());
        showAlert("Text updated to lowercase", "success");
    }
    const copyText = () => {
        navigator.clipboard.writeText(text);
        showAlert("Text copied", "success");
    }
    const removeExtraSpace = () => {
        setText(text.replace(/\s+/g, ' ').trim());
        showAlert("Extra space removed", "success");
    }

    const handleTextBoxChange = (event) => {
        setText(event.target.value);

        let totalWords = text.trim().split(/\s+/);
        let totalChar = text.length;

        setTextSummary(totalWords.length+" words and "+totalChar+" characters");
    };

    let myStyle = {
        color:'red',
        backgroundColor : 'transparent'

    }
    

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

    return (
        <>
        <div className="container" style={myStyle}>
            <Alert alert={alert}/>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" onChange={handleTextBoxChange} value={text} id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <div className="mb-5">
                <button type="button" onClick={changeToUpper} className="btn btn-primary me-2">Upper Case</button>
                <button type="button" onClick={changeToLower} className="btn btn-primary me-2">Lower Case</button>
                <button type="button" onClick={copyText} className="btn btn-primary me-2">Copy Text</button>
                <button type="button" onClick={removeExtraSpace} className="btn btn-primary me-2">Remove Extra Space</button>
            </div>

            
            <div className="mb-3">
                <h3>Your text summary</h3>
                {textSummary}
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                

            </div>
        </div>
        </>
    )
}
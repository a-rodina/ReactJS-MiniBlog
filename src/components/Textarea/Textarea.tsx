import { useState } from 'react';
import './Textarea.css';

function Textarea({compound, placeholderText}: {compound: string, placeholderText: string}) {

    const [textareaText, setTextareaText] = useState('');

    return ( 
        <>
            <div className='form-wrap'>
                <label htmlFor={compound} className='label'>Text</label>
                <textarea onChange={(event) => setTextareaText(event.target.value)} value={textareaText} id={compound} placeholder={placeholderText} className='textarea'></textarea>
            </div>
        </>
    );
}

export default Textarea;
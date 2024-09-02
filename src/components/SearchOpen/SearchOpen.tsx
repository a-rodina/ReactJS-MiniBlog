import './SearchOpen.css';
import { useState } from 'react';
import { TInput } from '../../types/types';

function SearchOpen({inputType, placeholderText, isActive}: TInput) {

    const [inputText, setInputText] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(true);

    return ( 
        <>
        <div className='search-form__wrap'>
            <input className='search-form__input' onChange={(event) => setInputText(event.target.value)} value={inputText} disabled={isActive} placeholder={placeholderText} type={inputType}></input>
            <div className='search-form__xmark'>
                <i className="fa-solid fa-xmark my-icon"></i>
            </div>
        </div>
        </>
    );
}

export default SearchOpen;
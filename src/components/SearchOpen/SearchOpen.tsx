import './SearchOpen.css';
import { useState } from 'react';
import { TInput } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { searchPost } from '../../slice/blog';

function SearchOpen({inputType, placeholderText, isActive, value}: TInput) {

    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch<any>();

    function getSearchText(value: any) {
        dispatch(searchPost(value))
    }

    return ( 
        <>
        <div className='search-form__wrap'>
            <input className='search-form__input' onChange={(event) => {setInputText(event.target.value); getSearchText(event.target.value)}} value={inputText} disabled={isActive} placeholder={placeholderText} type={inputType}></input>
        </div>
        </>
    );
}

export default SearchOpen;
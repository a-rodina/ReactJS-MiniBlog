import './Header.css';
import UserName from '../UserName/UserName';
import DropDown from '../DropDown/DropDown';
import { useState } from 'react';
import SearchOpen from '../SearchOpen/SearchOpen';
import { useNavigate } from 'react-router-dom';

function Header() {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const nav = useNavigate();

    function handleSearch() {
        setIsSearchOpen(!isSearchOpen);
        nav('/search');
    }

    return ( 
    <>
    <header className='header'>
        <div onClick={() => setIsDropDownOpen(!isDropDownOpen)} className='header-left'>
            {isDropDownOpen ? <i className="fa-solid fa-xmark my-icon"></i> : <i className="fa-solid fa-bars my-icon"></i>}
        </div>
        {isSearchOpen ? <SearchOpen inputType='text' placeholderText='Search...' isActive={false}></SearchOpen> : null}
        <div className='header-right'>
            <div onClick={handleSearch} className='search'>
            <i className="fa-solid fa-magnifying-glass my-icon"></i>
            </div>
            <UserName fullName='Artem Malkin'></UserName>
        </div>
    </header>
    {isDropDownOpen ? <DropDown></DropDown> : null}
    </> 
    );
}

export default Header;
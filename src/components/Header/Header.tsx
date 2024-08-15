import './Header.css';
import UserName from '../UserName/UserName';
import DropDown from '../DropDown/DropDown';
import { useState } from 'react';

function Hader() {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    return ( 
    <>
    <header className='header'>
        <div onClick={() => setIsDropDownOpen(!isDropDownOpen)} className='header-left'>
            {isDropDownOpen ? <i className="fa-solid fa-xmark my-icon"></i> : <i className="fa-solid fa-bars my-icon"></i>}
        </div>
        <div className='header-right'>
            <div className='search'>
            <i className="fa-solid fa-magnifying-glass my-icon"></i>
            </div>
            <UserName fullName='Artem Malkin'></UserName>
        </div>
    </header>
    {isDropDownOpen ? <DropDown></DropDown> : null}
    </> 
    );
}

export default Hader;
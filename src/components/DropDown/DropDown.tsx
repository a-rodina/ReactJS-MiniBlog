import { useContext } from 'react';
import './DropDown.css';
import { createdContext } from '../../providers/ThemeContext';
import { Link } from 'react-router-dom';


function DropDown() {

    const [color, setColor] = useContext(createdContext)

    return ( 
    <>
    <nav className='drop-down'>
        <Link to={`/`} className='drop-down__item'>Home</Link>
        <div className='drop-down__item'>
            <div className='drop-down__item-icon' onClick={() => setColor('light')}>
                <i className="fa-regular fa-sun my-icons"></i>
            </div>
            <div className='drop-down__item-icon' onClick={() => setColor('dark')}>
                <i className="fa-regular fa-moon my-icons"></i>
            </div>
        </div>
    </nav>
    </>
    );
}

export default DropDown;
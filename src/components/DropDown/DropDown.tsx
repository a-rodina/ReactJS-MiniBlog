import './DropDown.css';


function DropDown() {
    return ( 
    <>
    <nav className='drop-down'>
        <div className='drop-down__item'>Home</div>
        <div className='drop-down__item'>
            <div className='drop-down__item-icon'>
                <i className="fa-regular fa-sun my-icons"></i>
            </div>
            <div className='drop-down__item-icon'>
                <i className="fa-regular fa-moon my-icons"></i>
            </div>
        </div>
    </nav>
    </>
    );
}

export default DropDown;
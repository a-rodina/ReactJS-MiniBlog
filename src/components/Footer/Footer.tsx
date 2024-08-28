import './Footer.css';
import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';

function Footer() {

    const [color, setColor] = useContext(createdContext);

    return ( 
        <footer className={`footer-${color}`}>
            <div className='container'>
                <div className={`footer-block-${color}`}>
                    <div className='footer-block__text'>©2024 Blogfolio</div>
                    <div className='footer-block__text'>All rights reserved</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
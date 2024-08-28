import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import './CardBig.css';
import { TObject } from '../../types/types';

function CardBig({date, title, description, image}: TObject) {

    const [color, setColor] = useContext(createdContext);

    return (
    <>
    <div className={`card-big__wrap-${color}`}>
        <div className='card-big__post'>
            <div className='left-side-card'>
                <p className='card-big__date'>{date}</p>
                <h2 className={`card-big__title-${color}`}>{title}</h2>
                <div className='card-big__description'>{description}</div>
            </div>
            <div className='right-side-card'>
                <img src={image} alt='image'></img>
            </div>
        </div>
        <div className='card-big__footer'>
            <div className='card-big__bock-icon'>
                <div className='card-big__icon'>
                    <i className={`fa-regular fa-thumbs-up my-icons-${color}`}></i>
                </div>
                <div className='card-big__icon'>
                    <i className={`fa-regular fa-thumbs-down my-icons-down-${color}`}></i>
                </div>
            </div>
            <div className='card-big__bock-icon'>
                <div className='card-big__icon'>
                    <i className={`fa-regular fa-bookmark my-icons-${color}`}></i>
                </div>
                <div className='card-big__icon'>
                <i className={`fa-solid fa-ellipsis my-icons-${color}`}></i>
                </div>
            </div>
        </div>
    </div>
    
    </>
    );
}

export default CardBig;
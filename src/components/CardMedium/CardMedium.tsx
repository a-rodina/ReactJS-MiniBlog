import './CardMedium.css';
import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import { TObject } from '../../types/types';

function CardMedium({date, title, image}: TObject) {

    const [color, setColor] = useContext(createdContext);

    return ( 
    <>
        <div className={`card-medium__wrap-${color}`}>
            <div className='card-medium__image'>
                <img src={image} alt='image'></img>
            </div>
            <p className='card-medium__date'>{date}</p>
            <h3 className={`card-medium__title-${color}`}>{title}</h3>
            <div className='card-medium__footer'>
                <div className='card-medium__bock-icon'>
                    <div className='card-medium__icon'>
                        <i className={`fa-regular fa-thumbs-up my-icons-${color}`}></i>
                    </div>
                    <div className='card-medium__icon'>
                        <i className={`fa-regular fa-thumbs-down my-icons-down-${color}`}></i>
                    </div>
                </div>
                <div className='card-medium__bock-icon'>
                    <div className='card-medium__icon'>
                        <i className={`fa-regular fa-bookmark my-icons-${color}`}></i>
                    </div>
                    <div className='card-medium__icon'>
                        <i className={`fa-solid fa-ellipsis my-icons-${color}`}></i>
                    </div>
                </div>
            </div>
        </div>
    </> 
    );
}

export default CardMedium;
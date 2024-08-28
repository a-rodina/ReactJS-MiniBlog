import './CardSmall.css';
import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import { TObject } from '../../types/types';

function CardSmall({date, title, image}: TObject) {

    const [color, setColor] = useContext(createdContext);

    return ( 
    <>
        <div className={`card-small__wrap-${color}`}>
            <div className='card-small__post'>
                <div className='card-small__post-left-side'>
                    <p className='card-small__date'>{date}</p>
                    <h2 className={`card-small__title-${color}`}>{title}</h2>
                </div>
                <div className='card-small__post-right-side'>
                    <img src={image} alt='image'></img>
                </div>
            </div>
            <div className='card-small__footer'>
                <div className='card-small__bock-icon'>
                    <div className='card-small__icon'>
                        <i className={`fa-regular fa-thumbs-up my-icons-${color}`}></i>
                    </div>
                    <div className='card-small__icon'>
                        <i className={`fa-regular fa-thumbs-down my-icons-down-${color}`}></i>
                    </div>
                </div>
                <div className='card-small__bock-icon'>
                    <div className='card-small__icon'>
                        <i className={`fa-regular fa-bookmark my-icons-${color}`}></i>
                    </div>
                    <div className='card-small__icon'>
                        <i className={`fa-solid fa-ellipsis my-icons-${color}`}></i>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default CardSmall;
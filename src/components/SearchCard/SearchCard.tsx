import './SearchCard.css';
import { TObject } from '../../types/types';
import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';

function SearchCard({date, title, image}: TObject) {

    const [color, setColor] = useContext(createdContext);

    return ( 
    <>
        <div className={`card-search__wrap-${color}`}>
            <div className='card-search__post'>
                <div className='card-search__post-left-side'>
                    <img src={image} alt='image'></img>
                </div>
                <div className='card-search__post-right-side'>
                    <p className='card-search__date'>{date}</p>
                    <h2 className={`card-search__title-${color}`}>{title}</h2>
                </div>
            </div>
            <div className='card-search__footer'>
                <div className='card-search__block-icon'>
                    <div className='card-search__icon'>
                        <i className={`fa-regular fa-thumbs-up my-icons-${color}`}></i>
                    </div>
                    <div className='card-search__icon'>
                        <i className={`fa-regular fa-thumbs-down my-icons-down-${color}`}></i>
                    </div>
                </div>
                <div className='card-search__block-icon'>
                    <div className='card-search__icon'>
                        <i className={`fa-regular fa-bookmark my-icons-${color}`}></i>
                    </div>
                    <div className='card-search__icon'>
                        <i className={`fa-solid fa-ellipsis my-icons-${color}`}></i>
                    </div>
                </div>
            </div>
        </div>
    </> 
    );
}

export default SearchCard;
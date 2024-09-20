import './CardMedium.css';
import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import { TObject } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../slice/blog';
import { Link } from 'react-router-dom';

function CardMedium({post, addToFavorites}: TObject) {

    const [color, setColor] = useContext(createdContext);

    const dispatch = useDispatch();
    const data = useSelector((state:any) => state.blog)

    return ( 
    <>
        <div className={`card-medium__wrap-${color}`}>
            <Link to={`/${post.id}`}>
                <div className='card-medium__image'>
                    <img src={post.image} alt='image'></img>
                </div>
                <p className='card-medium__date'>{post.date}</p>
                <h3 className={`card-medium__title-${color}`}>{post.title}</h3>
            </Link>
            <div className='card-medium__footer'>
                <div className='card-medium__bock-icon'>
                    <div className='card__icon' onClick={() => dispatch(increment())}>
                        <i className={`fa-regular fa-thumbs-up my-icons-${color}`}></i>
                        <div className={`card__likes-${color}`}>{data.like}</div>
                    </div>
                    <div className='card__icon' onClick={() => dispatch(decrement())}>
                        <i className={`fa-regular fa-thumbs-down my-icons-down-${color}`}></i>
                        <div className={`card__likes-${color}`}>{data.dislike}</div>
                    </div>
                </div>
                <div className='card-medium__bock-icon'>
                    <div className='card-medium__icon' onClick={() => addToFavorites(post)}>
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
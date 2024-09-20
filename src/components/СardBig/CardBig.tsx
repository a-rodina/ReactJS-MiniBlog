import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import './CardBig.css';
import { TObject } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../slice/blog';
import { Link } from 'react-router-dom';

function CardBig({post, addToFavorites}: TObject) {

    const [color, setColor] = useContext(createdContext);

    const dispatch = useDispatch();
    const data = useSelector((state:any) => state.blog)

    return (
    <>
    <div className={`card-big__wrap-${color}`}>
        <Link to={`/${post.id}`}>
            <div id="flex" className='card-big__post'>
            <div id='a' className='left-side-card'>
                <p className='card-big__date'>{post.date}</p>
                <h2 className={`card-big__title-${color}`}>{post.title}</h2>
                <div className='card-big__description'>{post.description}</div>
            </div>
            <div id='b' className='right-side-card'>
                <img src={post.image} alt='image'></img>
            </div>
            </div>
        </Link>        
        <div className='card-big__footer'>
            <div className='card-big__bock-icon'>
                <div className='card__icon' onClick={() => dispatch(increment())}>
                    <i className={`fa-regular fa-thumbs-up my-icons-${color}`}></i>
                    <div className={`card__likes-${color}`}>{data.like}</div>
                </div>
                <div className='card__icon' onClick={() => dispatch(decrement())}>
                    <i className={`fa-regular fa-thumbs-down my-icons-down-${color}`}></i>
                    <div className={`card__likes-${color}`}>{data.dislike}</div>
                </div>
            </div>
            <div className='card-big__bock-icon'>
                <div className='card__icon' onClick={() => addToFavorites(post)}>
                    <i className={`fa-regular fa-bookmark my-icons-${color}`}></i>
                </div>
                <div className='card__icon'>
                <i className={`fa-solid fa-ellipsis my-icons-${color}`}></i>
                </div>
            </div>
        </div>
    </div>
    
    </>
    );
}

export default CardBig;
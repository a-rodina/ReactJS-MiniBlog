import './CardSmall.css';
import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import { TObject } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../slice/blog';
import { Link } from 'react-router-dom';

function CardSmall({post, addToFavorites}: TObject) {

    const [color, setColor] = useContext(createdContext);

    const dispatch = useDispatch();
    const data = useSelector((state:any) => state.blog)

    return ( 
    <>
        <div className={`card-small__wrap-${color}`}>
            <Link to={`/${post.id}`}>
                <div id='flex' className='card-small__post'>
                    <div id='a' className='card-small__post-left-side'>
                        <p className='card-small__date'>{post.date}</p>
                        <h2 className={`card-small__title-${color}`}>{post.title}</h2>
                    </div>
                    <div id='b' className='card-small__post-right-side'>
                        <img src={post.image} alt='image'></img>
                    </div>
                </div>
            </Link>
            <div className='card-small__footer'>
                <div className='card-small__bock-icon'>
                    <div className='card__icon' onClick={() => dispatch(increment())}>
                        <i className={`fa-regular fa-thumbs-up my-icons-${color}`}></i>
                        <div className={`card__likes-${color}`}>{data.like}</div>
                    </div>
                    <div className='card__icon' onClick={() => dispatch(decrement())}>
                        <i className={`fa-regular fa-thumbs-down my-icons-down-${color}`}></i>
                        <div className={`card__likes-${color}`}>{data.dislike}</div>
                    </div>
                </div>
                <div className='card-small__bock-icon'>
                    <div className='card-small__icon' onClick={() => addToFavorites(post)}>
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
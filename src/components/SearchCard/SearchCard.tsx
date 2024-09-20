import './SearchCard.css';
import { TObject } from '../../types/types';
import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../slice/blog';

function SearchCard({post, addToFavorites}: TObject) {

    const [color, setColor] = useContext(createdContext);

    const dispatch = useDispatch();
    const data = useSelector((state:any) => state.blog)

    return ( 
    <>
        <div className={`card-search__wrap-${color}`}>
            <Link to={`/${post.id}`}>
                <div className='card-search__post'>
                    <div className='card-search__post-left-side'>
                        <img src={post.image} alt='image'></img>
                    </div>
                    <div className='card-search__post-right-side'>
                        <p className='card-search__date'>{post.date}</p>
                        <h2 className={`card-search__title-${color}`}>{post.title}</h2>
                    </div>
                </div>
            </Link>  
            <div className='card-search__footer'>
                <div className='card-search__block-icon'>
                    <div className='card__icon' onClick={() => dispatch(increment())}>
                        <i className={`fa-regular fa-thumbs-up my-icons-${color}`}></i>
                        <div className={`card__likes-${color}`}>{data.like}</div>
                    </div>
                    <div className='card__icon' onClick={() => dispatch(decrement())}>
                        <i className={`fa-regular fa-thumbs-down my-icons-down-${color}`}></i>
                        <div className={`card__likes-${color}`}>{data.dislike}</div>
                    </div>
                </div>
                <div className='card-search__block-icon'>
                    <div className='card-search__icon' onClick={() => addToFavorites(post)}>
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
import './SelectedPost.css';
import { TData } from '../../types/types';
import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../slice/blog';
import { addToFavorite } from '../../slice/blog';

function SelectedPost({post}: {post: TData}) {

    const [color, setColor] = useContext(createdContext);

    const dispatch = useDispatch();
    const data = useSelector((state:any) => state.blog);

    function addToFavorites(post: any) {
        dispatch(addToFavorite(post))
    }

    return ( 
    <>
        <div className='container'>
                <nav className='selected-page__navigation'>
                    <Link to={`/`} className={`selected-page__navigation-item-${color}`}>Home</Link>
                    <div className={`selected-page__navigation-item-${color}`}>{post.id}</div>
                </nav>
                <h1 className={`selected-page__title-${color}`}>{post.title}</h1>
                <div className='selected-page__description-wrap'>
                    <div className='selected-page__image-wrap'>
                        <img alt='image' src={post.image} className='selected-page__image'/>
                    </div>                
                    <p className={`selected-page__text-${color}`}>{post.description}</p>
                    <div className='selected-page__assessment-footer'>
                        <div className='selected-page__assessment'>
                            <div className={`selected-page__assessment-icon-${color}`} onClick={() => dispatch(increment())}>
                                <i className={`fa-regular fa-thumbs-up my-icons-${color}`}></i>
                                <div className={`selected-post__likes-${color}`}>{data.like}</div>
                            </div>
                            <div className={`selected-page__assessment-icon-${color}`} onClick={() => dispatch(decrement())}>
                                <i className={`fa-regular fa-thumbs-down my-icons-down-${color}`}></i>
                                <div className={`selected-post__likes-${color}`}>{data.dislike}</div>
                            </div>
                        </div>
                        <div className={`selected-page__add-icon-${color}`} onClick={() => addToFavorites(post)}>
                            <i className={`fa-regular fa-bookmark my-icons-${color}`}></i>
                            <p>Add to favorites</p>
                        </div>
                    </div>
                </div>        
        </div>
    </>
    );
}

export default SelectedPost;
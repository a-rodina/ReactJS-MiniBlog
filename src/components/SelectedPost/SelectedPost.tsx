import './SelectedPost.css';
import { TData } from '../../types/types';
import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';

function SelectedPost({post}: {post: TData}) {

    const [color, setColor] = useContext(createdContext);

    return ( 
    <>
        <div className='container'>
                <nav className='selected-page__navigation'>
                    <div className={`selected-page__navigation-item-${color}`}>Home</div>
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
                            <div className={`selected-page__assessment-icon-${color}`}>
                                <i className={`fa-regular fa-thumbs-up my-icons-${color}`}></i>
                            </div>
                            <div className={`selected-page__assessment-icon-${color}`}>
                                <i className={`fa-regular fa-thumbs-down my-icons-down-${color}`}></i>
                            </div>
                        </div>
                        <div className={`selected-page__add-icon-${color}`}>
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
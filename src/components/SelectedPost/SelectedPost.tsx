import './SelectedPost.css';
import { TPost } from '../../data';

function SelectedPost({post}: {post: TPost}) {
    return ( 
    <>
        <div className='container'>
                <nav className='selected-page__navigation'>
                    <div className='selected-page__navigation-item'>Home</div>
                    <div className='selected-page__navigation-item'>{post.id}</div>
                </nav>
                <h1 className='selected-page__title'>{post.title}</h1>
                <div className='selected-page__description-wrap'>
                    <div className='selected-page__image-wrap'>
                        <img alt='image' src={post.image} className='selected-page__image'/>
                    </div>                
                    <p className='selected-page__text'>{post.description}</p>
                    <div className='selected-page__assessment-footer'>
                        <div className='selected-page__assessment'>
                            <div className='selected-page__assessment-icon'>
                                <i className="fa-regular fa-thumbs-up my-icons"></i>
                            </div>
                            <div className='selected-page__assessment-icon'>
                                <i className="fa-regular fa-thumbs-down my-icons-down"></i>
                            </div>
                        </div>
                        <div className='selected-page__add-icon'>
                            <i className="fa-regular fa-bookmark my-icons"></i>
                            <p>Add to favorites</p>
                        </div>
                    </div>
                </div>        
        </div>
    </>
    );
}

export default SelectedPost;
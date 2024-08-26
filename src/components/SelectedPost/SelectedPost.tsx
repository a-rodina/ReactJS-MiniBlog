import './SelectedPost.css';
import { TData } from '../../data';

let data = {
    "id": 1,
    "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png",
    "text": "фыв",
    "date": "2021-10-06",
    "lesson_num": 123,
    "title": "фывфывфыв",
    "description": "default default default default default default default default default default default default default default default default default default default default default default default default default default default",
    "author": 7
}

function SelectedPost({post}: {post: TData[]}) {
    return ( 
    <>
        <div className='container'>
                <nav className='selected-page__navigation'>
                    <div className='selected-page__navigation-item'>Home</div>
                    <div className='selected-page__navigation-item'>{post[0].id}</div>
                </nav>
                <h1 className='selected-page__title'>{post[0].title}</h1>
                <div className='selected-page__description-wrap'>
                    <div className='selected-page__image-wrap'>
                        <img alt='image' src={post[0].image} className='selected-page__image'/>
                    </div>                
                    <p className='selected-page__text'>{post[0].description}</p>
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
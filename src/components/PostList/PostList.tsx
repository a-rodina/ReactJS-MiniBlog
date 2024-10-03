import './PostList.css';
import { TData } from '../../types/types';
import CardBig from '../СardBig/CardBig';
import CardMedium from '../CardMedium/CardMedium';
import CardSmall from '../CardSmall/CardSmall';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../../slice/blog';



function PostList({posts}: {posts: TData[]}) {

    const dispatch = useDispatch();

    function addToFavorites(post: any) {
        dispatch(addToFavorite(post))
    }

    return ( 
    <>
        <div className='container'>
            <div className='post-list__wrap'>
                <div className='big'><CardBig addToFavorites={addToFavorites} post={posts[0]}></CardBig></div>
                <div className='medium1'><CardMedium addToFavorites={addToFavorites} post={posts[1]}></CardMedium></div>
                <div className='medium2'><CardMedium addToFavorites={addToFavorites} post={posts[2]}></CardMedium></div>
                <div className='medium3'><CardMedium addToFavorites={addToFavorites} post={posts[3]}></CardMedium></div>
                <div className='medium4'><CardMedium addToFavorites={addToFavorites} post={posts[4]}></CardMedium></div>
                <div className='small1'><CardSmall addToFavorites={addToFavorites} post={posts[5]}></CardSmall></div>
                <div className='small2'><CardSmall addToFavorites={addToFavorites} post={posts[6]}></CardSmall></div>
                <div className='small3'><CardSmall addToFavorites={addToFavorites} post={posts[7]}></CardSmall></div>
                <div className='small4'><CardSmall addToFavorites={addToFavorites} post={posts[8]}></CardSmall></div>
                <div className='small5'><CardSmall addToFavorites={addToFavorites} post={posts[9]}></CardSmall></div>
                <div className='small6'><CardSmall addToFavorites={addToFavorites} post={posts[10]}></CardSmall></div>          
            </div>
        </div>            
    </> 
    );
}

export default PostList;
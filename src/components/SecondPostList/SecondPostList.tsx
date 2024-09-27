import './SecondPostList.css';
import { TData } from '../../types/types';
import CardMedium from '../CardMedium/CardMedium';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../../slice/blog';

function SecondPostList({posts}: {posts: TData[]}) {

    const dispatch = useDispatch();

    function addToFavorites(post: any) {
        dispatch(addToFavorite(post))
    }

    return ( <>
        <div className="cardsList">
        <ul>
            {posts.map((item: any, index: any) => <CardMedium addToFavorites={addToFavorites} key={item.id} post={item[index]}/>)}
        </ul>
    </div>
        
    </> );
}

export default SecondPostList;
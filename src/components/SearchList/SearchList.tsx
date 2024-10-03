import './SearchList.css';
import { TData } from '../../types/types';
import SearchCard from '../SearchCard/SearchCard';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../../slice/blog';

function SearchList({posts}: {posts: TData[]}) {

    const dispatch = useDispatch();

    function addToFavorites(post: any) {
        dispatch(addToFavorite(post))
    }

    return ( 
    <>
        <div className='container'>
                {posts.map((item: any, index: any) => <div className='search-card'><SearchCard addToFavorites={addToFavorites} post={item}></SearchCard></div>)}
        </div> 
    </> 
    );
}

export default SearchList;
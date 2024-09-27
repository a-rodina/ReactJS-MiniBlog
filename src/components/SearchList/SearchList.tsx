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

    // function createSearchList(posts: any) {
    //     posts.map((item: any, index: any) => {
    //     <div className='search-card'><SearchCard addToFavorites={addToFavorites} post={item[index]}></SearchCard></div>
    //     })
    // }

    return ( 
    <>
        <div className='container'>
                <div className='search-card'><SearchCard addToFavorites={addToFavorites} post={posts[0]}></SearchCard></div>
                <div className='search-card'><SearchCard addToFavorites={addToFavorites} post={posts[1]}></SearchCard></div>
                <div className='search-card'><SearchCard addToFavorites={addToFavorites} post={posts[2]}></SearchCard></div>
                <div className='search-card'><SearchCard addToFavorites={addToFavorites} post={posts[3]}></SearchCard></div>
                <div className='search-card'><SearchCard addToFavorites={addToFavorites} post={posts[4]}></SearchCard></div> 
                <div className='search-card'><SearchCard addToFavorites={addToFavorites} post={posts[5]}></SearchCard></div>        
        </div> 
    </> 
    );
}

export default SearchList;
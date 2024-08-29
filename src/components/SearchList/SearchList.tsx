import './SearchList.css';
import { TData } from '../../types/types';
import SearchCard from '../SearchCard/SearchCard';

function SearchList({posts}: {posts: TData[]}) {
    return ( 
    <>
        <div className='container'>
                <div className='search-card'><SearchCard date={posts[0].date} title={posts[0].title} image={posts[0].image}></SearchCard></div>
                <div className='search-card'><SearchCard date={posts[1].date} title={posts[1].title} image={posts[1].image}></SearchCard></div>
                <div className='search-card'><SearchCard date={posts[2].date} title={posts[2].title} image={posts[2].image}></SearchCard></div>
                <div className='search-card'><SearchCard date={posts[3].date} title={posts[3].title} image={posts[3].image}></SearchCard></div>
                <div className='search-card'><SearchCard date={posts[4].date} title={posts[4].title} image={posts[4].image}></SearchCard></div> 
                <div className='search-card'><SearchCard date={posts[5].date} title={posts[5].title} image={posts[5].image}></SearchCard></div>        
        </div> 
    </> 
    );
}

export default SearchList;
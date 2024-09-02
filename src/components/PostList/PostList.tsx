import './PostList.css';
import { TData } from '../../types/types';
import CardBig from '../СardBig/CardBig';
import CardMedium from '../CardMedium/CardMedium';
import CardSmall from '../CardSmall/CardSmall';
import { Link } from 'react-router-dom';



function PostList({posts}: {posts: TData[]}) {
    return ( 
    <>
        <div className='container'>
            <div className='post-list__wrap'>
                <Link to={`/${posts[0].id}`} className='big'><CardBig date={posts[0].date} title={posts[0].title} description={posts[0].description} image={posts[0].image}></CardBig></Link>
                <Link to={`/${posts[1].id}`} className='medium1'><CardMedium date={posts[1].date} title={posts[1].title} image={posts[1].image}></CardMedium></Link>
                <Link to={`/${posts[2].id}`} className='medium2'><CardMedium date={posts[2].date} title={posts[2].title} image={posts[2].image}></CardMedium></Link>
                <Link to={`/${posts[3].id}`} className='medium3'><CardMedium date={posts[3].date} title={posts[3].title} image={posts[3].image}></CardMedium></Link>
                <Link to={`/${posts[4].id}`} className='medium4'><CardMedium date={posts[4].date} title={posts[4].title} image={posts[4].image}></CardMedium></Link>
                <Link to={`/${posts[5].id}`} className='small1'><CardSmall date={posts[5].date} title={posts[5].title} image={posts[5].image}></CardSmall></Link>
                <Link to={`/${posts[6].id}`} className='small2'><CardSmall date={posts[6].date} title={posts[6].title} image={posts[6].image}></CardSmall></Link>
                <Link to={`/${posts[7].id}`} className='small3'><CardSmall date={posts[7].date} title={posts[7].title} image={posts[7].image}></CardSmall></Link>
                <Link to={`/${posts[8].id}`} className='small4'><CardSmall date={posts[8].date} title={posts[8].title} image={posts[8].image}></CardSmall></Link>
                <Link to={`/${posts[9].id}`} className='small5'><CardSmall date={posts[9].date} title={posts[9].title} image={posts[9].image}></CardSmall></Link>
                <Link to={`/${posts[10].id}`} className='small6'><CardSmall date={posts[10].date} title={posts[10].title} image={posts[10].image}></CardSmall></Link>          
            </div>
        </div>            
    </> 
    );
}

export default PostList;
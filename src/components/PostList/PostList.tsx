import { TData } from '../../data';
import CardBig from '../СardBig/CardBig';
import CardMedium from '../CardMedium/CardMedium';
import CardSmall from '../CardSmall/CardSmall';
import './PostList.css';


function PostList({posts}: {posts: TData[]}) {
    return ( 
    <>
        <div className='container'>
            <div className='post-list__wrap'>
                <div className='big'><CardBig date={posts[0].date} title={posts[0].title} description={posts[0].description} image={posts[0].image}></CardBig></div>
                <div className='medium1'><CardMedium date={posts[1].date} title={posts[1].title} image={posts[1].image}></CardMedium></div>
                <div className='medium2'><CardMedium date={posts[2].date} title={posts[2].title} image={posts[2].image}></CardMedium></div>
                <div className='medium3'><CardMedium date={posts[3].date} title={posts[3].title} image={posts[3].image}></CardMedium></div>
                <div className='medium4'><CardMedium date={posts[4].date} title={posts[4].title} image={posts[4].image}></CardMedium></div>
                <div className='small1'><CardSmall date={posts[5].date} title={posts[5].title} image={posts[5].image}></CardSmall></div>
                <div className='small2'><CardSmall date={posts[6].date} title={posts[6].title} image={posts[6].image}></CardSmall></div>
                <div className='small3'><CardSmall date={posts[7].date} title={posts[7].title} image={posts[7].image}></CardSmall></div>
                <div className='small4'><CardSmall date={posts[8].date} title={posts[8].title} image={posts[8].image}></CardSmall></div>
                <div className='small5'><CardSmall date={posts[9].date} title={posts[9].title} image={posts[9].image}></CardSmall></div>
                <div className='small6'><CardSmall date={posts[10].date} title={posts[10].title} image={posts[10].image}></CardSmall></div>          
            </div>
        </div>            
    </> 
    );
}

export default PostList;
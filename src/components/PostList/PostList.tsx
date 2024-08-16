import { data } from '../../data';
import CardBig from '../СardBig/CardBig';
import CardMedium from '../CardMedium/CardMedium';
import CardSmall from '../CardSmall/CardSmall';
import './PostList.css';


function PostList() {
    return ( 
    <>
        <div className='container'>
            <div className='post-list__wrap'>
                <div className='big'><CardBig date={data[0].date} title={data[0].title} description={data[0].description} image={data[0].image}></CardBig></div>
                <div className='medium1'><CardMedium date={data[1].date} title={data[1].title} image={data[1].image}></CardMedium></div>
                <div className='medium2'><CardMedium date={data[2].date} title={data[2].title} image={data[2].image}></CardMedium></div>
                <div className='medium3'><CardMedium date={data[3].date} title={data[3].title} image={data[3].image}></CardMedium></div>
                <div className='medium4'><CardMedium date={data[4].date} title={data[4].title} image={data[4].image}></CardMedium></div>
                <div className='small1'><CardSmall date={data[5].date} title={data[5].title} image={data[5].image}></CardSmall></div>
                <div className='small2'><CardSmall date={data[6].date} title={data[6].title} image={data[6].image}></CardSmall></div>
                <div className='small3'><CardSmall date={data[7].date} title={data[7].title} image={data[7].image}></CardSmall></div>
                <div className='small4'><CardSmall date={data[8].date} title={data[8].title} image={data[8].image}></CardSmall></div>
                <div className='small5'><CardSmall date={data[9].date} title={data[9].title} image={data[9].image}></CardSmall></div>
                <div className='small6'><CardSmall date={data[10].date} title={data[10].title} image={data[10].image}></CardSmall></div>          
            </div>
        </div>            
    </> 
    );
}

export default PostList;
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
        <section className="second-card-list">
            <div className='container'>
                <ul className='card-list'>
                    {posts.map((item: any) => <li className='card-list-item' key={item.id}><CardMedium addToFavorites={addToFavorites} post={item}/></li>)}
                </ul>
            </div>
    </section>
    </> );
}

export default SecondPostList;
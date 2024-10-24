import './AllPosts.css';
import { useEffect, useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import PostList from "../../components/PostList/PostList";
import Title from '../../components/Title/Title';
import Tabs from '../../components/Tabs/Tabs';
import Spinner from '../../components/Spinner/Spinner';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import SecondPostList from '../../components/SecondPostList/SecondPostList';
import { decrementOffset, getPosts, incrementOffset } from '../../slice/blog';

function AllPosts() {

    const [color, setColor] = useContext(createdContext);

    const data = useSelector((state: any) => state.blog);
    const dispatch = useDispatch<any>();

    function checkActiveTab() {
        if (data.activeTab === 'all') {
            return (data.posts.length === 0 ? <Spinner/> : <PostList posts={data.posts}></PostList>);
        } else if (data.activeTab === 'favorites') {
            return (data.favorites.length === 0 ? <div className='container'><p className={`favorites-text-${color}`}>No favorites</p></div> : <SecondPostList posts={data.favorites}></SecondPostList>);
        }
    }

    function goToNext() {
        dispatch(incrementOffset())
    }

    function goToBack(){
        dispatch(decrementOffset())
    }

    useEffect(() => {
        dispatch(getPosts(data.offset))
    }, [data.offset])

    return ( 
    <>
        <div className={`section__all-posts-${color}`}>
            <div className="container">
                <Title style={`main-title-${color}`} content='Blog'></Title>
                <Tabs style={`tabs-wrap-${color}`}></Tabs>
            </div>
            {checkActiveTab()}
            <div className='container'>
                <div className='pagination'>
                    <div className='prev' onClick={goToBack}>
                        <div className='block-icon'>
                            <i className={`fa-solid fa-arrow-left pagination-icons-${color}`}></i>
                        </div>
                        <div className={`prev-next-button-${color}`}>Previous</div>
                    </div>
                    <div className='next' onClick={goToNext}>
                        <div className={`prev-next-button-${color}`}>Next</div>
                        <div className='block-icon'>
                            <i className={`fa-solid fa-arrow-right pagination-icons-${color}`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </> 
    );
}

export default AllPosts;
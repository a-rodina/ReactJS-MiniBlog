import './SelectedPage.css';
import { useEffect, useState } from 'react';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SelectedPost from "../../components/SelectedPost/SelectedPost";
import Spinner from '../../components/Spinner/Spinner';

function SelectedPage() {

    const [post, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?limit=11')
            .then(response => response.json())
            .then(json => setPosts(json.results))
    }, [])

    return ( 
    <>
        <Header></Header>
        <div className='background-light'>
            {post.length === 0 ? <Spinner/> : <SelectedPost post={post}></SelectedPost>}
        </div>
        <Footer></Footer>    
    </>
    );
}

export default SelectedPage;
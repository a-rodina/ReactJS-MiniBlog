import './AllPosts.css';
import { useEffect, useState } from 'react';
import Header from "../../components/Header/Header";
import PostList from "../../components/PostList/PostList";
import Title from '../../components/Title/Title';
import Tabs from '../../components/Tabs/Tabs';
import Spinner from '../../components/Spinner/Spinner';
import Footer from '../../components/Footer/Footer';

function AllPosts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?limit=11')
            .then(response => response.json())
            .then(json => setPosts(json.results))
    }, [])

    return ( 
    <>
        <Header></Header>
        <div className="section__all-posts-light">
            <div className="container">
                <Title style='main-title-light' content='Blog'></Title>
                <Tabs style='tabs-wrap-light'></Tabs>
            </div>
            {posts.length === 0 ? <Spinner/> : <PostList posts={posts}></PostList>}
        </div>
        <Footer></Footer>
    </> 
    );
}

export default AllPosts;
import './AllPosts.css';
import { useEffect, useState, useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import Header from "../../components/Header/Header";
import PostList from "../../components/PostList/PostList";
import Title from '../../components/Title/Title';
import Tabs from '../../components/Tabs/Tabs';
import Spinner from '../../components/Spinner/Spinner';
import Footer from '../../components/Footer/Footer';

function AllPosts() {

    const [posts, setPosts] = useState([]);
    const [color, setColor] = useContext(createdContext);

    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?limit=11')
            .then(response => response.json())
            .then(json => setPosts(json.results))
    }, [])

    return ( 
    <>
        <Header></Header>
        <div className={`section__all-posts-${color}`}>
            <div className="container">
                <Title style={`main-title-${color}`} content='Blog'></Title>
                <Tabs style={`tabs-wrap-${color}`}></Tabs>
            </div>
            {posts.length === 0 ? <Spinner/> : <PostList posts={posts}></PostList>}
        </div>
        <Footer></Footer>
    </> 
    );
}

export default AllPosts;
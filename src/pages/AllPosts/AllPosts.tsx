import './AllPosts.css';
import Header from "../../components/Header/Header";
import PostList from "../../components/PostList/PostList";
import Title from '../../components/Title/Title';
import Tabs from '../../components/Tabs/Tabs';

function AllPosts() {
    return ( 
    <>
        <Header></Header>
        <div className="section__all-posts-light">
            <div className="container">
                <Title style='main-title-light' content='Blog'></Title>
                <Tabs style='tabs-wrap-light'></Tabs>
            </div>
            <PostList></PostList>
        </div>
        
    </> 
    );
}

export default AllPosts;
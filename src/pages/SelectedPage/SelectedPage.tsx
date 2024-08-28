import './SelectedPage.css';
import { useEffect, useState, useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SelectedPost from "../../components/SelectedPost/SelectedPost";
import Spinner from '../../components/Spinner/Spinner';


function SelectedPage() {

    const [post, setPost] = useState(null);
    const [color, setColor] = useContext(createdContext);

    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/1/')
            .then(response => response.json())
            .then(json => setPost(json))
    }, [])

    return ( 
    <>
        <Header></Header>
        <div className={`background-${color}`}>
            {post === null ? <Spinner/> : <SelectedPost post={post}></SelectedPost>}
        </div>
        <Footer></Footer>    
    </>
    );
}

export default SelectedPage;
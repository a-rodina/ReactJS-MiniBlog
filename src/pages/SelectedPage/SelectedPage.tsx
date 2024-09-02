import './SelectedPage.css';
import { useEffect, useState, useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SelectedPost from "../../components/SelectedPost/SelectedPost";
import Spinner from '../../components/Spinner/Spinner';
import { useParams } from 'react-router-dom';


function SelectedPage() {

    const [post, setPost] = useState(null);
    const [color, setColor] = useContext(createdContext);
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://studapi.teachmeskills.by/blog/posts/${id}/`)
            .then(response => response.json())
            .then(json => setPost(json))
    }, [])

    return ( 
    <>
        <div className={`background-${color}`}>
            {post === null ? <Spinner/> : <SelectedPost post={post}></SelectedPost>}
        </div>
        <Footer></Footer>    
    </>
    );
}

export default SelectedPage;
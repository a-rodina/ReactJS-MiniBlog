import './SelectedPage.css';
import { useEffect, useState, useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import Footer from "../../components/Footer/Footer";
import SelectedPost from "../../components/SelectedPost/SelectedPost";
import Spinner from '../../components/Spinner/Spinner';
import { useParams } from 'react-router-dom';
import { getOnePost } from '../../slice/blog';
import { useDispatch, useSelector } from 'react-redux';


function SelectedPage() {

    // const [post, setPost] = useState(null);
    const [color, setColor] = useContext(createdContext);
    const {id} = useParams();
    const data = useSelector((state: any) => state.blog);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getOnePost(id))
    }, [])

    return ( 
    <>
        <div className={`background-${color}`}>
            {data.post === null ? <Spinner/> : <SelectedPost post={data.post}></SelectedPost>}
        </div>
        <Footer></Footer>    
    </>
    );
}

export default SelectedPage;
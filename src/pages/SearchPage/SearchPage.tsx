import './SearchPage.css';
import { useEffect, useState, useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import Title from '../../components/Title/Title';
import SearchList from '../../components/SearchList/SearchList';
import Spinner from '../../components/Spinner/Spinner';
import Footer from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../slice/blog';


function SearchPage( ) {

    const [color, setColor] = useContext(createdContext);
    const data = useSelector((state: any) => state.blog);
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return ( 
    <>
        <div className={`section__search-${color}`}>
            <div className="container">
                <Title style={`main-title-${color}`} content='Search results'></Title>
            </div>
            {data.posts.length === 0 ? <Spinner/> : <SearchList posts={data.posts}></SearchList>}
        </div>
        <Footer></Footer>
    </> 
    );
}

export default SearchPage;
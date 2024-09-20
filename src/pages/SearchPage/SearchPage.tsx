import './SearchPage.css';
import { useEffect, useState, useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import Title from '../../components/Title/Title';
import SearchList from '../../components/SearchList/SearchList';
import Spinner from '../../components/Spinner/Spinner';
import Footer from '../../components/Footer/Footer';


function SearchPage( ) {

    const [posts, setPosts] = useState([]);
    const [color, setColor] = useContext(createdContext);

    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?limit=11')
            .then(response => response.json())
            .then(json => setPosts(json.results))
    }, [])

    return ( 
    <>
        <div className={`section__search-${color}`}>
            <div className="container">
                <Title style={`main-title-${color}`} content='Search results'></Title>
            </div>
            {posts.length === 0 ? <Spinner/> : <SearchList posts={posts}></SearchList>}
        </div>
        <Footer></Footer>
    </> 
    );
}

export default SearchPage;
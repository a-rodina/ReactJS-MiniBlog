import './SearchPage.css';
import { useContext } from 'react';
import { createdContext } from '../../providers/ThemeContext';
import Title from '../../components/Title/Title';
import SearchList from '../../components/SearchList/SearchList';
import Footer from '../../components/Footer/Footer';
import { useSelector } from 'react-redux';


function SearchPage( ) {

    const [color, setColor] = useContext(createdContext);
    const data = useSelector((state: any) => state.blog);

    console.log(data.search)


    return ( 
    <>
        <div className={`section__search-${color}`}>
            <div className="container">
                <Title style={`main-title-${color}`} content='Search results'></Title>
            </div>
            {data.search.length === 0 ? <div className='container'><p className={`search-text-${color}`}>Enter your request</p></div> : <SearchList posts={data.search.results}></SearchList>}
        </div>
        <Footer></Footer>
    </> 
    );
}

export default SearchPage;
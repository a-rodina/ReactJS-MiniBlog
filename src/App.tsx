import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllPosts from './pages/AllPosts/AllPosts';
import SearchPage from './pages/SearchPage/SearchPage';
import SelectedPage from './pages/SelectedPage/SelectedPage';
import ThemeContext from './providers/ThemeContext';
import Header from './components/Header/Header';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <>
    <BrowserRouter>
      <ThemeContext>
        <Provider store={store}>
          <Header></Header>
          <Routes>
            <Route path='/' element={<AllPosts/>}/>
            <Route path='/:id' element={<SelectedPage/>}/>
            <Route path='/search' element={<SearchPage/>}/>
          </Routes>
        </Provider>
      </ThemeContext>
    </BrowserRouter>
    
    </>
  );
}

export default App;

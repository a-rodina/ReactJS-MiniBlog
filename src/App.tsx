import './App.css';

import AllPosts from './pages/AllPosts/AllPosts';
import SearchPage from './pages/SearchPage/SearchPage';
import SelectedPage from './pages/SelectedPage/SelectedPage';
import ThemeContext from './providers/ThemeContext';

function App() {
  return (
    <>
    <ThemeContext>
      <SearchPage></SearchPage>
    </ThemeContext>
    </>
  );
}

export default App;

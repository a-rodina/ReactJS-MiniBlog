import './App.css';
import AllPosts from './pages/AllPosts/AllPosts';
import SelectedPage from './pages/SelectedPage/SelectedPage';
import ThemeContext from './providers/ThemeContext';

function App() {
  return (
    <>
    <ThemeContext>
      <AllPosts></AllPosts>
    </ThemeContext>
    </>
  );
}

export default App;

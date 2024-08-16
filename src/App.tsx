import './App.css';
import Button from './components/Button/Button';
import UserName from './components/UserName/UserName';
import Title from './components/Title/Title';
import Tabs from './components/Tabs/Tabs';
import Input from './components/Input/Input';
import Textarea from './components/Textarea/Textarea';
import CardBig from './components/СardBig/CardBig';
import Header from './components/Header/Header';
import DropDown from './components/DropDown/DropDown';
import SelectedPage from './pages/SelectedPage/SelectedPage';
import PostList from './components/PostList/PostList';

function App() {
  return (
    <>
      <SelectedPage></SelectedPage>
      <PostList></PostList>

      {/* <Button buttonState={true} typeButton="primary" content='Primary'></Button>
      <Button buttonState={false} typeButton="secondary" content='Secondary'></Button>
      <Button buttonState={false} typeButton="secondary2" content='Secondary 2'></Button>
      <Title style='main-title' content='Sign In'></Title>
      <Tabs style='tabs-wrap'></Tabs>
      <Input 
        compound='email'
        inputType='email'
        title='Title' 
        placeholderText='Placeholder'
        isActive={false}
        errorText='Error text'
        isError={false}></Input>
      <Textarea placeholderText='Add your text' compound='Text'></Textarea> */}
      </>
  );
}

export default App;

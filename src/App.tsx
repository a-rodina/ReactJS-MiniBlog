import './App.css';
import Button from './components/Button/Button';
import UserName from './components/UserName/UserName';
import Title from './components/Title/Title';
import Tabs from './components/Tabs/Tabs';
import Input from './components/Input/Input';
import Textarea from './components/Textarea/Textarea';

function App() {
  return (
    <>
      <Button buttonState={true} typeButton="primary" content='Primary'></Button>
      <Button buttonState={false} typeButton="secondary" content='Secondary'></Button>
      <Button buttonState={false} typeButton="secondary2" content='Secondary 2'></Button>
      <UserName fullName='Artem Malkin'></UserName>
      <UserName fullName='Nastya Rodina'></UserName>
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
        <Input 
        compound='email'
        inputType='email'
        title='Title' 
        placeholderText='Placeholder'
        isActive={true}
        errorText='Error text'
        isError={false}></Input>
        <Input 
        compound='email'
        inputType='email'
        title='Title' 
        placeholderText='Placeholder'
        isActive={false}
        errorText='Error text'
        isError={true}></Input>
      <Textarea placeholderText='Add your text' compound='Text'></Textarea>
    </>
  );
}

export default App;

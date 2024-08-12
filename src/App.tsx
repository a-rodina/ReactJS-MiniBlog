import './App.css';
import Button from './components/Button/Button';
import UserName from './components/UserName/UserName';
import Title from './components/Title/Title';
import Tabs from './components/Tabs/Tabs';
import TabsElements from './components/TabsElements/TabsElements';

function App() {
  return (
    <>
      <Button buttonState={false} typeButton="primary" content='Primary'></Button>
      <Button buttonState={false} typeButton="secondary" content='Secondary'></Button>
      <Button buttonState={false} typeButton="secondary2" content='Secondary 2'></Button>
      <UserName fullName='Artem Malkin'></UserName>
      <UserName fullName='Nastya Rodina'></UserName>
      <Title style='main-title' content='Sign In'></Title>
      {/* <Tabs style=''>
        <TabsElements></TabsElements>
      </Tabs> */}
    </>
  );
}

export default App;

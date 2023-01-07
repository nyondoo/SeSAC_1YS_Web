import './App.css';
import BuyHTML from './Components/BuyHTML';
import BuyProps from './Components/BuyProps';
import CallCustomList from './Components/CallCustomList';
import CallCustomObj from './Components/CallCustomObj';
import ChangeProfile from './Components/ChangeProfile';
import ClassProps from './Components/ClassProps';
import List from './Components/List';
import MainHeader from './Components/MainHeader';

function App() {
  return (
    <div className="App">
      {/* <List head="코테 문제풀기" tail="Lv.0 정복하기" /> */}
      {/* <MainHeader text='Go Naver' href="http://naver.com" userID="nyondoo"/>
      <ClassProps text='Go Naver' href="http://naver.com" userID="nyondoo" /> */}
      {/* <BuyProps /> */}
      {/* <CallCustomList />
      <CallCustomObj /> */}
      <ChangeProfile />
    </div>
  );
}

export default App;

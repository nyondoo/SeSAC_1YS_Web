import logo from './logo.svg';
import './App.css';
import ImgComponent from './components/ImgComponent';
import BtnToNaver from './components/BtnToNaver';
//src 폴더 내부까지만 접근 가능
function App() {

  return (
    <div className="App">
      <ImgComponent />
      <BtnToNaver />
    </div>
  );
}

export default App;

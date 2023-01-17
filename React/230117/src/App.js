import logo from './logo.svg';
import './App.css';
import UseEffectFetch from './Components/UseEffectFetch';
import InllineCss from './Components/InllineCss';
import TestCSS from './Components/TestCSS';
import TestStyled from './Components/TestStyled';
import LogoStyled from './Components/LogoStyled';
import Image from './Components/Image';
import FancyBorder from './Components/FancyBorder';
import Profile from './Components/Profile';
import Board from './Components/Board';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import BoardDetail from './Components/BoardDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

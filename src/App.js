
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Friends from './Components/Home/Friends/Friends';
import HomeStart from './Components/HomeStart/HomeStart';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<HomeStart></HomeStart>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

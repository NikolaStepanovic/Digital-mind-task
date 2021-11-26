import './App.css';
import {Route, Routes} from 'react-router-dom';
import Header from './component/Header/Header';
import Explore from './Page/Explore/Explore';
import SingleNFT from './Page/SingleNFT/SingleNFT';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Header />}/>
        <Route path={'/Explore'} element={<Explore />}/>
        <Route path={'/nft/:mint'} element={< SingleNFT />}/>
      </Routes>
    </div>
  );
}

export default App;


import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Surahs from './pages/Surahs';
import SurahDetails from './pages/SurahDetails';
import Layout from './pages/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/'
        element={<Layout />} >
          <Route path="/" element={<Surahs />} />
          <Route path="/surah/:surahNumber" element={<SurahDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App

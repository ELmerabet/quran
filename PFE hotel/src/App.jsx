
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Surahs from './pages/Surahs';
import SurahDetails from './pages/SurahDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Surahs/>} />
        <Route path="/surah/:surahNumber" element={<SurahDetails/>} />
      </Routes>
    </Router>
  )
}

export default App

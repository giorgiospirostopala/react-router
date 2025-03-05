import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostsList from './pages/PostsList';
import AboutUs from './pages/AboutUs';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/chi-siamo" Component={AboutUs} />
            <Route path="/lista-dei-post" Component={PostsList} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

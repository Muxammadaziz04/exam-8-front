import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout';

import './App.css';
import About from './pages/About';
import Post from './pages/Post';
import SinglePage from './pages/singlePage';
import LoginPage from './pages/Login';
import AdminPage from './pages/Admin';
import Home from './pages/Home';
import Register from './components/register';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/post' element={<Post />} />
          <Route path='/single/:post_id' element={<SinglePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin' element={<AdminPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

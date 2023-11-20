import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import HomePage from './pages/HomePage';
import 'primeicons/primeicons.css';
import AboutUs from './components/AboutUs.jsx';
import Blog from './pages/Blog.jsx';
import RecentActivity from './pages/RecentActivity.jsx';
import OurDetails from './pages/OurDetails.jsx';
import BlogDetailsPage from './pages/BlogDetailsPage.jsx';
        


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/ourDeatils' element={<OurDetails/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/activity' element={<RecentActivity/>}/>
        <Route path='/blog-details' element={<BlogDetailsPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
import { Component, lazy } from 'solid-js';
import { Routes, Route } from "solid-app-router"
import Navbar from './components/Navbar';
const Home = lazy(() => import( './pages/home/Home'))
const PageNotFound = lazy(() => import( './pages/pagenotfound/PageNotFound'))

const App: Component = () => {
  return (
    <div class='flex items-center justify-center h-screen'>
      <Navbar />
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="*" element={<PageNotFound/>} />
     </Routes>
    </div>
   );
};

export default App;

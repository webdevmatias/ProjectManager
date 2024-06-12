import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import NewProject from './components/pages/NewProject';

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const App = () => {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/newproject' element={<NewProject/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
};

export default App

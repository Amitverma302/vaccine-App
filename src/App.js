import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterPage from './Components/RegisterPage';
import CheckPage from './Components/CheckPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import About from './Components/About';
import AboutChkPage from './Components/AboutChkPage';
import Thank from './Components/Thank';
import Search from './Components/Search';
import AboutregiPage from './Components/AboutregiPage';
import LoginPage from './Components/LoginPage';
import  Demo  from './Components/Demo';



function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registerPage" element={<RegisterPage />} />
          <Route path="/checkPage" element={<CheckPage />} />
          <Route path="/about/" element={<About />} >
            <Route path="aboutChkPage/" element={<AboutChkPage />} />
            <Route path="aboutregPage/" element={<AboutregiPage />}  >
              <Route path="thank" element={<Thank />} />
            </Route>
          </Route>
          <Route path='/search' element={<Search />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/Croper' element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

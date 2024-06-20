import './App.css';
import { data } from './data';
import Cards from './components/Cards';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pages from './components/Pages';

function App() {
 
  return (

    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />}/>
          <Route path="albuns" element={<Pages />} />
        </Routes>

    </BrowserRouter>

    // <div className='App'>
    //   <Header />
    //   {mappedData}
    //   <Footer />
    // </div>

    // <Layout />
   
  );
}

export default App;

import './App.css';
import { data } from './data';
import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pages from './components/Pages';
import Opcoes from './components/Opcoes';
import HistoriasPage from './components/HistoriasPage';

function App() {
  
  return (

    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />}/>
          <Route path="opcoes" element={<Opcoes />} />
          <Route path="albuns" element={<Pages />} />
          <Route path="historias" element={<HistoriasPage />} />
        </Routes>

    </BrowserRouter>

    // <HistoriasPage />

 

    // <div className='App'>
    //   <Header />
    //   {mappedData}
    //   <Footer />
    // </div>

    // <Layout />
   
  );
}

export default App;

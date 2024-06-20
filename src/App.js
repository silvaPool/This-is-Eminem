import './App.css';
import { data } from './data';
import Cards from './components/Cards';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';

function App() {
  const mappedData = data.map((item) => {
    return (
      <Cards key={item.id} item={item} />
    )
  })
  return (

    // <div className='App'>
    //   <Header />
    //   {mappedData}
    //   <Footer />
    // </div>

    <Layout />
   
  );
}

export default App;

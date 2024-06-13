import logo from './logo.svg';
import './App.css';
import { data } from './data';
import Cards from './components/Cards';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const mappedData = data.map((item) => {
    return (
      <Cards key={item.id} item={item} />
    )
  })
  return (

    <div className='App'>
      <Header />
      {mappedData}
      <Footer />
    </div>
   
  );
}

export default App;

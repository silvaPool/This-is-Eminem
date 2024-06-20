import { data } from "../data";
import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";

function Pages() {

    const mappedData = data.map((item) => {
        return (
          <Cards key={item.id} item={item} />
        )
      })

    return (
        <>
        <div className='App'>
            <Header />
            {mappedData}
            <Footer />
        </div>
        </>
    )
}

export default Pages;
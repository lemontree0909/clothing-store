import { useState } from 'react';
import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons';
import './App.css';

function Home() {
  const [clothes, setClothes] = useState(data);

  const choosenClothes = (searchTerm) => {
    const newClothes = data.filter(element =>  element.searchTerm === searchTerm);
    setClothes(newClothes);
  }


  return (
    <div>
      <div className="cont">
        <h2 className='back'>Free Standart Shipping</h2>
      </div>
      <Buttons
        filteredClothes ={choosenClothes}
        data={data}
        setClothes={setClothes}
      />
      <Clothes itemsForSale={clothes}/>
    </div>
  );
}

export default Home;

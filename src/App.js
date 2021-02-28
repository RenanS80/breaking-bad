import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

import Header from './components/Header'
import Characters from './components/Characters';


function App() {

  const [characs, setCharacs] = useState([]);

  useEffect(() => {
    const fetchCarac = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters`)
      
      console.log(result.data);
      setCharacs(result.data);
    }

    fetchCarac();
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <Characters characs={characs}/>
      </div>
    </>

  );
}

export default App;

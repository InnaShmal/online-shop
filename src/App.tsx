import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

function App() {

  const [fakeData, setFakeData] = useState([])

  useEffect(()=> {
    axios.get('https://fakestoreapi.com/products')
    .then (res => {
      setFakeData(res.data);
    })
  })

  return (
    <div>
        <div>
          <div className='container'>
            <h1>Online Shop</h1>
          </div>
          <ul>
            {fakeData.map((item) => (
              <li key={item.id}>
                <h2> {item.title}</h2>
                <p>Description:</p> {item.description}
                <div>
                <img src={item.image} width='300px'/>
                </div>
              </li>
  ))}
</ul>
        </div>
    </div>
    )
}

export default App

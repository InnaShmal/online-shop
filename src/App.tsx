import { useState, useEffect } from "react";
import "./App.css";
import { axiosInstance } from "./Api";

function App() {
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    axiosInstance.get('/products').then(({ data }) => {
      console.log(data);
      setFakeData(data);
    })
  });


  return (
    <div className="main">
      <div>
        <div className="container">
          <h1>Online Store</h1>
        </div>
        <ul>
          {fakeData.map((item) => (
            <li key={item.id}>
              <h2 className="container"> {item.title}</h2>
              <p className="container description">{item.description}</p>
              <div className="container">
                <img src={item.image} width="200px" />
              </div>
              <div className="container">
                <h3>{item.price} $</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

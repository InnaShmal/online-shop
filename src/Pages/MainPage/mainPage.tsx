import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../Api";
import styles from "./mainPage.module.css"
import NavBar from "../Components/NavBar/NavBar/navBar";

export default function FirstPage() {
  const [fakeData, setFakeData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    axiosInstance.get("/products/category/men's clothing").then((res) => {
      setFakeData(res.data), { signal: abortController.signal };
    });

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <NavBar/>
      <div className={styles['mainPage']}>
        <div className="container">
          <h1>Online Store</h1>
          <ul>
            {fakeData.map((item) => (
              <li key={item.id}>
                <h2> {item.title}</h2>
                <p className="description">{item.description}</p>
                <div>
                  <img src={item.image} width="200px" />
                </div>
                <div>
                  <h3>{item.price} $</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/products">to item's page</Link>
      </div>
    </div>
  );
}

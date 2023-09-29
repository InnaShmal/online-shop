import ProductCountSelector from "./NavBar/NavBar/ProductCountSelector/productCountSelector";
import { useState, useEffect } from "react";

const ProductPage = () => {
  const [productCount, setProductCount] = useState<number>(5);
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleProductCountChange = (value: number) => {
    setProductCount(value);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(`https://fakestoreapi.com/products?limit=${productCount}`, { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          setError(err.message);
        }
      });

    return () => {
      controller.abort();
    };
  }, [productCount]);

  return (
    <div>
      <ProductCountSelector onSelectionChange={handleProductCountChange} />

      {error && <div>Error: {error}</div>}

      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;

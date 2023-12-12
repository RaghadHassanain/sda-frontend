import React, {useEffect, useState} from "react";

const App = () => {
  const[products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://sda-backend-lovat.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  console.log(products);
  return (
    <div>
      {products.length > 0 &&
      products.map((product) => (
        <article key={product._id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </article>
        ))}
    </div>
  );
};

export default App;
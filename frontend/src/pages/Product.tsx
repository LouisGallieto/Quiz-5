import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

import axios from "axios";

const Product = () => {
  const { id } = useParams(); // Extract the 'id' from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data based on the dynamic 'id'
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product", error);
      }
    };

    fetchProduct();
  }, [id]); // Re-fetch when 'id' changes

  return (
    <div>
      <Navbar />
      <h2>{product?.title}</h2>
      <img
        src={product?.image}
        alt={product?.title}
        style={{ width: "300px" }}
      />
      <p>{product?.description}</p>
      <p>
        <strong>Brand:</strong> {product?.brand}
      </p>
      <p>
        <strong>Category:</strong> {product?.category}
      </p>
      <p>
        <strong>Rating:</strong> {product?.rating} ⭐ ({product?.num_reviews}{" "}
        reviews)
      </p>
      <p>
        <strong>Price:</strong> ${product?.price}
      </p>
      <p>
        <strong>Stock:</strong> {product?.stock} available
      </p>
    </div>
  );
};

export default Product;

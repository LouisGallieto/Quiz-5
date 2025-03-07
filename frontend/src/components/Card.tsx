import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    // Redirect to the product detail view based on the product ID
    navigate(`/products/${product.id}`);
  };

  return (
    <Col md={4} className="mb-4">
      <Card className="shadow-sm">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.title}
          style={{ maxHeight: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text className="text-muted">{product.description}</Card.Text>
          <Card.Text>
            <strong>Brand:</strong> {product.brand} <br />
            <strong>Category:</strong> {product.category} <br />
            <strong>Rating:</strong> {product.rating} ⭐ ({product.num_reviews}{" "}
            reviews) <br />
            <strong>Price:</strong> ${product.price} <br />
            <strong>Stock:</strong> {product.stock} available
          </Card.Text>
          <Button variant="primary" onClick={handleRedirect}>
            View Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;

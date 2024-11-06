import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import { useParams } from "react-router-dom";
import { getBrandProducts } from "../services/productService";
import { Button, Card } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import products from "../Constants/Products";

const BrandProducts = () => {
  const { name } = useParams();
  const [mainProducts, setMainProducts] = useState(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const selectedProducts = await getBrandProducts(name);
        setMainProducts(selectedProducts);
      } catch (error) {
        console.error(
          "Error fetching product, falling back to local data:",
          error
        );
        const fallbackProducts = products.filter(
          (item) => item.brand === "Blue Star"
        );
        setMainProducts(fallbackProducts);
      }
    };

    fetchProducts();
  }, [name]);

  if (!mainProducts) {
    return (
      <>
        <div className="loader-container">
          <div className="spinner"></div>
          <div>Loading...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <HeaderComponent />
      <div className="main-container">
        <h4
          style={{
            fontWeight: "600",
            textAlign: "left",
            fontFamily: "sans-serif",
          }}
        >
          {name}
        </h4>

        <div className="brand-card-container">
          {mainProducts.map((el) => (
            <div
              className="card-wrapper"
              key={el._id}
              style={{ flexWrap: isMobile ? "wrap" : "nowrap" }}
            >
              <Card className="card">
                <Card.Img
                  className="card-image img-fluid"
                  variant="top"
                  src={el.images[0]}
                />
                <Card.Body>
                  <Card.Title className="card-title">{el.name}</Card.Title>
                </Card.Body>
                <Button className="btn btn-primary card-button">
                  {isMobile ? "ADD +" : "ADD TO CART"}
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default BrandProducts;

import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import ProductImageZoom from "./ProductImageZoom";
// import Products from "../Constants/Products";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import { useParams } from "react-router-dom";
import products from "../Constants/Products";
const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // State to store the selected product
  const [mainImage, setMainImage] = useState(""); 
  // const productImages = [
  //   Products[0].imageUrl[0],
  //   Products[1].imageUrl[0],
  //   Products[2].imageUrl[0],
  // ];
  // console.log("in product page", Products.name);
  // const product = {
  //   productName:
  //     "Noise Icon 2 Elite Edition 1.8'' Display with Metallic Body and Bluetooth Calling Smartwatch  (Elite Black Strap, Regular)",
  //   availability: "Instock",
  //   price: "1,999",
  // };
  // const tableData = [
  //   { word: "L x D x H", description: "1220 x 670 x 1260" },
  //   { word: "NO OF SHELVES", description: "BASE + 3" },
  //   { word: "TEMPERATURE RANGE", description: "04 TO 14" },
  //   { word: "REFRIGERATION TYPE", description: "VENTILATED" },
  //   { word: "MOVEMENT", description: "BOOT / WHEEL" },
  // ];

  // State to track the current main image
  useEffect(() => {
    const selectedProduct = products.find((item) => item.id === parseInt(id));
    console.log(selectedProduct);
    
    if (selectedProduct) {
      setProduct(selectedProduct);
      setMainImage(selectedProduct.imageUrl[0]); // Set the first image as the main image
    }
  }, [id]);
  // const [mainImage, setMainImage] = useState(productImages[0]);
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <HeaderComponent />
      <div className="product-page">
        {/* Left Side - Main Product Image */}
        <div className="product-image-container">
          {/* Below Main Image - Preview Images */}
          <div className="product-preview-images">
            {/* {product.map((item) => ( */}
              <img
                key={product.id}
                src={product.imageUrl}
                alt={`Product Preview ${product.id + 1}`}
                className="product-preview-image"
                onClick={() => setMainImage(product.imageUrl)} // Set the clicked image as the main image
              />
            {/* ))} */}
          </div>
          <div className="product-main-image">
            <ProductImageZoom imageSrc={mainImage} />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="product-details">
          <span
            style={{
              textAlign: "left",
              fontFamily: "sans-serif",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            {product.name}
          </span>
          <h6 style={{ textAlign: "left", color: "black", paddingTop: "5px" }}>
            Availability:{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>
              {product.availability}
            </span>
          </h6>
          {/* Buttons */}
          <div className="product-actions">
            <button className="enquire-btn">Enquire Now</button>
          </div>
          <div className="product-description">
            <p>
              <ol>
                <li>8mm toughened clear glass</li>
                <li>Electronic digital thermostat for refrigeration counter</li>
                <li>Rear removable electrocoated aluminium sliding doors</li>
                <li>6mm shelf glass with ss mirror finish stopper</li>
                <li>High bright led lighting: pure white / warm white</li>
                <li>304 grade steel finish with matte & mirror combination</li>
                <li>Changeable Corian and engraving work with unique insertion</li>
              </ol>
            </p>
          </div>
          <div className="more-details">
            <div style={{ margin: "0px", padding: "0px" }}>
              <p style={{ color: "#878787", textAlign: "left" }}>
                Delivery:{" "}
                <span style={{ color: "#212121" }}>
                  Delivery within 2 days.
                </span>
              </p>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th colSpan="2">
                      <h3 className="specifications-title">Specifications</h3>
                    </th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {product.specifications.map((item) => (
                    <tr>
                      <td style={{ color: "#878787" }}>{item.word}</td>
                      <td style={{ fontSize: "bold", color: "black" }}>
                        {item}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default ProductPage;
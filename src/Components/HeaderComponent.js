import React, { useState, useEffect, useMemo } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faHeart,
  faUser,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import CompanyLogo from "../images/CompanyLogo.png";

const HeaderComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [inputWidth, setInputWidth] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [inputTop, setInputTop] = useState(0);

  const categories = useMemo(
    () => [
      {
        title: "Dish Washer",
        items: [
          {
            name: "Free Standing",
            image:
              "https://media3.bosch-home.com/Images/436x245/MCIM01798539_DW_FSD_Carousel_FSD_60_526x310.webp",
          },
          {
            name: "Built In",
            image:
              "https://www.ifbappliances.com/media/opti_image/webp/catalog/product/cache/ab27e2d12b7baa9faaaff0d7d3ddf1f2/n/e/neptune_bi2_fv.webp",
          },
          {
            name: "Counter Top",
            image:
              "https://www.ifbappliances.com/media/opti_image/webp/catalog/product/cache/ab27e2d12b7baa9faaaff0d7d3ddf1f2/1/8/1800x1800_vx14_front.webp",
          },
          {
            name: "Commercial",
            image:
              "https://cpimg.tistatic.com/08838150/b/4/Commercial-Hood-Type-Dishwasher.jpg",
          },
        ],
      },
      {
        title: "Shop By Brand",
        items: [
          {
            name: "Bosch",
            image:
              "https://logos-world.net/wp-content/uploads/2020/08/Bosch-Emblem.png",
          },
          {
            name: "LG",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfQ8u2jAetj1SFGtK_bZGo38RqFuBaN5W0OtoYgJqS0eAelSiycE1qfbMqOlk5ZtIMmM&usqp=CAU",
          },
          {
            name: "Samsung",
            image:
              "https://i.pinimg.com/564x/a1/79/a4/a179a400366bf6f5de2e76e42285a446.jpg",
          },
          {
            name: "Haier",
            image:
              "https://cdn-au.onetrust.com/logos/4d07804a-f4e0-42e4-89de-ef883f73d081/018e731e-5c5a-7ac6-a2f6-35c236c7a752/7a2536ce-1ff5-4dde-a12b-32b1bae9c5b0/Haier_Lock-up_White_on_Process_Gradiant.jpg",
          },
        ],
      },
      {
        title: "Offer Zone",
        items: [
          {
            name: "Clearance Sale",
            image:
              "https://img.freepik.com/free-vector/clearance-sale-banner-creative-design_1017-15627.jpg",
          },
          {
            name: "Bundle Deals",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMsXkY9I77vxQ9gJ2ARUVuGzTY-YJu1thkVg&s",
          },
          {
            name: "Festival Offers",
            image:
              "https://img.freepik.com/premium-vector/diwali-festive-offer-background-design-template_649214-869.jpg",
          },
          {
            name: "Season Special",
            image:
              "https://img.freepik.com/premium-vector/discount-label-with-season-sale-special-offer-vector-illustration-discount-sticker-retail-market_419341-2171.jpg",
          },
        ],
      },
    ],
    []
  );
  const placeholderItems = useMemo(() => {
    return [
      `"dish wahser"`,
      `"bosch"`,
      `"lg"`,
      `"premium"`,
      `"samsung"`,
      `"haier"`,
    ];
  }, []);
  const inputRef = React.useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputRef.current) {
      // setInputWidth(inputRef.current.offsetWidth);
      const inputRect = inputRef.current.getBoundingClientRect();
      setInputTop(inputRect.bottom);
    }
  }, [showModal]);

  useEffect(() => {
    let currentIndex = 0;
    let interval;
    if (!isFocused && !inputValue) {
      const animatePlaceholder = async () => {
        const nextIndex = (currentIndex + 1) % placeholderItems.length;

        setIsAnimating(true);
        await new Promise((resolve) => setTimeout(resolve, 500));
        setProductName(`\u00A0${placeholderItems[nextIndex]}`);
        setIsAnimating(false);

        currentIndex = nextIndex;
      };

      setProductName(placeholderItems[0]);
      interval = setInterval(animatePlaceholder, 3000);
    }

    return () => clearInterval(interval);
  }, [isFocused, inputValue, placeholderItems]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setShowModal(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!inputValue) {
      setProductName(placeholderItems[0]);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setIsFocused(false);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        backgroundColor: "white",
      }}
    >
      <div className="homepage">
        <div
          className="top-section"
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo and Hamburger Menu */}
          <div className="logo-hamburger">
            {/* Navbar Toggle for mobile view */}
            {isMobile && (
              <div className="hamburger">
                <button
                  onClick={handleMenuToggle}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span className="navbar-toggler-icon">
                    <div></div>
                    <div></div>
                    <div></div>
                  </span>
                </button>
              </div>
            )}
            <div className="logo">
              <img
                src={CompanyLogo}
                alt="Company Logo"
                onClick={() => {
                  navigate("/");
                }}
                className="img-fluid"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  height: "60px",
                  maxHeight: "100px",
                  margin: "0 auto",
                  borderRadius: "20px",
                  backgroundColor: "white",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>

          {/* Search Bar */}
          <div
            className="searchbar"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              padding: "10px 0",
              marginTop: isMobile ? "10px" : "0",
            }}
          >
            <div
              className="search-input-wrapper"
              style={{ position: "relative", width: "100%", maxWidth: "500px" }}
            >
              <input
                ref={inputRef}
                style={{
                  border: "none",
                  width: "100%",
                  borderRadius: "5px",
                  backgroundColor: "whitesmoke",
                  padding: "10px",
                }}
                placeholder={
                  isFocused
                    ? "Search for products,brands and more.."
                    : "Search for "
                }
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              {!isFocused && !inputValue && (
                <div
                  className={`animated-product ${
                    isAnimating ? "fade-out" : "fade-in"
                  }`}
                  style={{
                    position: "absolute",
                    left: "85px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#999",
                    pointerEvents: "none",
                  }}
                >
                  {productName}
                </div>
              )}
            </div>
            <button
              style={{
                backgroundColor: "#d86f70",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginLeft: "-8px",
                padding: "10px",
                color: "white",
                width: "45px",
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          {/* Navbar */}
          <div
            className="navbar"
            style={{ display: isMobile ? "none" : "block" }}
          >
            <Navbar expand="lg" className="bg-body-primary">
              <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link className="nav-link" href="#home">
                      <FontAwesomeIcon icon={faHome} />{" "}
                      <span className="black-text nav-link">Home</span>
                    </Nav.Link>
                    <Nav.Link className="nav-link" href="#about">
                      <FontAwesomeIcon icon={faHeart} />{" "}
                      <span className="black-text nav-link">Wishlist</span>
                    </Nav.Link>
                    <Nav.Link className="nav-link" href="#store-locator">
                      <FontAwesomeIcon icon={faUser} />{" "}
                      <span className="black-text nav-link">Account</span>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>

        {/* Category Menu */}
        <div
          id="category-menu"
          className="category-menu"
          style={{ display: isMobile ? "none" : "block", marginTop: "10px" }}
        >
          <ul className="category-list">
            <li>
              <a className="black-text" href="#home">
                Store Locator
              </a>
            </li>
            <li className="separator">|</li>
            <li>
              <a className="black-text" href="#home">
                Terms & Conditions
              </a>
            </li>
            <li className="separator">|</li>
            <li>
              <a className="black-text" href="#home">
                Privacy Policy
              </a>
            </li>
            <li className="separator">|</li>
            <li>
              <a className="black-text" href="#home">
                Dishwasher
              </a>
            </li>
            <li className="separator">|</li>
            <li>
              <a className="black-text" href="#home">
                Kitchenware
              </a>
            </li>
            <li className="separator">|</li>
            <li>
              <a className="black-text" href="#home">
                Contact
              </a>
            </li>
            <li className="separator">|</li>
            <li>
              <a className="black-text" href="#home">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Modal with images */}
        {showModal && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="modal-container"
              style={{ marginTop: `${inputTop + 10}px` }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                {/* <h3 className="modal-title">Best Sellers</h3> */}
                <button onClick={closeModal} className="close-button">
                  <svg
                    className="close-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="categories-container">
                {categories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="category">
                    <h4 className="category-title">{category.title}</h4>
                    <div className="items-grid">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="item-card">
                          <div className="item-image-container">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="item-image"
                            />
                          </div>
                          <span className="item-name">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {inputValue && (
                <div className="search-suggestions">
                  <h4 className="suggestions-title">Popular Searches</h4>
                  <div className="suggestions-grid">
                    {[
                      "Dishwasher under 30000",
                      "Best Rated Dishwashers",
                      "Energy Efficient Models",
                      "Premium Brands",
                      "Latest Models",
                      "Budget Friendly",
                    ].map((suggestion, index) => (
                      <div key={index} className="suggestion-tag">
                        {suggestion}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <div
            className="mobile-menu"
            style={{
              transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
              transition: "transform 0.3s ease-in-out",
              position: "fixed",
              top: 0,
              right: 0,
              width: "80%",
              height: "100vh",
              backgroundColor: "whitesmoke",
              zIndex: 1000,
            }}
          >
            {/* Close Button */}
            <h4
              style={{
                fontWeight: "bold",
                marginTop: "15px",
                marginLeft: "30px",
                fontFamily: "sans-serif",
              }}
            >
              Menu
            </h4>
            <button
              onClick={handleCloseMenu}
              style={{
                background: "none",
                color: "red",
                border: "none",
                cursor: "pointer",
                position: "absolute",
                top: "10px",
                right: "20px",
                fontSize: "24px",
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* Navbar items for mobile */}
            <div
              className="navbar"
              style={{
                marginTop: "30px",
                borderBottom: "solid 3px whitesmoke",
                borderTop: "solid 0.5px black",
              }}
            >
              <Nav className="ms-auto">
                <Nav.Link className=" black-text" href="#home">
                  <p
                    style={{ padding: "0px", marginBottom: "0px" }}
                    className="black-text "
                  >
                    Home
                  </p>
                </Nav.Link>
                <Nav.Link className=" black-text" href="#about">
                  <p
                    style={{ padding: "0px", marginBottom: "0px" }}
                    className="black-text"
                  >
                    Wishlist
                  </p>
                </Nav.Link>
                <Nav.Link className=" black-text" href="#store-locator">
                  <p
                    style={{ padding: "0px", marginBottom: "0px" }}
                    className="black-text"
                  >
                    Account
                  </p>
                </Nav.Link>
              </Nav>
            </div>

            {/* Category Menu for mobile - line by line without separator */}
            <div
              className="category-menu"
              style={{
                marginTop: "10px",
                borderBottom: "solid 3px whitesmoke",
                borderTop: "solid 0.5px black",
              }}
            >
              <ul
                className="category-list"
                style={{
                  listStyle: "none",
                  padding: "0",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  gap: "10px",
                }}
              >
                <li>
                  <a className="black-text" href="#home">
                    Store Locator
                  </a>
                </li>
                <li>
                  <a className="black-text" href="#terms">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a className="black-text" href="#privacy">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="black-text" href="#dishwasher">
                    Dishwasher
                  </a>
                </li>
                <li>
                  <a className="black-text" href="#kitchenware">
                    Kitchenware
                  </a>
                </li>
                <li>
                  <a className="black-text" href="#contact">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="black-text" href="#about">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div
              style={{
                listStyle: "none",
                gap: "10px",
                display: "flex",
                marginTop: "25px",
                justifyContent: "center",
                position: "absolute",
                bottom: "0",
                marginLeft: "30px",
                borderTop: "solid 0.5px black",
              }}
            >
              <li>
                <FontAwesomeIcon icon={faFacebook} style={{ color: "black" }} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} style={{ color: "black" }} />
              </li>
              <li>
                <FontAwesomeIcon icon={faYoutube} style={{ color: "black" }} />
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} style={{ color: "black" }} />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "black" }}
                />
              </li>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;

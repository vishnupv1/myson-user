import React, { useEffect, useRef } from "react";
import "./CardComponent.css"; // Import the external CSS file

const TopBrands = () => {
  const images = [
    // "https://www.classeq.co.uk/uploads/products/classeq-g400/G400-basket-on-door.png",
    // "https://www.dihr.com/sync/img/HT 11 ECO.jpg",
    // "https://www.scotsice.com.au/_images/_dihr/RX101E.jpg",
    // "https://www.classeq.co.uk/uploads/products/classeq-g500/G500_Rack_On_Door.png",
    // "https://www.angliacateringequipment.com/wp-content/uploads/2022/09/Convotherm-Maxx-10.10-Electric-Combi-Oven-101-Shelves-GN-11-400x400.webp",
    // "https://www.classeq.co.uk/uploads/products/classeq-g400/G400-basket-on-door.png",
    // "https://www.dihr.com/sync/img/HT 11 ECO.jpg",
    "https://vtlogo.com/wp-content/uploads/2021/01/astoria-vector-logo-small.png",
    "https://getlogo.net/wp-content/uploads/2021/08/hamilton-beach-logo-vector.png",
    "https://mfk.co.id/wp-content/uploads/2020/12/winterhalter-logo.png",
    "https://www.pi-india.com/uploaded_files/cf66d20b8daffd.jpg",
    "https://media.licdn.com/dms/image/v2/D4D0BAQGByKydIdtFMw/company-logo_200_200/company-logo_200_200/0/1694007804218?e=1744243200&v=beta&t=3tkU5CbfvkTowK6YTDJCpvIzQt9fYT7QW6c2iEy-81A",
    "https://media.licdn.com/dms/image/v2/C560BAQH8UuwERcv21Q/company-logo_200_200/company-logo_200_200/0/1630567287582/hoshizaki_america_logo?e=1744243200&v=beta&t=knzCSJXLZ5wAALXTruWxZucgrMPLC5mWF_HuDvCGHME",
    "https://scontent.fhyd7-1.fna.fbcdn.net/v/t39.30808-6/329119842_743516480334935_7746442451502530939_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Xj4GUPbixdEQ7kNvgHktlZB&_nc_zt=23&_nc_ht=scontent.fhyd7-1.fna&_nc_gid=AD9tCh3aPYxGPcDT9y7XHax&oh=00_AYBFbmrBUKXUSHNrfn9MVXhc7f9T4S_WPiwEMmPuVlZdrA&oe=677DD956",
    "https://www.convotherm.com/images/shared/logos/Convotherm_Color.svg",
    "https://www.lincolnfp.com/images/shared/logos/Lincoln_Black.svg",
    "https://www.merrychef.com/images/shared/logos/Merrychef_PMS186C.svg",
  ];

  const names = [
    // "Winter halter",
    // "Bosch",
    // "Convotherm",
    // "Classeq",
    // "Blue star",
    // "Bosch",
    "Acstoria",
    "Hamilton Beach",
    "Winter halter",
    "Stella",
    "Western",
    "Hoshizaki",
    "CREM",
    "Convotherm",
    "Lincoln",
    "Merrychef",
  ];

  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    const totalWidth = content.offsetWidth;
    let currentPosition = 0;
    let animationFrameId;

    const scroll = () => {
      currentPosition += 1;
      if (currentPosition >= totalWidth / 2) {
        currentPosition = 0;
      }
      container.scrollLeft = currentPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="main-container">
      <h5
        style={{
          fontWeight: "600",
          textAlign: "left",
          fontFamily: "sans-serif",
        }}
      >
        Shop from Top Brands
      </h5>

      <div
        ref={containerRef}
        className="card-container top-container"
        style={{
          overflowX: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        <div ref={contentRef} style={{ display: "inline-block" }}>
          {images.concat(images).map((imageSrc, index) => (
            <div
              className="top-brand-container"
              key={index}
              style={{
                textAlign: "center",
                margin: "0 10px",
                display: "inline-block",
                verticalAlign: "top",
              }}
            >
              <img
                src={imageSrc}
                className="top-brand-image"
                alt={`category-${index % images.length}`}
              />
              <div
                className="black-text top-brand-name"
                style={{ marginTop: "5px", color: "var(--black-12)" }}
              >
                {names[index % names.length]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBrands;

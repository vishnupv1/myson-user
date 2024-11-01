const products = [
  {
    _id: 1,
    name: "Classeq Glass Washer G400",
    description: [
      "G400 is an easy to operate glass washer with a 400 x 400mm basket that holds 16 pint-sized glasses.",
      " With its two minute wash cycles, this machine is capable of cleaning up to 480 pint glasses per hour.",
      "With a digital LED display, intuitive colour coded lighting and universally recognised symbols, this machine is incredibly easy to use.",
      "Additionally, its clever software constantly monitors wash cycles, temperatures, chemical usage and any errors giving valuable data which is used to improve operational efficiencies.",
    ],
    images: [
      "https://www.classeq.co.uk/uploads/products/classeq-g400/G400-basket-on-door.png",
      "https://www.classeq.co.uk/uploads/products/classeq-g500/G500_Rack_On_Door.png",
      "https://www.dihr.com/sync/img/HT 11 ECO.jpg",
    ],
    price: "1,45,000",
    specifications: ["Good glass", "Vibrant Design"],
  },
  {
    _id: 2,
    name: "Classeq Glass Washer G500  ",
    description: [
      "The D500 is an easy to operate dishwasher with a 500 x 500mm basket that holds 18 full-sized plates.",
      "With its three minute wash cycle, this machine is capable of cleaning up to 360 plates per hour.",
      "With a digital LED display, intuitive colour coded lighting and universally recognised symbols, this machine is incredibly easy to use.",
      "Additionally, its clever software constantly monitors wash cycles,temperatures, chemical usage and any errors giving valuable data which is used to improve operational efficiencies",
    ],
    images: [
      "https://www.classeq.co.uk/uploads/products/classeq-g500/G500_Rack_On_Door.png",
    ],
    price: "1,75,000",
    specifications: ["Good glass", "Vibrant Design"],
  },
  {
    _id: 3,
    name: "DIHR HT 11 Eco Hood Dishwasher",
    description: [
      "Hood operated start/stop functions.",
      "Two wash cycles (sec) 120/180 double skin door integrated suction/discharge circuit ,fo total drainibg .Anti dripping roof panel Door security.",
      "Built in rinse a_id pump Thermostop system Possibility of corner installation.",
      "Pump filter Easy to access for maintanance tank and boiler thermometers Fully automatic process.",
      "Easily removable basket support .Baskets supplied :2*glassses.2*cutlery basket Dimensions(L*W*H)720*735*1445mm  ",
    ],
    images: ["https://www.dihr.com/sync/img/HT 11 ECO.jpg"],
    price: "1,30,000",
    specifications: ["Good glass", "Vibrant Design"],
  },
  {
    _id: 4,
    name: "DIHR Conveyor Dishwasher Model:RX101E",
    description: [
      "Radial wash tanks sloped to help emptying the tanks.",
      "Self-cleaning vertical wash pumps, protected from electrical overloads.",
      "Traction system with built-in clutch preventing derailment.",
      "AISI 304 stainless steel boilers, fully insulated to reduce thermal losses.",
      "Low voltage electronic soft touch panel with IP65 security level, manufactured to be userfriendly and easy to be cleaned.",
      "S/S washing and rinsing arms.",
      "These are removable without using any tool, for easier cleaning operation or to help the change of working direction on the RX 101E.",
    ],
    images: ["https://www.scotsice.com.au/_images/_dihr/RX101E.jpg"],
    price: "1,45,000",
    specifications: ["Good glass", "Vibrant Design"],
  },
  {
    _id: 5,
    name: "DIHR Dishwasher Model:GS 35",
    description: [
      "AISI 304 structure",
      "Light wash and rinse arms, granting the best efficiency also when the water pressure in weaker",
      "Easy to remove nozzles, to help with daily cleaning operations",
      "Traction system with built-in clutch preventing derailment.",
      "Innovative system of coupled wash and rinse arms in polypropylene and fiber of glass (GS 50 ECO / GS 50 / GS 50 T / GS 85 T)",
      "Self-cleaning cycle on the TOUCH versions",
      "Soft Start wash pump on the TOUCH versions",
      "Additional upper surface filter (on demand only for GS 50 ECO / GS50 / GS50 T / GS 85 T) - Dimensions - 400 x 495 x 585 H ",
    ],
    images: [
      "https://5.imimg.com/data5/KI/TC/DV/SELLER-55362325/under-counter-glass-and-dishwashing-machine-500x500-500x500.jpg",
    ],
    price: "1,25,000",
    specifications: ["Good glass", "Vibrant Design"],
  },
  {
    _id: 6,
    name: "Convotherm Maxx Pro 10.10 Electric Combi Oven, 10+1 Shelves ",
    description: [
      "Steam generated by injecting water into the cooking chamber",
      "W x D x H : 875 x 797 x 1066",
      "Empty weight without options** / accessories in kg   :    125,5 ",
      "Rated power consumption in kW (3N~ 380-415V 50/60Hz (3/N/PE) :17.2-20.4",
    ],
    images: [
      "https://www.angliacateringequipment.com/wp-content/uploads/2022/09/Convotherm-Maxx-10.10-Electric-Combi-Oven-101-Shelves-GN-11-400x400.webp",
    ],
    price: "1,20,000",
    specifications: ["Good glass", "Vibrant Design"],
  },
  {
    _id: 7,
    name: "Western Touch Screen Hood Type Dishwasher",
    description: [
      "MODEL:WBM 1080T PDRT",
      "Stainless steel body including washing and boiler tank .",
      "69/35/27/23/18 racks per hour(Rack Dimensions 50*50* cm)",
      "2.8 ltr water consuption per cycle",
      "Washing Temperature at 55-60°C(water supply at a minium of 2 bar and 50°C)",
      "Rinsing Temperature at 80-85°C(water supply at a minimum of 2 bar and 50°C)",
    ],
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/433497978/YF/RL/NU/3241702/western-hoodtype-dishwasher-500x500.jpeg",
    ],
    price: "1,75,000",
    specifications: ["Good glass", "Vibrant Design"],
  },
  {
    _id: 8,
    name: " Convotherm 4 Easy Touch Gas Injection 6.1 ",
    description: [
      "Easy touch 10''TFT hirs",
      "glass-touch display led light in the cooking chamber",
      "triple glass cooking chamber door with right hinge",
      "Conv0 clean +fully automatic cleaning systems with economy ,regular and express modes(optionally with single measure dispensing)",
      "Filter care interface",
    ],
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2020/10/GQ/HQ/YN/30836614/combi-oven-convotherm-4-easy-touch-gas-injection-6-1-500x500.jpg",
    ],
    price: "1,50,000",
    specifications: ["Good glass", "Vibrant Design"],
  },
];

export default products;

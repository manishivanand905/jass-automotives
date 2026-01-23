export const productsData = [
  // PPF Brands
  {
    id: 1,
    name: "XPEL Ultimate Plus",
    brand: "XPEL",
    category: "PPF",
    logo: "/logos/xpel-logo.png",
    image: "/xpel-ppf.jpg",
    description:
      "Self-healing paint protection film with superior clarity and durability. Industry-leading 10-year warranty.",
    price: "₹45,000",
    features: [
      "Self-healing technology",
      "10-year warranty",
      "Superior optical clarity",
      "Stain and contamination resistant",
      "Hydrophobic top coat",
    ],
    detailedDescription:
      "XPEL ULTIMATE PLUS is the world's first and only self-healing paint protection film. Its clear coat technology allows the film to heal itself from swirl marks and light scratches with heat, keeping your vehicle looking newer longer. The film's non-yellowing adhesive is specifically formulated to prevent edge lifting and provides superior optical clarity.",
    specifications: {
      thickness: "8.5 mil",
      warranty: "10 years",
      finish: "Gloss",
      coverage: "Full front coverage",
    },
    specOptions: {
      thickness: [
        { value: "4.5 mil", priceModifier: -5000 },
        { value: "6.5 mil", priceModifier: 0 },
        { value: "8.5 mil", priceModifier: 8000 },
      ],
      warranty: [
        { value: "5 years", priceModifier: -3000 },
        { value: "7 years", priceModifier: 0 },
        { value: "10 years", priceModifier: 5000 },
      ],
      finish: [
        { value: "Matte", priceModifier: 0 },
        { value: "Gloss", priceModifier: 2000 },
        { value: "Satin", priceModifier: 3000 },
      ],
      coverage: [
        { value: "Front bumper only", priceModifier: -10000 },
        { value: "Full front coverage", priceModifier: 0 },
        { value: "Full body coverage", priceModifier: 50000 },
      ],
    },
    addons: [
      {
        id: "addon1",
        title: "Extended Coverage Package",
        description:
          "Add PPF protection to side mirrors, door edges, and rocker panels",
        price: "₹8,000",
        included: [
          "Side mirror caps",
          "Door edge guards",
          "Rocker panel protection",
          "Door handle cups",
        ],
      },
      {
        id: "addon2",
        title: "Headlight & Taillight Protection",
        description: "Protect your lights from stone chips and yellowing",
        price: "₹5,000",
        included: [
          "Front headlight PPF",
          "Rear taillight PPF",
          "Fog light protection",
          "UV protection",
        ],
      },
      {
        id: "addon3",
        title: "Maintenance Kit",
        description: "Professional care products to maintain your PPF",
        price: "₹3,500",
        included: [
          "PPF-safe car wash soap",
          "Microfiber towels",
          "Detail spray",
          "Application guide",
        ],
      },
    ],
  },
  {
    id: 2,
    name: "3M Scotchgard Pro Series",
    brand: "3M",
    category: "PPF",
    logo: "/logos/3m-logo.png",
    image: "/3m-ppf.jpg",
    description:
      "Premium paint protection with advanced self-healing properties and exceptional gloss retention.",
    price: "₹42,000",
    features: [
      "Self-healing clear coat",
      "7-year warranty",
      "Excellent optical clarity",
      "Stain resistant",
      "Easy maintenance",
    ],
    detailedDescription:
      "3M Scotchgard Pro Series Paint Protection Film provides premium protection against rock chips, bug acids, and minor abrasions. The film features a proprietary self-healing top coat that removes light scratches and swirl marks with heat. Its ultra-clear construction ensures your vehicle's paint color remains vibrant and true.",
    specifications: {
      thickness: "8 mil",
      warranty: "7 years",
      finish: "Gloss",
      coverage: "Full front coverage",
    },
    specOptions: {
      thickness: [
        { value: "4.5 mil", priceModifier: -4000 },
        { value: "6.5 mil", priceModifier: 0 },
        { value: "8 mil", priceModifier: 6000 },
      ],
      warranty: [
        { value: "5 years", priceModifier: -2000 },
        { value: "6.5 mil", priceModifier: 0 },
        { value: "10 years", priceModifier: 4000 },
      ],
      finish: [
        { value: "Matte", priceModifier: 0 },
        { value: "Gloss", priceModifier: 2000 },
        { value: "Satin", priceModifier: 3000 },
      ],
      coverage: [
        { value: "Front bumper only", priceModifier: -8000 },
        { value: "Full front coverage", priceModifier: 0 },
        { value: "Full body coverage", priceModifier: 45000 },
      ],
    },
    addons: [
      {
        id: "addon1",
        title: "Premium Coverage Upgrade",
        description: "Extend protection to high-impact areas",
        price: "₹7,500",
        included: [
          "A-pillar protection",
          "Side mirror full wrap",
          "Door sills",
          "Rear bumper loading area",
        ],
      },
      {
        id: "addon2",
        title: "Wheel Arch Protection",
        description: "Shield wheel arches from stone chips and debris",
        price: "₹6,000",
        included: [
          "Front wheel arch PPF",
          "Rear wheel arch PPF",
          "Custom cut installation",
          "Edge sealing",
        ],
      },
      {
        id: "addon3",
        title: "Ceramic Coating Top Layer",
        description: "Add ceramic coating over PPF for enhanced protection",
        price: "₹4,000",
        included: [
          "Ceramic coating application",
          "Enhanced hydrophobic properties",
          "Easier cleaning",
          "Added gloss",
        ],
      },
    ],
  },
  {
    id: 3,
    name: "LLumar Platinum",
    brand: "LLumar",
    category: "PPF",
    logo: "/logos/llumar-logo.png",
    image: "/llumar-ppf.jpg",
    description:
      "High-performance paint protection film with self-healing technology and superior impact resistance.",
    price: "₹40,000",
    features: [
      "Self-healing surface",
      "10-year warranty",
      "High gloss finish",
      "UV protection",
      "Stain resistant",
    ],
    detailedDescription:
      "LLumar Platinum Paint Protection Film offers exceptional clarity and protection. The self-healing top coat eliminates minor scratches and swirl marks, while the film's advanced adhesive system ensures long-lasting protection without edge lifting or yellowing. Perfect for maintaining your vehicle's showroom appearance.",
    specifications: {
      thickness: "8.5 mil",
      warranty: "10 years",
      finish: "Gloss",
      coverage: "Full front coverage",
    },
    specOptions: {
      thickness: [
        { value: "4.5 mil", priceModifier: -4500 },
        { value: "6.5 mil", priceModifier: 0 },
        { value: "8.5 mil", priceModifier: 7000 },
      ],
      warranty: [
        { value: "5 years", priceModifier: -2500 },
        { value: "7 years", priceModifier: 0 },
        { value: "10 years", priceModifier: 4500 },
      ],
      finish: [
        { value: "Matte", priceModifier: 0 },
        { value: "Gloss", priceModifier: 2000 },
        { value: "Satin", priceModifier: 3000 },
      ],
      coverage: [
        { value: "Front bumper only", priceModifier: -9000 },
        { value: "Full front coverage", priceModifier: 0 },
        { value: "Full body coverage", priceModifier: 48000 },
      ],
    },
    addons: [
      {
        id: "addon1",
        title: "Full Body Protection",
        description: "Complete vehicle PPF coverage for maximum protection",
        price: "₹85,000",
        included: [
          "Full hood, fenders, bumpers",
          "All doors and panels",
          "Roof and pillars",
          "Complete installation",
        ],
      },
      {
        id: "addon2",
        title: "Interior Protection Package",
        description: "Protect high-touch interior surfaces",
        price: "₹4,500",
        included: [
          "Door sill guards",
          "Center console protection",
          "Dashboard trim guards",
          "Door handle protection",
        ],
      },
      {
        id: "addon3",
        title: "Annual Maintenance Plan",
        description: "Professional maintenance service for one year",
        price: "₹5,000",
        included: [
          "Quarterly professional wash",
          "PPF inspection",
          "Minor touch-ups",
          "Maintenance products",
        ],
      },
    ],
  },
  // Ceramic Coating Brands
  {
    id: 4,
    name: "3M Ceramic Coating",
    brand: "3M",
    category: "Ceramic Coating",
    logo: "/logos/3m-logo.png",
    image: "/3m-ceramic.jpg",
    description:
      "Professional-grade ceramic coating with 5-year durability and exceptional hydrophobic properties.",
    price: "₹25,000",
    features: [
      "5-year protection",
      "9H hardness",
      "Extreme hydrophobic effect",
      "UV protection",
      "Chemical resistance",
    ],
    detailedDescription:
      "3M Ceramic Coating provides a permanent protective layer that bonds with your vehicle's paint. The coating creates a hydrophobic surface that repels water, dirt, and contaminants, making maintenance easier while providing long-lasting protection against environmental damage, UV rays, and chemical stains.",
    specifications: {
      hardness: "9H",
      warranty: "5 years",
      layers: "2 layers",
      thickness: "2 microns",
    },
    specOptions: {
      hardness: [
        { value: "7H", priceModifier: -3000 },
        { value: "9H", priceModifier: 0 },
        { value: "10H", priceModifier: 5000 },
      ],
      warranty: [
        { value: "3 years", priceModifier: -2000 },
        { value: "5 years", priceModifier: 0 },
        { value: "7 years", priceModifier: 4000 },
      ],
      layers: [
        { value: "1 layer", priceModifier: -4000 },
        { value: "2 layers", priceModifier: 0 },
        { value: "3 layers", priceModifier: 6000 },
      ],
      thickness: [
        { value: "1 micron", priceModifier: -2000 },
        { value: "2 microns", priceModifier: 0 },
        { value: "3 microns", priceModifier: 3000 },
      ],
    },
    addons: [
      {
        id: "addon1",
        title: "Glass Coating Package",
        description: "Apply ceramic coating to all glass surfaces",
        price: "₹6,000",
        included: [
          "Windshield coating",
          "Side window coating",
          "Rear window coating",
          "Enhanced visibility in rain",
        ],
      },
      {
        id: "addon2",
        title: "Wheel & Caliper Coating",
        description: "Protect wheels and brake calipers from brake dust",
        price: "₹8,000",
        included: [
          "All 4 wheels coated",
          "Brake caliper coating",
          "Easier cleaning",
          "Heat resistant formula",
        ],
      },
      {
        id: "addon3",
        title: "Interior Ceramic Protection",
        description: "Ceramic coating for leather and interior surfaces",
        price: "₹7,000",
        included: [
          "Leather seat coating",
          "Dashboard protection",
          "Door panel coating",
          "Stain resistance",
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Kovalent SiO2 Coating",
    brand: "Kovalent Coatings",
    category: "Ceramic Coating",
    logo: "/logos/kovalent-logo.png",
    image: "/kovalent-ceramic.jpg",
    description:
      "Advanced SiO2 ceramic coating with superior gloss enhancement and 7-year durability.",
    price: "₹28,000",
    features: [
      "7-year protection",
      "10H hardness",
      "Ultra-hydrophobic",
      "Scratch resistant",
      "Self-cleaning effect",
    ],
    detailedDescription:
      "Kovalent SiO2 Ceramic Coating utilizes advanced nanotechnology to create an ultra-durable protective layer. The coating provides exceptional gloss enhancement, superior water beading, and protection against scratches, swirl marks, and environmental contaminants. Its self-cleaning properties keep your vehicle looking pristine with minimal maintenance.",
    specifications: {
      hardness: "10H",
      warranty: "7 years",
      layers: "3 layers",
      thickness: "3 microns",
    },
    specOptions: {
      hardness: [
        { value: "7H", priceModifier: -4000 },
        { value: "9H", priceModifier: 0 },
        { value: "10H", priceModifier: 6000 },
      ],
      warranty: [
        { value: "3 years", priceModifier: -3000 },
        { value: "5 years", priceModifier: 0 },
        { value: "7 years", priceModifier: 5000 },
      ],
      layers: [
        { value: "1 layer", priceModifier: -5000 },
        { value: "2 layers", priceModifier: 0 },
        { value: "3 layers", priceModifier: 7000 },
      ],
      thickness: [
        { value: "1 micron", priceModifier: -3000 },
        { value: "2 microns", priceModifier: 0 },
        { value: "3 microns", priceModifier: 4000 },
      ],
    },
    addons: [
      {
        id: "addon1",
        title: "Premium Prep Package",
        description: "Professional paint correction before coating",
        price: "₹12,000",
        included: [
          "2-stage paint correction",
          "Swirl mark removal",
          "Scratch removal",
          "Paint decontamination",
        ],
      },
      {
        id: "addon2",
        title: "Trim & Plastic Coating",
        description: "Restore and protect exterior trim pieces",
        price: "₹5,500",
        included: [
          "Black trim restoration",
          "Plastic coating",
          "Rubber seal protection",
          "Long-lasting finish",
        ],
      },
      {
        id: "addon3",
        title: "Maintenance Booster Kit",
        description: "Annual coating booster and maintenance products",
        price: "₹4,500",
        included: [
          "Ceramic booster spray",
          "pH-neutral wash soap",
          "Microfiber towels",
          "Application pads",
        ],
      },
    ],
  },
  {
    id: 6,
    name: "System X Pro",
    brand: "System X",
    category: "Ceramic Coating",
    logo: "/logos/systemx-logo.png",
    image: "/systemx-ceramic.jpg",
    description:
      "Professional ceramic coating system with maximum durability and unmatched gloss depth.",
    price: "₹30,000",
    features: [
      "8-year protection",
      "10H hardness",
      "Superior gloss",
      "Chemical resistant",
      "Anti-graffiti properties",
    ],
    detailedDescription:
      "System X Pro is a professional-grade ceramic coating that provides the ultimate protection for your vehicle's paint. The multi-layer system creates an incredibly hard, glossy surface that resists scratches, chemicals, and environmental damage. Its advanced formula ensures maximum durability and ease of maintenance for years to come.",
    specifications: {
      hardness: "10H",
      warranty: "8 years",
      layers: "3 layers + top coat",
      thickness: "3.5 microns",
    },
    specOptions: {
      hardness: [
        { value: "7H", priceModifier: -5000 },
        { value: "9H", priceModifier: 0 },
        { value: "10H", priceModifier: 7000 },
      ],
      warranty: [
        { value: "3 years", priceModifier: -4000 },
        { value: "5 years", priceModifier: 0 },
        { value: "8 years", priceModifier: 6000 },
      ],
      layers: [
        { value: "1 layer", priceModifier: -6000 },
        { value: "2 layers", priceModifier: 0 },
        { value: "3 layers + top coat", priceModifier: 8000 },
      ],
      thickness: [
        { value: "1 micron", priceModifier: -4000 },
        { value: "2 microns", priceModifier: 0 },
        { value: "3.5 microns", priceModifier: 5000 },
      ],
    },
    addons: [
      {
        id: "addon1",
        title: "Complete Exterior Package",
        description: "Ceramic coating for all exterior surfaces",
        price: "₹15,000",
        included: [
          "Glass coating",
          "Wheel coating",
          "Trim coating",
          "Headlight coating",
        ],
      },
      {
        id: "addon2",
        title: "Paint Correction Deluxe",
        description: "Multi-stage paint correction for perfect finish",
        price: "₹18,000",
        included: [
          "3-stage paint correction",
          "Wet sanding (if needed)",
          "Hologram removal",
          "Mirror-like finish",
        ],
      },
      {
        id: "addon3",
        title: "Lifetime Maintenance Program",
        description: "Ongoing maintenance and inspection services",
        price: "₹10,000",
        included: [
          "Bi-annual inspection",
          "Coating top-up as needed",
          "Professional wash service",
          "Priority booking",
        ],
      },
    ],
  },
];

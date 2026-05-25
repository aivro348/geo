const fs = require('fs');
const path = require('path');

const appJsxPath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(appJsxPath, 'utf8');

const newServiceDetails = `const serviceDetails = {
  gis: {
    headline: "Geospatial Intelligence and Multi-Layer GIS Survey Engineering for Smart Utilities",
    detailedIntro: "We are committed to delivering highly precise geospatial intelligence solutions to address the complex geographical challenges of our time. With a multidisciplinary team of GIS experts and a wealth of experience in geospatial engineering, we offer a comprehensive range of mapping and spatial analysis services tailored to meet the unique needs of our clients and promote operational efficiency.",
    disciplines: [
      {
        title: "Telecom Network Solutions",
        desc: "Advanced GIS engineering for voice, data, and video networks, including outside plant (OSP) mapping, fiber-to-the-home (FTTH) layout designs, duct capacity planning, splice engineering, and spatial database migration."
      },
      {
        title: "Gas Distribution Networks",
        desc: "Domain-specific enterprise GIS solutions facilitating network integrity management. We support utilities with as-built conversions, data life cycle management, historical record auditing, leakage tracking, and cathodic protection mapping."
      },
      {
        title: "Electrical T&D Networks",
        desc: "Comprehensive geomatics for electric transmission and distribution networks, supporting duct configuration, station modeling, tower and utility pole asset audits, vegetation management, and smart grid data readiness."
      },
      {
        title: "Municipal Cadastral Mapping",
        desc: "High-precision digitization of land parcels, boundary surveys, taxation records integration, and property mapping to build modern, tax-optimized city planning grids and civic amenity layers."
      },
      {
        title: "Water & Sewage Utility Mapping",
        desc: "High-precision layout planning for clean water supply networks, wastewater sewer trunks, stormwater runoffs, valve pits, and pressure monitoring grids to guarantee safe municipal infrastructure."
      },
      {
        title: "Enterprise WebGIS Integration",
        desc: "Custom interactive web map portals and spatial databases built on PostgreSQL/PostGIS, optimized for real-time asset query operations, mobile field tracking, and seamless synchronization."
      }
    ],
    colorTheme: "blue"
  },
  cad: {
    headline: "Drafting the Blueprints of Modern Infrastructure with Millimeter-Level CAD Precision",
    detailedIntro: "We are committed to delivering meticulous digital drafting solutions to address the intricate design challenges of modern infrastructure. With a multidisciplinary team of drafting experts and a wealth of experience in CAD engineering, we offer a comprehensive range of architectural and mechanical drafting services tailored to meet the unique needs of our clients and promote structural excellence.",
    disciplines: [
      {
        title: "Architectural CAD Drafting",
        desc: "Converting structural elevations, floor plans, and layouts into accurate 2D vector plans and coordinated digital formats, complying with global building codes and spatial planning standards."
      },
      {
        title: "Mechanical & Structural Modeling",
        desc: "Generating detailed workshop fabrications drafts, structural steel details, plant equipment layouts, and complex mechanical piping designs to ensure high-fidelity manufacturing."
      },
      {
        title: "Civil & Utility Landbase Plans",
        desc: "Mapping municipal site developments, underground pipelines network routes, highways layouts, and utilities routing corridors for structural clearances and foundational engineering."
      },
      {
        title: "Structural Steel Shop Drawings",
        desc: "High-fidelity detailed layouts for structural connections, shop fabrication drawings, rebar layouts, concrete reinforcement schematics, and structural frames ensuring structural integrity."
      },
      {
        title: "Legacy Scan to CAD Vectorization",
        desc: "Converting old hand-drawn blue sheets, architectural sketches, and raster PDFs into highly structured, layered DWG/DXF drawings with perfect scale calibration and geometric fidelity."
      }
    ],
    colorTheme: "indigo"
  },
  photogrammetry: {
    headline: "High-Resolution Aerial Topography and Digital Photogrammetry Data Processing",
    detailedIntro: "We are committed to delivering highly accurate aerial mapping solutions to address the extensive surveying challenges of large-scale topographies. With a multidisciplinary team of photogrammetry experts and a wealth of experience in remote sensing, we offer a comprehensive range of 3D modeling and orthomapping services tailored to meet the unique needs of our clients and promote data-driven planning.",
    disciplines: [
      {
        title: "Digital Terrain Models (DTM) & DEMs",
        desc: "Extracting bare-earth elevation data and digital surface models using high-resolution stereo satellite imagery and aerial drone photography to support complex hydrological modeling."
      },
      {
        title: "High-Resolution Orthorectification",
        desc: "Generating seamless, color-balanced orthophoto mosaics that correct terrain displacement and camera tilt, providing perfectly flat and measurable photographic maps for urban planners."
      },
      {
        title: "Planimetric Feature Extraction",
        desc: "Heads-up 3D digitizing of buildings, road edges, water bodies, and vegetation boundaries to create accurate vector maps used in smart city development and property taxation."
      },
      {
        title: "UAV / Drone Data Processing",
        desc: "Transforming massive datasets of drone images into actionable point clouds, textured 3D meshes, and volumetric calculations for mining, quarrying, and construction site monitoring."
      },
      {
        title: "Volumetric Analysis & Contour Generation",
        desc: "Creating precise topographic contours and conducting stockpile volume measurements for excavation sites, land reclamation projects, and extensive earthwork planning."
      }
    ],
    colorTheme: "purple"
  },
  lidar: {
    headline: "Advanced LiDAR Point Cloud Classification and 3D Vectorization",
    detailedIntro: "We are committed to delivering highly dense spatial modeling solutions to address the complex scanning challenges of modern physical asset management. With a multidisciplinary team of LiDAR experts and a wealth of experience in laser scanning, we offer a comprehensive range of point cloud processing services tailored to meet the unique needs of our clients and promote structural safety.",
    disciplines: [
      {
        title: "Mobile LiDAR Scanning (MLS) Processing",
        desc: "Extracting high-detail corridor mapping assets including streetlights, traffic signs, road paint lines, and curb edges for autonomous vehicle navigation databases and highway planning."
      },
      {
        title: "Airborne LiDAR (ALS) Classification",
        desc: "Automated and manual classification of airborne laser returns to generate highly accurate ground models, separating vegetation canopy, buildings, and water bodies over massive rural areas."
      },
      {
        title: "Terrestrial Laser Scanning (TLS)",
        desc: "Processing millimeter-accurate static terrestrial scans for as-built modeling of industrial plants, heritage architecture preservation, and intricate mechanical room retrofits."
      },
      {
        title: "Powerline Corridor Mapping",
        desc: "Detecting transmission wires, modeling sag under various thermal conditions, mapping utility poles, and performing vegetation encroachment clearance analysis to prevent wildfire hazards."
      },
      {
        title: "3D City Modeling & Digital Twins",
        desc: "Generating highly accurate Level of Detail (LOD) 3D building models and urban meshes for smart city planning, line-of-sight analysis, and solar potential assessments."
      }
    ],
    colorTheme: "rose"
  },
  bim: {
    headline: "Intelligent Building Information Modeling (BIM) for Next-Gen Construction",
    detailedIntro: "We are committed to delivering comprehensive building modeling solutions to address the multi-dimensional construction challenges of our time. With a multidisciplinary team of BIM experts and a wealth of experience in architectural engineering, we offer a comprehensive range of digital twin services tailored to meet the unique needs of our clients and promote operational efficiency.",
    disciplines: [
      {
        title: "Architectural & Structural BIM",
        desc: "Developing parametric 3D models of building exteriors and load-bearing structures with precise material schedules, quantities, and properties for accurate cost estimation and design visualization."
      },
      {
        title: "MEP / FP Systems Coordination",
        desc: "Modeling highly complex Mechanical, Electrical, Plumbing, and Fire Protection systems within the building framework, ensuring seamless integration before physical construction begins."
      },
      {
        title: "Clash Detection & Resolution",
        desc: "Performing rigorous spatial interference checks using Navisworks to detect and resolve geometric clashes between structural beams, HVAC ducts, and plumbing pipes, eliminating expensive on-site rework."
      },
      {
        title: "Scan-to-BIM (As-Built Modeling)",
        desc: "Converting raw point cloud data from laser scans of existing facilities into intelligent, fully-attributed Revit BIM models for renovation, retrofitting, and facility management."
      },
      {
        title: "4D Construction Sequencing & 5D Costing",
        desc: "Linking the 3D building models with project schedules (4D) to simulate construction phases, and integrating cost data (5D) for real-time budgetary tracking and material procurement."
      }
    ],
    colorTheme: "orange"
  },
  topo: {
    headline: "High-Precision Topographical Land Surveying for Infrastructure Foundations",
    detailedIntro: "We are committed to delivering rigorous ground measurement solutions to address the foundational layout challenges of our time. With a multidisciplinary team of surveying experts and a wealth of experience in land geomatics, we offer a comprehensive range of topographical surveying services tailored to meet the unique needs of our clients and promote structural reliability.",
    disciplines: [
      {
        title: "Detailed Route & Corridor Surveys",
        desc: "Executing high-accuracy alignment surveys for upcoming highways, railway lines, cross-country oil & gas pipelines, and power transmission corridors over difficult terrains."
      },
      {
        title: "Hydrological & Bathymetric Surveys",
        desc: "Mapping the underwater topography of rivers, lakes, and coastal shores to support the design of dams, bridge piers, flood control systems, and port dredging operations."
      },
      {
        title: "Construction Layout & Stakeout",
        desc: "Translating digital engineering blueprints onto the physical ground by marking precise coordinates for building foundations, structural columns, and infrastructure grading limits."
      },
      {
        title: "Volume & Earthwork Calculations",
        desc: "Conducting highly accurate pre-and-post excavation surveys to calculate cut-and-fill volumes for mining operations, landfills, and massive land reclamation projects."
      },
      {
        title: "Cadastral & Boundary Demarcation",
        desc: "Legally establishing property lines, resolving land disputes, and generating certified boundary subdivision maps for massive real-estate and industrial park developments."
      }
    ],
    colorTheme: "teal"
  },
  dgps: {
    headline: "Centimeter-Grade DGPS / RTK Surveying for Geodetic Network Establishment",
    detailedIntro: "We are committed to delivering geodetic accuracy solutions to address the extreme positioning challenges of modern infrastructure networks. With a multidisciplinary team of DGPS experts and a wealth of experience in geodetic surveying, we offer a comprehensive range of positioning services tailored to meet the unique needs of our clients and promote unparalleled mapping accuracy.",
    disciplines: [
      {
        title: "Primary Geodetic Control Networks",
        desc: "Establishing highly stable, millimeter-accurate Primary Control Points (PCPs) over vast regional areas utilizing extended dual-frequency GNSS static observation methods."
      },
      {
        title: "Real-Time Kinematic (RTK) Rover Surveys",
        desc: "Deploying active RTK base and rover setups to capture thousands of high-precision topographic points, asset locations, and terrain breaks in real-time, drastically reducing field time."
      },
      {
        title: "Ground Control Point (GCP) Establishment",
        desc: "Setting up perfectly surveyed photo-identifiable targets on the ground to act as the mathematical anchor points for calibrating and orthorectifying drone and satellite imagery."
      },
      {
        title: "Deformation & Subsidence Monitoring",
        desc: "Conducting repeated, ultra-precise DGPS measurements over time to monitor the micro-movements, structural shifting, and land subsidence of dams, bridges, and tectonic fault zones."
      },
      {
        title: "Continuous Operating Reference Stations",
        desc: "Consulting, planning, and setting up CORS networks that broadcast real-time correction data to all active rover surveyors within a municipality or state."
      }
    ],
    colorTheme: "cyan"
  },
  netzero: {
    headline: "Corporate Net-Zero Strategy and Advanced Decarbonization Consulting",
    detailedIntro: "We are committed to delivering data-driven sustainability solutions to address the critical climate transition challenges of our time. With a multidisciplinary team of climate experts and a wealth of experience in decarbonization engineering, we offer a comprehensive range of Net-Zero consultancy services tailored to meet the unique needs of our clients and promote environmental stewardship.",
    disciplines: [
      {
        title: "GHG Inventory & Carbon Footprinting",
        desc: "Conducting rigorous Scope 1, Scope 2, and Scope 3 greenhouse gas emissions assessments aligned with the global GHG Protocol, providing a clear corporate carbon baseline."
      },
      {
        title: "Decarbonization Roadmap Development",
        desc: "Engineering customized, step-by-step technical pathways for heavy industries to transition to low-carbon operations through energy efficiency, electrification, and alternative fuels."
      },
      {
        title: "Renewable Energy Transition Layouts",
        desc: "Analyzing geographical potential and designing optimized layouts for the integration of solar, wind, and biomass energy systems into corporate manufacturing facilities."
      },
      {
        title: "Carbon Offset & Sequestration Strategy",
        desc: "Advising on the procurement of high-integrity verified carbon credits and developing nature-based afforestation strategies to offset residual, hard-to-abate emissions."
      },
      {
        title: "ESG Reporting & Regulatory Compliance",
        desc: "Structuring comprehensive corporate sustainability reports conforming to GRI, TCFD, and BRSR frameworks to satisfy investors and comply with upcoming global carbon taxes."
      }
    ],
    colorTheme: "emerald"
  },
  environmental: {
    headline: "Innovative and Sustainable Solutions Addressing the Most Pressing Environmental Challenges of Our Time",
    detailedIntro: "We are committed to delivering innovative and sustainable solutions to address the most pressing environmental challenges of our time. With a multidisciplinary team of experts and a wealth of experience in environmental engineering, we offer a comprehensive range of consultancy services tailored to meet the unique needs of our clients and promote environmental stewardship.",
    disciplines: [
      {
        title: "Environmental Impact Assessments (EIAs)",
        desc: "We conduct thorough EIAs to evaluate the potential environmental consequences of proposed projects and developments. Our assessments encompass air quality, water resources, biodiversity, and socio-economic factors, providing valuable insights to inform decision-making and mitigate adverse impacts."
      },
      {
        title: "Cleaning of Lakes and Rivers",
        desc: "We specialize in the restoration and rehabilitation of lakes and rivers, implementing strategies to address pollution, sedimentation, and habitat degradation. Our holistic approach combines ecological restoration techniques with water quality improvement measures, revitalizing aquatic ecosystems and enhancing recreational and aesthetic value."
      },
      {
        title: "River Beautification",
        desc: "We offer river beautification services aimed at enhancing the aesthetic appeal and ecological integrity of riverscapes. From landscape design to habitat creation and public space development, we create inviting and sustainable riverfront environments that promote biodiversity, recreation, and community engagement."
      },
      {
        title: "Waste Management and Resource Recovery",
        desc: "From waste reduction strategies to recycling and composting programs, we develop tailored waste management solutions that minimize environmental pollution and maximize resource recovery. Our expertise spans municipal, industrial, and hazardous waste management, with a focus on circular economy principles and sustainable waste practices."
      },
      {
        title: "Water and Wastewater Management",
        desc: "We design innovative solutions for water supply, treatment, and distribution systems to ensure access to clean and safe water for communities while minimizing environmental impact. Our wastewater management services encompass treatment plant design, stormwater management, and water reuse strategies, promoting water conservation and ecosystem protection."
      },
      {
        title: "Air Quality Monitoring and Control",
        desc: "We offer comprehensive air quality monitoring and modeling services to assess pollution levels, identify sources of emissions, and develop effective control measures. Our expertise extends to indoor air quality assessments, emissions inventories, and compliance with regulatory standards, facilitating healthier environments for both indoor and outdoor spaces."
      },
      {
        title: "Sustainable Infrastructure Design",
        desc: "We integrate sustainable design principles into infrastructure projects, from green building certifications to renewable energy systems and low-impact development techniques. Our holistic approach prioritizes environmental performance, energy efficiency, and resilience, creating infrastructure that enhances quality of life while minimizing environmental footprint."
      },
      {
        title: "Environmental Compliance and Permitting",
        desc: "We provide regulatory compliance support to ensure that projects meet local, national, and international environmental standards and requirements. From permit applications to environmental audits and compliance monitoring, we help clients navigate complex regulatory frameworks and achieve regulatory compliance effectively."
      }
    ],
    colorTheme: "green"
  },
  'software-services': {
    headline: "Custom Spatial Applications & Enterprise Software Services for Digital Transformation",
    detailedIntro: "We are committed to delivering high-performance software solutions to address the massive data processing challenges of our time. With a multidisciplinary team of software experts and a wealth of experience in enterprise engineering, we offer a comprehensive range of custom application services tailored to meet the unique needs of our clients and promote digital transformation.",
    disciplines: [
      {
        title: "Enterprise Map Portals",
        desc: "Coding custom interactive web map frontends (Leaflet, Mapbox, OpenLayers) coupled with secure, high-speed spatial query APIs to visualize corporate assets in real time."
      },
      {
        title: "Scalable Cloud Architecture",
        desc: "Setting up serverless spatial architectures, raster processing scripts, and automated vector tiling pipelines in secure cloud environments for maximum scalability."
      },
      {
        title: "Relational Database Engineering",
        desc: "Designing and tuning PostgreSQL / PostGIS schemas, building spatial indexes, and seamlessly integrating spatial data with corporate ERP systems."
      },
      {
        title: "Custom Desktop Automation",
        desc: "Designing custom automation desktop tools utilizing Python scripts, APIs, and specialized QGIS/ArcGIS extensions to eliminate repetitive manual processing workflows."
      },
      {
        title: "Mobile Tracking Applications",
        desc: "Engineering offline-capable mobile surveying and tracking applications equipped with real-time sync systems for seamless coordination between field teams and headquarters."
      }
    ],
    colorTheme: "dark"
  }
};`;

const regex = /const serviceDetails = \{[\s\S]*?\n\};\n\nfunction Home\(\)/;
content = content.replace(regex, newServiceDetails + '\n\nfunction Home()');

fs.writeFileSync(appJsxPath, content);
console.log("Successfully replaced serviceDetails block.");

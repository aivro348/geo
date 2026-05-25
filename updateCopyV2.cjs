const fs = require('fs');
const path = require('path');

const appJsxPath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(appJsxPath, 'utf8');

const newServiceDetails = `const serviceDetails = {
  gis: {
    headline: "Geospatial Intelligence and Multi-Layer GIS Survey Engineering",
    detailedIntro: "We are committed to delivering highly precise geospatial intelligence solutions to address the complex geographical and logistical challenges of our modern era. With a multidisciplinary team of GIS experts, cartographers, and spatial analysts, alongside a wealth of experience in enterprise geospatial engineering, we offer a comprehensive suite of mapping and spatial analysis services. Our solutions are meticulously tailored to meet the unique operational needs of utility networks, telecommunications, and municipal governance, promoting unparalleled operational efficiency and data-driven decision-making.",
    disciplines: [
      {
        title: "Telecom Network Solutions",
        desc: "Advanced GIS engineering for voice, data, and video networks. Our services encompass exhaustive outside plant (OSP) mapping, intricate fiber-to-the-home (FTTH) layout designs, and precise duct capacity planning. We leverage industry-leading platforms to ensure seamless spatial database migrations and real-time network asset tracking, allowing telecom providers to drastically reduce deployment cycles and optimize their physical infrastructure."
      },
      {
        title: "Gas Distribution Networks",
        desc: "Domain-specific enterprise GIS solutions facilitating rigorous network integrity management. We support gas utilities with highly accurate as-built conversions, holistic data life cycle management, and historical record auditing. Our spatial tools enable precise leakage tracking and cathodic protection mapping, ensuring absolute regulatory compliance and maximum safety for high-pressure distribution grids."
      },
      {
        title: "Electrical T&D Networks",
        desc: "Comprehensive geomatics and spatial modeling for electric transmission and distribution networks. We support foundational duct configuration, sub-station 3D modeling, and comprehensive utility pole asset audits. By integrating vegetation management overlays and smart grid readiness data, we help power companies prevent outages and optimize grid load distribution."
      },
      {
        title: "Municipal Cadastral Mapping",
        desc: "High-precision digitization of land parcels, boundary surveys, and taxation records integration. We transform legacy paper maps into dynamic digital property mapping systems to build modern, tax-optimized city planning grids. Our cadastral layers serve as the foundational truth for civic amenity planning, land dispute resolution, and urban expansion zoning."
      },
      {
        title: "Water & Sewage Utility Mapping",
        desc: "High-precision layout planning and spatial cataloging for clean water supply networks, wastewater sewer trunks, and stormwater runoffs. We map critical nodes such as valve pits, pumping stations, and pressure monitoring grids, granting municipal bodies the geospatial insight required to guarantee safe, uninterrupted, and leak-free municipal water infrastructure."
      },
      {
        title: "Enterprise WebGIS Integration",
        desc: "Custom interactive web map portals and spatial databases built on robust PostgreSQL/PostGIS architectures. These bespoke enterprise systems are optimized for real-time asset query operations, mobile field workforce tracking, and seamless synchronization with corporate ERP software, unifying field operations with boardroom strategy."
      }
    ],
    colorTheme: "blue"
  },
  cad: {
    headline: "Drafting the Blueprints of Modern Infrastructure with Millimeter-Level CAD Precision",
    detailedIntro: "We are committed to delivering meticulous digital drafting solutions to address the intricate design and architectural challenges of modern infrastructure. With a multidisciplinary team of drafting experts, structural modelers, and a wealth of experience in CAD engineering, we offer a comprehensive range of architectural and mechanical drafting services. Our outputs are tailored to meet the exacting compliance needs of our clients, promoting structural excellence, reducing on-site errors, and accelerating the construction lifecycle.",
    disciplines: [
      {
        title: "Architectural CAD Drafting",
        desc: "Converting structural elevations, floor plans, and complex spatial layouts into highly accurate 2D vector plans and coordinated digital formats. Our architectural drafting services strictly comply with global building codes and spatial planning standards, ensuring that every line, layer, and annotation flawlessly translates the architect's vision into an executable blueprint."
      },
      {
        title: "Mechanical & Structural Modeling",
        desc: "Generating detailed workshop fabrications drafts, intricate structural steel details, massive plant equipment layouts, and complex mechanical piping designs. We bridge the gap between design and manufacturing, providing structural engineers and fabricators with the high-fidelity schematics necessary to ensure absolute precision during physical assembly."
      },
      {
        title: "Civil & Utility Landbase Plans",
        desc: "Mapping extensive municipal site developments, underground pipelines network routes, cross-country highway layouts, and utilities routing corridors. Our civil drafting ensures that all structural clearances and foundational engineering requirements are perfectly accounted for before the first excavator touches the ground."
      },
      {
        title: "Structural Steel Shop Drawings",
        desc: "High-fidelity detailed layouts engineered specifically for structural steel connections, shop fabrication drawings, and concrete reinforcement schematics. We map out rebar layouts and structural frames with millimeter accuracy, guaranteeing the structural integrity and load-bearing safety of large-scale commercial constructions."
      },
      {
        title: "Legacy Scan to CAD Vectorization",
        desc: "Resurrecting historical and legacy engineering data by converting old hand-drawn blue sheets, fading architectural sketches, and raster PDFs into highly structured, multi-layered DWG/DXF drawings. Our vectorization process guarantees perfect scale calibration and geometric fidelity, modernizing your engineering archives."
      }
    ],
    colorTheme: "indigo"
  },
  photogrammetry: {
    headline: "High-Resolution Aerial Topography and Digital Photogrammetry",
    detailedIntro: "We are committed to delivering highly accurate aerial mapping solutions to address the extensive surveying challenges of large-scale, complex topographies. With a multidisciplinary team of photogrammetry experts, geospatial analysts, and a wealth of experience in remote sensing technologies, we offer a comprehensive range of 3D modeling and orthomapping services. These solutions are uniquely tailored to meet the exacting spatial needs of urban planners and civil engineers, promoting data-driven planning and rapid regional assessment.",
    disciplines: [
      {
        title: "Digital Terrain Models (DTM) & DEMs",
        desc: "Extracting highly accurate bare-earth elevation data and digital surface models using high-resolution stereo satellite imagery and advanced aerial drone photography. These core elevation models serve as the vital baseline for complex hydrological modeling, flood risk assessment, and massive earthwork volume calculations."
      },
      {
        title: "High-Resolution Orthorectification",
        desc: "Generating seamless, color-balanced, and perfectly scaled orthophoto mosaics that surgically correct terrain displacement and camera tilt. We provide flawlessly flat and measurable photographic maps that serve as the ultimate visual baseline for urban planners, agricultural monitoring, and environmental tracking."
      },
      {
        title: "Planimetric Feature Extraction",
        desc: "Executing rigorous heads-up 3D digitizing of buildings, road edges, complex water bodies, and vegetation boundaries. We translate raw aerial pixels into highly accurate, attributed vector maps used globally in smart city development, emergency routing, and municipal property taxation registries."
      },
      {
        title: "UAV / Drone Data Processing",
        desc: "Transforming massive, unwieldy datasets of overlapping drone images into highly actionable deliverables. We generate dense point clouds, textured 3D meshes, and rapid volumetric calculations, empowering mining operations, quarrying logistics, and construction site managers with near real-time topographical intelligence."
      },
      {
        title: "Volumetric Analysis & Contour Generation",
        desc: "Creating precise, highly detailed topographic contours and conducting rigorous stockpile volume measurements. Our analytical outputs are essential for excavation sites, land reclamation projects, and extensive earthwork planning, ensuring that contractors have pinpoint accuracy regarding material movement."
      }
    ],
    colorTheme: "purple"
  },
  lidar: {
    headline: "Advanced LiDAR Point Cloud Classification and 3D Vectorization",
    detailedIntro: "We are committed to delivering exceptionally dense spatial modeling solutions to address the complex scanning challenges of modern physical asset management. With a multidisciplinary team of LiDAR classification experts and a wealth of experience in laser scanning, we offer a comprehensive range of point cloud processing services. Our workflows are custom-tailored to meet the high-stakes needs of infrastructure developers, promoting absolute structural safety and unparalleled geometric accuracy.",
    disciplines: [
      {
        title: "Mobile LiDAR Scanning (MLS) Processing",
        desc: "Extracting incredibly high-detail corridor mapping assets from vehicle-mounted laser scanners. We digitize streetlights, traffic signs, road paint lines, curb edges, and overhead clearances, building the foundational 3D vector databases required for autonomous vehicle navigation and next-generation highway planning."
      },
      {
        title: "Airborne LiDAR (ALS) Classification",
        desc: "Deploying automated algorithms and rigorous manual classification techniques to categorize millions of airborne laser returns. We generate highly accurate bare-earth ground models by meticulously separating dense vegetation canopy, structural buildings, and water bodies across massive, rugged rural and urban landscapes."
      },
      {
        title: "Terrestrial Laser Scanning (TLS)",
        desc: "Processing incredibly dense, millimeter-accurate static terrestrial scans designed for complex as-built modeling. Our TLS workflows are critical for the reverse engineering of intricate industrial plants, the digital preservation of heritage architecture, and the precise retrofitting of hyper-dense mechanical and utility rooms."
      },
      {
        title: "Powerline Corridor Mapping",
        desc: "Detecting ultra-thin transmission wires and modeling their thermal sag under various environmental conditions. We map utility poles, guy wires, and perform rigorous vegetation encroachment clearance analysis, equipping power utilities with the precise data needed to prevent catastrophic wildfire hazards and grid failures."
      },
      {
        title: "3D City Modeling & Digital Twins",
        desc: "Generating highly accurate, semantic Level of Detail (LOD) 3D building models and immersive urban meshes. These rich digital twins serve as the backbone for smart city planning, 5G signal line-of-sight analysis, and comprehensive municipal solar potential assessments."
      }
    ],
    colorTheme: "rose"
  },
  bim: {
    headline: "Intelligent Building Information Modeling (BIM) for Next-Gen Construction",
    detailedIntro: "We are committed to delivering comprehensive building modeling solutions to address the multi-dimensional construction and coordination challenges of our time. With a multidisciplinary team of BIM experts, architectural engineers, and a wealth of experience in virtual design and construction (VDC), we offer a comprehensive range of digital twin services. Our solutions are tailored to meet the collaborative needs of modern contractors, promoting operational efficiency and eliminating costly on-site clashes.",
    disciplines: [
      {
        title: "Architectural & Structural BIM",
        desc: "Developing highly parametric, data-rich 3D models of complex building exteriors and load-bearing structures. Our models are embedded with precise material schedules, quantities, and thermal properties, serving as an infallible foundation for highly accurate cost estimation and breathtaking design visualization."
      },
      {
        title: "MEP / FP Systems Coordination",
        desc: "Modeling intensely complex Mechanical, Electrical, Plumbing, and Fire Protection systems within the central building framework. We ensure that every duct, pipe, and conduit is seamlessly integrated into the structural model before physical construction begins, bridging the gap between engineering theory and practical installation."
      },
      {
        title: "Clash Detection & Resolution",
        desc: "Performing rigorous spatial interference checks using advanced platforms like Navisworks to detect and resolve geometric clashes. By identifying conflicts between structural beams, HVAC ducts, and plumbing pipes in the digital realm, we completely eliminate expensive, schedule-destroying on-site rework."
      },
      {
        title: "Scan-to-BIM (As-Built Modeling)",
        desc: "Converting raw, unorganized point cloud data from laser scans of existing facilities into highly intelligent, fully-attributed Revit BIM models. This process is absolutely essential for the accurate renovation, retrofitting, and long-term digital facility management of aging or historical infrastructure."
      },
      {
        title: "4D Construction Sequencing & 5D Costing",
        desc: "Taking BIM beyond spatial geometry by linking the 3D building models with precise project schedules (4D) to dynamically simulate construction phases. Furthermore, we integrate granular cost data (5D) to provide stakeholders with real-time budgetary tracking, automated material procurement, and precise cash-flow forecasting."
      }
    ],
    colorTheme: "orange"
  },
  topo: {
    headline: "High-Precision Topographical Land Surveying for Infrastructure Foundations",
    detailedIntro: "We are committed to delivering rigorous ground measurement solutions to address the foundational layout and cartographic challenges of our time. With a multidisciplinary team of surveying experts, geomatic engineers, and a wealth of experience in field operations, we offer a comprehensive range of topographical surveying services. Our approaches are tailored to meet the strict regulatory and engineering needs of our clients, promoting absolute structural reliability from the ground up.",
    disciplines: [
      {
        title: "Detailed Route & Corridor Surveys",
        desc: "Executing exceptionally high-accuracy alignment and cross-sectional surveys for upcoming mega-infrastructure. Whether mapping multi-lane highways, high-speed railway lines, cross-country oil & gas pipelines, or power transmission corridors, we deliver the definitive ground truth required over the most difficult, unyielding terrains."
      },
      {
        title: "Hydrological & Bathymetric Surveys",
        desc: "Mapping the hidden, complex underwater topography of raging rivers, expansive lakes, and volatile coastal shores. Our bathymetric data provides critical volumetric insights to support the structural design of massive dams, bridge piers, municipal flood control systems, and complex port dredging operations."
      },
      {
        title: "Construction Layout & Stakeout",
        desc: "Translating digital engineering blueprints onto the physical ground with absolute, uncompromising precision. We mark exact global coordinates for foundational building footings, load-bearing structural columns, and extensive infrastructure grading limits, ensuring the physical build matches the digital design flawlessly."
      },
      {
        title: "Volume & Earthwork Calculations",
        desc: "Conducting highly accurate pre-and-post excavation topographical surveys to calculate exact cut-and-fill volumes. Our precise volumetric reporting is the financial baseline for massive mining operations, municipal landfills, and extensive land reclamation projects, ensuring contractors are compensated accurately for earth moved."
      },
      {
        title: "Cadastral & Boundary Demarcation",
        desc: "Legally establishing property lines, resolving complex historical land disputes, and generating certified boundary subdivision maps. Our cadastral surveys provide the unquestionable legal foundation required for massive commercial real-estate transactions and sprawling industrial park developments."
      }
    ],
    colorTheme: "teal"
  },
  dgps: {
    headline: "Centimeter-Grade DGPS / RTK Surveying for Geodetic Network Establishment",
    detailedIntro: "We are committed to delivering geodetic accuracy solutions to address the extreme positioning challenges of modern, wide-area infrastructure networks. With a multidisciplinary team of DGPS experts, satellite positioning analysts, and a wealth of experience in geodetic surveying, we offer a comprehensive range of positioning services. Our networks are meticulously tailored to meet the unique locational needs of our clients, promoting unparalleled mapping accuracy across massive geographical spans.",
    disciplines: [
      {
        title: "Primary Geodetic Control Networks",
        desc: "Establishing highly stable, millimeter-accurate Primary Control Points (PCPs) over vast regional and national areas. Utilizing extended dual-frequency GNSS static observation methods, we build the unshakeable coordinate framework upon which all subsequent regional engineering and mapping projects are anchored."
      },
      {
        title: "Real-Time Kinematic (RTK) Rover Surveys",
        desc: "Deploying active RTK base and rover setups to capture thousands of high-precision topographic points, critical asset locations, and terrain breaks in real-time. This dynamic surveying method drastically reduces field time while guaranteeing centimeter-level accuracy for immediate engineering application."
      },
      {
        title: "Ground Control Point (GCP) Establishment",
        desc: "Setting up perfectly surveyed, highly visible, photo-identifiable targets on the ground. These GCPs act as the vital mathematical anchor points necessary for calibrating, scaling, and orthorectifying high-altitude drone and satellite imagery, ensuring the resulting maps are geographically flawless."
      },
      {
        title: "Deformation & Subsidence Monitoring",
        desc: "Conducting repeated, ultra-precise DGPS measurements over extended periods to monitor micro-movements. We track structural shifting, concrete bowing, and dangerous land subsidence around critical infrastructure like mega-dams, suspension bridges, and active tectonic fault zones to predict and prevent catastrophic failures."
      },
      {
        title: "Continuous Operating Reference Stations",
        desc: "Consulting, planning, and physically setting up advanced CORS networks. These continuous stations broadcast real-time, highly encrypted correction data to all active rover surveyors within a municipality or state, democratizing centimeter-level accuracy for local engineering and agricultural fleets."
      }
    ],
    colorTheme: "cyan"
  },
  netzero: {
    headline: "Corporate Net-Zero Strategy and Advanced Decarbonization Consulting",
    detailedIntro: "We are committed to delivering data-driven sustainability solutions to address the critical, existential climate transition challenges of our time. With a multidisciplinary team of climate scientists, energy transition experts, and a wealth of experience in decarbonization engineering, we offer a comprehensive range of Net-Zero consultancy services. Our blueprints are uniquely tailored to meet the stringent regulatory needs of corporate clients, promoting environmental stewardship while maintaining financial profitability.",
    disciplines: [
      {
        title: "GHG Inventory & Carbon Footprinting",
        desc: "Conducting highly rigorous Scope 1, Scope 2, and Scope 3 greenhouse gas emissions assessments fully aligned with the global GHG Protocol. We map the entire corporate value chain to provide a brutally honest, data-backed corporate carbon baseline, revealing exactly where emissions are generated and where they can be cut."
      },
      {
        title: "Decarbonization Roadmap Development",
        desc: "Engineering customized, step-by-step technical and financial pathways for heavy industries to transition to low-carbon operations. We model the NPV and ROI of aggressive energy efficiency retrofits, massive fleet electrification, and the adoption of alternative fuels, ensuring the transition to green energy is financially sound."
      },
      {
        title: "Renewable Energy Transition Layouts",
        desc: "Analyzing geographical potential and designing highly optimized spatial layouts for the integration of solar arrays, wind turbines, and biomass energy systems. We seamlessly integrate these renewable power generation assets into existing corporate manufacturing facilities and global supply chain hubs."
      },
      {
        title: "Carbon Offset & Sequestration Strategy",
        desc: "Advising on the secure procurement of high-integrity, internationally verified carbon credits. Furthermore, we develop and monitor long-term, nature-based afforestation and soil sequestration strategies to authentically offset residual, hard-to-abate emissions that technology cannot currently eliminate."
      },
      {
        title: "ESG Reporting & Regulatory Compliance",
        desc: "Structuring comprehensive, audit-proof corporate sustainability reports conforming strictly to GRI, TCFD, and BRSR frameworks. We translate complex decarbonization data into transparent reporting metrics to satisfy aggressive institutional investors and guarantee compliance with upcoming, punitive global carbon taxes."
      }
    ],
    colorTheme: "emerald"
  },
  environmental: {
    headline: "Innovative and Sustainable Solutions Addressing Global Environmental Challenges",
    detailedIntro: "We are committed to delivering highly innovative and deeply sustainable solutions to address the most pressing, complex environmental challenges of our time. With a multidisciplinary team of ecologists, environmental engineers, and a wealth of experience in habitat restoration, we offer a comprehensive range of consultancy services. Our holistic approaches are carefully tailored to meet the unique ecological needs of our clients, promoting profound environmental stewardship and long-term planetary health.",
    disciplines: [
      {
        title: "Environmental Impact Assessments (EIAs)",
        desc: "We conduct exhaustive, science-backed EIAs to meticulously evaluate the potential environmental consequences of proposed mega-projects and urban developments. Our rigorous assessments encompass long-term air quality modeling, underground water resource tracking, critical biodiversity mapping, and localized socio-economic factors, providing invaluable insights to inform governmental decision-making and aggressively mitigate adverse impacts."
      },
      {
        title: "Cleaning of Lakes and Rivers",
        desc: "We specialize in the aggressive restoration and long-term rehabilitation of severely degraded lakes and rivers. We implement cutting-edge engineering strategies to halt industrial pollution, reverse heavy sedimentation, and reconstruct destroyed habitat degradation. Our holistic approach combines organic ecological restoration techniques with advanced water quality improvement measures, fundamentally revitalizing aquatic ecosystems and dramatically enhancing recreational value."
      },
      {
        title: "River Beautification",
        desc: "We offer visionary river beautification services aimed at massively enhancing the aesthetic appeal and deep ecological integrity of urban riverscapes. From breathtaking landscape architecture to intricate native habitat creation and robust public space development, we design inviting, highly sustainable riverfront environments that promote thriving biodiversity, robust public recreation, and deep community engagement."
      },
      {
        title: "Waste Management and Resource Recovery",
        desc: "From aggressive corporate waste reduction strategies to massive municipal recycling and industrial composting programs, we engineer tailored waste management solutions. Our strategies are designed to absolutely minimize environmental pollution while maximizing the financial recovery of resources. Our expertise spans municipal, highly industrial, and toxic hazardous waste management, maintaining a relentless focus on circular economy principles."
      },
      {
        title: "Water and Wastewater Management",
        desc: "We design highly innovative, energy-efficient solutions for massive water supply, treatment, and municipal distribution systems to ensure universal access to clean, safe water. Our advanced wastewater management services encompass futuristic treatment plant design, intelligent stormwater management, and aggressive water reuse strategies, vigorously promoting water conservation and delicate ecosystem protection."
      },
      {
        title: "Air Quality Monitoring and Control",
        desc: "We offer highly comprehensive, sensor-driven air quality monitoring and complex atmospheric modeling services. We assess hyper-local pollution levels, mathematically identify hidden sources of industrial emissions, and develop highly effective, actionable control measures. Our vast expertise extends to indoor air quality assessments, massive corporate emissions inventories, and ensuring absolute compliance with strict regulatory standards."
      },
      {
        title: "Sustainable Infrastructure Design",
        desc: "We deeply integrate advanced sustainable design principles into massive infrastructure projects. From securing elite green building certifications (LEED/BREEAM) to designing decentralized renewable energy systems and deploying low-impact development techniques, our holistic approach relentlessly prioritizes high environmental performance, extreme energy efficiency, and climate resilience."
      },
      {
        title: "Environmental Compliance and Permitting",
        desc: "We provide ironclad regulatory compliance support to ensure that massive industrial and civil projects effortlessly meet incredibly strict local, national, and international environmental standards. From navigating labyrinthine permit applications to conducting aggressive environmental audits and setting up continuous compliance monitoring systems, we help clients master complex regulatory frameworks."
      }
    ],
    colorTheme: "green"
  },
  'software-services': {
    headline: "Custom Spatial Applications & Enterprise Software Services",
    detailedIntro: "We are committed to delivering high-performance, bespoke software solutions to address the massive data processing and visualization challenges of our time. With a multidisciplinary team of full-stack software engineers, spatial database architects, and a wealth of experience in enterprise digital transformation, we offer a comprehensive range of custom application services. Our code is engineered to meet the unique operational needs of modern, data-heavy enterprises, promoting rapid digital transformation and unparalleled agility.",
    disciplines: [
      {
        title: "Enterprise Web Map Portals",
        desc: "Coding exceptionally fast, custom interactive web map frontends utilizing industry standards like Leaflet, Mapbox GL JS, and OpenLayers. We couple these highly responsive React interfaces with secure, high-speed spatial query APIs, empowering corporate teams to visualize, query, and analyze millions of geographically distributed assets in absolute real-time."
      },
      {
        title: "Scalable Cloud Architecture",
        desc: "Setting up entirely serverless spatial architectures, massive parallel raster processing scripts, and highly automated vector tiling pipelines. By deploying these systems in highly secure cloud environments like AWS and Azure, we guarantee maximum scalability, ensuring your geospatial applications perform flawlessly whether handling ten users or ten thousand."
      },
      {
        title: "Relational Database Engineering",
        desc: "Architecting, designing, and meticulously tuning massive PostgreSQL and PostGIS database schemas. We build incredibly fast spatial indexes (GIST) and craft the secure middleware required to seamlessly synchronize raw spatial geometries with massive corporate ERP systems like SAP, effectively bridging the gap between mapping and accounting."
      },
      {
        title: "Custom Desktop Automation",
        desc: "Designing highly intelligent custom automation desktop tools utilizing deep Python scripting, REST APIs, and specialized QGIS or ArcGIS software extensions. We fundamentally eliminate repetitive, error-prone manual processing workflows, freeing up your highly-paid engineering talent to focus on complex analysis rather than tedious data entry."
      },
      {
        title: "Mobile Tracking Applications",
        desc: "Engineering rugged, fully offline-capable mobile surveying and workforce tracking applications. Equipped with highly robust real-time synchronization systems, these mobile apps ensure seamless, error-free data coordination between remote field surveyors operating in dead zones and project managers sitting in the central headquarters."
      }
    ],
    colorTheme: "dark"
  }
};`;

const regex = /const serviceDetails = \{[\s\S]*?\n\};\n\nfunction Home\(\)/;
content = content.replace(regex, newServiceDetails + '\n\nfunction Home()');

fs.writeFileSync(appJsxPath, content);
console.log("Successfully replaced serviceDetails block with highly detailed V2 copy.");

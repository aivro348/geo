import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, Map, Plane, Compass, Satellite, Leaf, Recycle, MapPin, Mail, Phone, Target, Eye, Briefcase, Monitor, Code, Menu, X, ArrowUp, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const services = [
  {
    id: 'gis',
    title: 'GIS Survey',
    desc: 'Advanced Geographic Information System mapping delivering precise spatial analysis and data visualization for comprehensive project planning.',
    img: '/images/gis.png',
    icon: <Map size={24} />
  },
  {
    id: 'cad',
    title: 'CAD',
    desc: 'Precision 2D and 3D Computer-Aided Design drafting and modeling services for intricate architectural and engineering projects.',
    img: '/images/cad.png',
    icon: <Monitor size={24} />
  },
  {
    id: 'digital-photogrammetry',
    title: 'Digital Photogrammetry',
    desc: 'High-accuracy digital photogrammetry mapping converting high-resolution imagery into reliable 3D topographical models.',
    img: '/images/digital photogrammetry.png',
    icon: <Satellite size={24} />
  },
  {
    id: 'lidar',
    title: 'LiDAR Drone Technologies',
    desc: 'High-resolution aerial data acquisition using cutting-edge LiDAR sensors for accurate topographical modeling and surveying.',
    img: '/images/lidar drone technology.png',
    icon: <Plane size={24} />
  },
  {
    id: 'bim',
    title: 'BIM',
    desc: 'Advanced Building Information Modeling integration for clash detection, simulation, and holistic project lifecycle management.',
    img: '/images/bim_service.png',
    icon: <Target size={24} />
  },
  {
    id: 'topo',
    title: 'Topographic Survey',
    desc: 'Detailed mapping of natural and man-made features to establish precise elevations and land contours for engineering design.',
    img: '/images/topographic_survey_1779356408057.png',
    icon: <Compass size={24} />
  },
  {
    id: 'dgps',
    title: 'DGPS Survey',
    desc: 'Differential Global Positioning System surveys providing millimeter-level accuracy for critical infrastructure positioning.',
    img: '/images/dgps_survey_1779356422753.png',
    icon: <Satellite size={24} />
  },
  {
    id: 'netzero',
    title: 'NetZero Consulting',
    desc: 'Strategic consulting in energy, water, and waste to help your organization achieve ambitious sustainability and net-zero goals.',
    img: '/images/Netzero.png',
    icon: <Recycle size={24} />
  },
  {
    id: 'environmental',
    title: 'Earth & Environmental Engineering',
    desc: 'Innovative and sustainable solutions addressing global environmental challenges, specializing in water restoration, waste recovery, and compliance.',
    img: '/images/environmental.png',
    icon: <Leaf size={24} />
  },
  {
    id: 'software-services',
    title: 'Software Services',
    desc: 'Custom software development, IT consulting, and enterprise platform engineering to accelerate your digital transformation.',
    img: '/images/software_service.png',
    icon: <Code size={24} />
  }
];

const serviceDetails = {
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
  'digital-photogrammetry': {
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
};

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Slideshow */}
      <section className="hero">
        {services.map((service, index) => (
          <div key={service.id} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={service.img} alt={service.title} />
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1>{service.title}</h1>
                <p>{service.desc}</p>
                <Link to={`/services/${service.id}`} className="btn btn-primary">
                  Explore Service <ArrowRight size={18} style={{ marginLeft: 8 }} />
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* About Section - Mission, Vision, Consulting */}
      <section id="about" className="section" style={{ backgroundColor: 'var(--white)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Who We Are</h2>
          <p className="section-subtitle" style={{ marginBottom: '40px' }}>
            Pioneering the future of geospatial engineering, environmental sustainability, and seamless business transitions.
          </p>
        </motion.div>

        <div className="services-grid" style={{ marginTop: '30px' }}>
          <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="service-content" style={{ padding: '40px' }}>
              <div className="service-icon" style={{ marginTop: '0', backgroundColor: '#e6f0fa' }}>
                <Target size={24} />
              </div>
              <h3 className="service-title" style={{ marginTop: '20px' }}>Our Mission</h3>
              <p className="service-desc" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                To develop innovative solutions and product offerings which intelligently aggregate and address the complex needs of our customers across diverse sectors.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="service-content" style={{ padding: '40px' }}>
              <div className="service-icon" style={{ marginTop: '0', backgroundColor: '#e6f0fa' }}>
                <Eye size={24} />
              </div>
              <h3 className="service-title" style={{ marginTop: '20px' }}>Our Vision</h3>
              <p className="service-desc" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                Creating exemplary services with consistency in delivery, uniformity in pricing, and a continuous drive for enhancing our inherent quality potential.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="service-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="service-content" style={{ padding: '40px' }}>
              <div className="service-icon" style={{ marginTop: '0', backgroundColor: '#e6f0fa' }}>
                <Briefcase size={24} />
              </div>
              <h3 className="service-title" style={{ marginTop: '20px' }}>Consulting Philosophy</h3>
              <p className="service-desc" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                Our consulting services combine business process, financial, and technology elements to make transitions straightforward, ensuring seamless migrations to new platforms without adversely affecting your operational ability.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">
            Leveraging cutting-edge technology to deliver precise surveys and sustainable consulting solutions for a better tomorrow.
          </p>
        </motion.div>

        <div style={{ padding: '20px 40px' }}>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            style={{ paddingBottom: '50px' }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={service.id}>
                <motion.div
                  className="service-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="service-img-wrapper">
                    <img src={service.img} alt={service.title} className="service-img" />
                  </div>
                  <div className="service-content">
                    <div className="service-icon">
                      {service.icon}
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.desc}</p>
                    <Link to="/services" className="service-link">
                      Learn more <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section" style={{ backgroundColor: 'var(--white)', paddingBottom: '80px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Trusted Clients</h2>
          <p className="section-subtitle">
            We are proud to have partnered with leading organizations.
          </p>
        </motion.div>

        <div className="clients-logo-container">
          <motion.img src="/c1.png" alt="Client 1" className="client-logo" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} />
          <motion.img src="/c2.png" alt="Client 2" className="client-logo" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} />
          <motion.img src="/c3.png" alt="Client 3" className="client-logo" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} />
          <motion.img src="/c4.png" alt="Client 4" className="client-logo" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} />
          <motion.img src="/c5.png" alt="Client 5" className="client-logo" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          <motion.img src="/logo6.png" alt="Client 6" className="client-logo" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} />
          <motion.img src="/logo7.png" alt="Client 7" className="client-logo" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }} />
        </div>
      </section>

    </>
  );
}

function Services() {
  return (
    <div style={{ paddingTop: '150px', backgroundColor: 'var(--secondary)', minHeight: '100vh', paddingBottom: '100px' }}>
      <section className="section" style={{ marginTop: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">
            Leveraging cutting-edge technology to deliver precise surveys and sustainable consulting solutions for a better tomorrow.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <Link to={`/services/${service.id}`} key={service.id} style={{ textDecoration: 'none', color: 'inherit' }}>
              <motion.div
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="service-img-wrapper">
                  <img src={service.img} alt={service.title} className="service-img" />
                </div>
                <div className="service-content">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function About() {
  return (
    <div style={{ paddingTop: '150px', backgroundColor: 'var(--secondary)', minHeight: '100vh', paddingBottom: '100px' }}>
      <section className="section" style={{ marginTop: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle" style={{ marginBottom: '60px' }}>
            Pioneering the future of geospatial engineering, environmental sustainability, and seamless business transitions.
          </p>
        </motion.div>

        {/* Top Part: Text & Image */}
        <div className="about-content-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '25px', color: 'var(--primary)', lineHeight: '1.3' }}>Digitizing the Real World for India</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '20px', textAlign: 'justify' }}>
              <strong>Geosilicon</strong> is a premier Geospatial Services company specializing in the meticulous collection, analysis, presentation, and delivery of high-fidelity geospatial information. We bridge the gap between the physical and digital realms, seamlessly digitizing the real world for businesses and government entities across India.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-light)', marginBottom: '20px', textAlign: 'justify' }}>
              From vast expanses of natural landscapes down to the intricate details of individual machinery, we capture it all with unparalleled precision. Our profound depth of resources and cutting-edge technology provide us the flexibility to adapt our surveying and modeling methods to your specific project needs. We don't just gather data; we empower our clients to manipulate, analyze, and ultimately profit from actionable geographic intelligence.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-light)', textAlign: 'justify' }}>
              Our true strength, however, lies within our people. Our dedicated consultants and engineers are committed to developing innovative, tailor-made solutions to solve your unique business challenges and add tangible value to your operations. Whatever the scope or complexity of your geospatial information technology needs, Geosilicon possesses the expertise, the technology, and the seasoned experience to exceed your expectations.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="about-image-container"
          >
            <img src="/about.png" alt="About Geosilicon" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Clients() {
  return (
    <div style={{ paddingTop: '150px', backgroundColor: 'var(--secondary)', minHeight: '100vh', paddingBottom: '100px' }}>
      <section className="section" style={{ marginTop: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Trusted Clients</h2>
          <p className="section-subtitle">
            We are proud to have partnered with leading organizations.
          </p>
        </motion.div>

        <div className="clients-logo-container" style={{ marginTop: '50px' }}>
          <motion.img src="/c1.png" alt="Client 1" className="client-logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} />
          <motion.img src="/c2.png" alt="Client 2" className="client-logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} />
          <motion.img src="/c3.png" alt="Client 3" className="client-logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} />
          <motion.img src="/c4.png" alt="Client 4" className="client-logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} />
          <motion.img src="/c5.png" alt="Client 5" className="client-logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          <motion.img src="/logo6.png" alt="Client 6" className="client-logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
          <motion.img src="/logo7.png" alt="Client 7" className="client-logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />
        </div>
      </section>
    </div>
  );
}

function Gallery() {
  return (
    <div style={{ paddingTop: '150px', backgroundColor: 'var(--secondary)', minHeight: '100vh', paddingBottom: '100px' }}>
      <section className="section" style={{ marginTop: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">
            A visual showcase of our projects, infrastructure, and field operations.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px', padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', aspectRatio: '4/3' }}
            >
              <img src={service.heroImg || service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Contact() {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState(location.state?.serviceId || "");
  return (
    <div style={{ paddingTop: '150px', backgroundColor: 'var(--secondary)', minHeight: '100vh' }}>
      <section className="section contact-section" style={{ marginTop: 0 }}>
        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-header" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0' }}>Get in Touch</h2>
            </div>
            <p className="contact-subtitle">Reach out to us for premium surveying and environmental consulting services.</p>

            <div className="info-item">
              <div className="info-icon"><MapPin size={24} /></div>
              <div>
                <h4>ADDRESS</h4>
                <p>
                  <strong>Head Office:</strong><br />
                  Geosilicon Technologies India Pvt. Ltd.<br />
                  H. No: 4-33-12/2, 2nd Floor,<br />
                  Street No. 3, Venkateshwara Nagar,<br />
                  Jagathgiri Gutta, Hyderabad,<br />
                  Telangana– 500037
                </p>
                <p style={{ marginTop: '15px' }}>
                  <strong>Branch Office:</strong><br />
                  Building No./Flat No.: 27/15-28/2,<br />
                  Model Colony, Kuppam,<br />
                  Industrial Area Chinnakurabalapalle,<br />
                  Chittoor, Andhra Pradesh – 517425
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Mail size={24} /></div>
              <div>
                <h4>EMAIL</h4>
                <p>info@geo-silicon.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Phone size={24} /></div>
              <div>
                <h4>PHONE NO</h4>
                <p>040-48550108<br />+91 8179633904</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3>Book Appointment</h3>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Enter your full name (Full Name *)" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Enter your email (Email Address *)" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Enter 10-digit mobile number (Phone Number *)" pattern="[0-9]{10}" required />
              </div>
              <div className="form-group">
                <select 
                  value={selectedService} 
                  onChange={(e) => setSelectedService(e.target.value)}
                  required 
                  style={{ width: '100%', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', color: 'var(--text-light)', backgroundColor: '#fff' }}
                >
                  <option value="" disabled>Select a service (Service Required *)</option>
                  {services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                </select>
              </div>
              <div className="form-group">
                <input type="date" placeholder="dd/mm/yyyy" required style={{ color: 'var(--text-light)' }} />
                <small style={{ display: 'block', marginTop: '5px', color: 'var(--text-light)', fontSize: '0.85rem' }}>Preferred Date *</small>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Book Consultation</button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="section" style={{ paddingTop: '0' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ width: '100%', height: '450px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Geosilicon+Technologies+Pvt.+Ltd.,+Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </section>
    </div>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  // Global search index including pages and services
  const searchableIndex = [
    { id: 'home', path: '/', title: 'Home Page', desc: 'Geosilicon Home, Mission, Vision', content: 'welcome geosilicon survey top' },
    { id: 'about', path: '/about', title: 'About Us', desc: 'About Geosilicon', content: 'mission vision iso certified' },
    { id: 'contact', path: '/contact', title: 'Contact Us', desc: 'Get in Touch', content: 'address phone email hyderabad location' },
    { id: 'gallery', path: '/gallery', title: 'Gallery', desc: 'Project Gallery', content: 'photos images projects' },
    { id: 'clients', path: '/clients', title: 'Clients', desc: 'Our Trusted Partners', content: 'nhai l&t adani tata government' },
    ...services.map(s => ({
      id: s.id,
      path: `/services/${s.id}`,
      title: s.title,
      desc: s.desc,
      content: serviceDetails[s.id] ? serviceDetails[s.id].headline + ' ' + serviceDetails[s.id].detailedIntro + ' ' + serviceDetails[s.id].disciplines.map(d => d.title + ' ' + d.desc).join(' ') : ''
    }))
  ];

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    const q = query.toLowerCase();
    const results = searchableIndex.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q) ||
      item.content.toLowerCase().includes(q)
    );
    setSearchResults(results);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div>
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Geosilicon Logo" />
            <span className="logo-text" style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.1' }}>
              <span>
                <span style={{ color: '#67a218' }}>Geo</span>
                <span style={{ color: '#013163' }}>silicon</span>
              </span>
              <span style={{ fontSize: '0.45rem', letterSpacing: '0.08em', color: '#013163', fontWeight: '600', textTransform: 'uppercase', opacity: 0.85 }}>
                Technologies India Private Limited
              </span>
            </span>
          </Link>
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {!isMobileMenuOpen ? (
              <Menu size={28} className="icon flaticon-menu-button" />
            ) : (
              <X size={28} className="icon flaticon-menu-button" />
            )}
          </button>
          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Services</Link></li>
            <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link></li>
            <li><Link to="/clients" className={location.pathname === '/clients' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Clients</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          
          {/* Column 1 */}
          <div className="footer-col">
            <h3 className="footer-title">About Geosilicon</h3>
            <p className="footer-text">
              We provide premium surveying, engineering, and environmental consulting services, committed to sustainable and precise infrastructural development.
            </p>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <Link to="/about"><ArrowRight size={14} style={{ marginRight: '5px' }}/> About Us</Link>
              <Link to="/services"><ArrowRight size={14} style={{ marginRight: '5px' }}/> Services</Link>
              <Link to="/gallery"><ArrowRight size={14} style={{ marginRight: '5px' }}/> Gallery</Link>
              <Link to="/contact"><ArrowRight size={14} style={{ marginRight: '5px' }}/> Contact Us</Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h3 className="footer-title">Our Services</h3>
            <div className="footer-links">
              <Link to="/services/gis"><ArrowRight size={14} style={{ marginRight: '5px' }}/> GIS Survey</Link>
              <Link to="/services/cad"><ArrowRight size={14} style={{ marginRight: '5px' }}/> CAD Drafting</Link>
              <Link to="/services/lidar"><ArrowRight size={14} style={{ marginRight: '5px' }}/> LiDAR Tech</Link>
              <Link to="/services/bim"><ArrowRight size={14} style={{ marginRight: '5px' }}/> BIM Solutions</Link>
            </div>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h3 className="footer-title">Contact Info</h3>
            <div className="footer-contact">
              <p><MapPin size={16} style={{ color: '#f97316', flexShrink: 0 }}/> Hyderabad, Telangana 500074</p>
              <p><Phone size={16} style={{ color: '#f97316', flexShrink: 0 }}/> +91-9959664560</p>
              <p><Mail size={16} style={{ color: '#f97316', flexShrink: 0 }}/> info@geosilicon.in</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Geosilicon Technologies India Pvt. Ltd. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/about">Privacy Policy</Link>
            <Link to="/contact">Terms of Service</Link>
            <Link to="/contact">Sitemap</Link>
          </div>
          <button
            className="scroll-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
}

function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '50vh' }}><h2>Service not found</h2></div>;
  }

  const getServiceIcon = (serviceId) => {
    switch (serviceId) {
      case 'gis': return <Map size={18} />;
      case 'cad': return <Monitor size={18} />;
      case 'digital-photogrammetry': return <Satellite size={18} />;
      case 'lidar': return <Plane size={18} />;
      case 'bim': return <Target size={18} />;
      case 'topo': return <Compass size={18} />;
      case 'dgps': return <Satellite size={18} />;
      case 'netzero': return <Recycle size={18} />;
      case 'environmental': return <Leaf size={18} />;
      case 'software-services': return <Code size={18} />;
      default: return <Target size={18} />;
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '100px', color: '#2d3748' }}>
      
      {/* Edge-to-Edge Hero Image Banner (Slideshow Style) */}
      <section className="hero">
        <div className="slide active">
          <img src={service.img} alt={service.title} />
          <div className="slide-overlay"></div>
          <div className="slide-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1>{service.title}</h1>
            </motion.div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px 0 20px' }}>

        {/* Intro Paragraph */}
        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#718096', marginBottom: '40px', maxWidth: '1100px', textAlign: 'justify' }}>
          {serviceDetails[id] ? serviceDetails[id].detailedIntro : service.desc}
        </p>

        {/* Heading: Our Services */}
        {serviceDetails[id] && (
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#1a202c', marginBottom: '30px' }}>
            Our Services
          </h2>
        )}

        {/* Sub-Disciplines List */}
        {serviceDetails[id] ? (
          <div style={{ display: 'block' }}>
            {serviceDetails[id].disciplines.map((disc, idx) => (
              <div key={idx} style={{ position: 'relative', paddingLeft: '35px', marginBottom: '30px' }}>
                {/* Orange Circle Checkmark Icon */}
                <div style={{ position: 'absolute', left: 0, top: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', background: '#f97316', borderRadius: '50%', color: 'white', flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ width: '13px', height: '13px' }}>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                
                {/* Content */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1a202c', margin: 0 }}>
                    {disc.title}:
                  </h4>
                  <p style={{ fontSize: '0.96rem', lineHeight: '1.7', color: '#718096', margin: 0, textAlign: 'justify' }}>
                    {disc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ backgroundColor: 'white', padding: '50px', borderRadius: '15px', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
            <h2 style={{ color: 'var(--primary)', marginBottom: '20px', fontSize: '2rem' }}>{service.title}</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
              {service.desc}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

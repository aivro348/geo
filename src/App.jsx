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
  },
  {
    id: 'other-services',
    title: 'Other Services',
    desc: 'Professional inbound and outbound training for corporate workforce, covering leadership, management, and soft skills.',
    img: '/images/other_services.png',
    icon: <Briefcase size={24} />
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
    headline: "Unparalleled Standards of Flexibility and Service in CAD Operations",
    detailedIntro: "Geosilicon has vast experience in every aspect of CAD operations offering unparalleled standards of flexibility and service. Geosilicon CAD services include large-scale 2D & 3D CAD drafting, paper to CAD conversion, raster to vector conversion for engineering drawings, architectural and facility drawings contour maps, ground cadastre plans and Utility distribution networks maps for electric, gas, water, sewage and telecom. GSTPL skill sets in CAD services include knowledge in drafting, designing and customizing programs in AutoCAD, Bentley Microstation. Specialising in Co-ordination and drafting services to Building Services (M&E) Contractors, and Scheme drafting services for Architects, Consultants and Electrical Contractors. All of our quality assured services can be accessed in a way that suits you best, including 'Overflow' service, full outsourced service, occasional input on individual projects, 'Emergency' quick response support, and supplementary services such as 3D modeling and visualization.",
    disciplines: [
      {
        title: "2D Drafting",
        desc: "Taking existing record drawings and using traditional and conventional drafting methods, the existing drawings are completely redrawn in CAD. This method should not be confused with raster to vector scanning, both methods have their uses. These drawings are scaled from the original documents and the results are a cleaner, more accurate and usable electronic CAD file."
      },
      {
        title: "Specialty Mapping",
        desc: "Geosilicon uses the latest 3D CAD software to deliver the highest quality 3D mechanical and electrical coordination and design verification, helping to improve the communication with clients and minimize possible on-site coordination issues. Benefits include improved identification of design clashes, enhanced services coordination, better control of design information for installation, and quick response support on fast track projects."
      },
      {
        title: "3D Modeling",
        desc: "Several types of 3D modeling are available in AutoCAD, each offering a different set of capabilities. Wireframe modeling is useful for initial design iterations and as reference geometry. Solid modeling is efficient to use, combining primitives and extruded profiles with mass properties. Surface modeling offers fine control over curved surfaces for precise manipulation. Mesh modeling provides freeform sculpting, creasing, and smoothing capabilities."
      }
    ],
    colorTheme: "indigo"
  },
  'digital-photogrammetry': {
    headline: "Advanced Digital Photogrammetric Solutions",
    detailedIntro: "Geosilicon has provided Digital photogrammetric solutions with a technically skilled team across India. A lot of changes have occurred since this time and we have been a key driver of new technology. Our derived products go through a barrage of quality control procedures designed to ensure a good product. All Digital photogrammetry services are performed using the most advanced softcopy workstations operating the latest proven software tools.",
    disciplines: [
      {
        title: "Mosaicking and Tile Generation",
        desc: "Orthorectification removes the distortion within an image caused by terrain relief and the camera. Geosilicon offers various options of terrain datasets for orthorectification, including GE-1 DTM, ALOS PRISM DTM, STER DTM, SRTM, and Customer provided DTM, providing options for seamless mosaicking of large datasets for a visually appealing image."
      },
      {
        title: "Aerial Triangulation (AT)",
        desc: "Aerial Triangulation in Photogrammetry is the method of determining and calculating 3-dimensional object coordinates by photogrammetric means, by using photographs exposed from different positions, covering the same object."
      },
      {
        title: "Digital Elevation Models (DEM)",
        desc: "A digital elevation model is a regularly-spaced bare-earth raster grid referenced to a common vertical datum. When you filter out non-ground points such as bridges and roads, you are left with a smooth digital elevation model."
      },
      {
        title: "Digital Surface Models (DSM)",
        desc: "DSM measures the height values of the first surface on the ground. This includes terrain features, buildings, vegetation and power lines etc. DSM therefore provides a topographic model of the earth's surface."
      },
      {
        title: "Digital Terrain Models (DTM)",
        desc: "Digital Terrain Modelling (DTM) is the collection of mass points of elevations and 3D breaklines at each change of terrain using Summit Evolution softcopy workstations."
      },
      {
        title: "Planimetric Mapping",
        desc: "Planimetric maps develops natural features with their exact coordinate locations. These features are comprised of vegetation, trails, fences, utility poles, drainage systems, driveways, road boundaries and curbs."
      },
      {
        title: "Topographic Mapping",
        desc: "Topographic maps are detailed, accurate graphic representations of features that appear on the Earth's surface. These features include Cultural, Hydrography, Relief, and Vegetation."
      },
      {
        title: "Contour Generation",
        desc: "Contours are commonly in vector formats (e.g., shape file, dxf) and derived from a reconstructed TIN of DEM. Contours are among the most commonly used representations for elevations."
      },
      {
        title: "3-D Feature Extraction & Elevations",
        desc: "We provide accurate digital planimetric feature extraction for cartography mapping and 3D topo mapping in industry accepted standard formats."
      },
      {
        title: "Change Detection",
        desc: "Timely and accurate change detection of Earth's surface features is extremely important for understanding relationships and interactions between human and natural phenomena in order to promote better decision making."
      }
    ],
    colorTheme: "purple"
  },
  lidar: {
    headline: "Turn-key LiDAR Image Processing Services",
    detailedIntro: "LiDAR is a remote sensing technology that stands for Light Detection And Ranging. Lidar technology measures distance by illuminating a target with a laser and analyzing the reflected light. It functions similar to the Sonar technology used by fish to detect objects in the water and which humans use in boats to find objects or depth in water. Airplanes and helicopters are the most commonly used platforms for acquiring LiDAR data over a large area. Geosilicon provides turn-key LiDAR image Processing services.",
    disciplines: [
      {
        title: "Watershed delineation using LiDAR data processing techniques",
        desc: "LiDAR is a remote sensing technology that stands for Light Detection And Ranging. Lidar technology measures distance by illuminating a target with a laser and analyzing the reflected light. It functions similar to the Sonar technology used by fish to detect objects in the water and which humans use in boats to find objects or depth in water. Airplanes and helicopters are the most commonly used platforms for acquiring LiDAR data over a large area. Geosilicon provides turn-key LiDAR image Processing services."
      },
      {
        title: "LiDAR data processing of forestry area",
        desc: "LiDAR is a remote sensing technology that stands for Light Detection And Ranging. Lidar technology measures distance by illuminating a target with a laser and analyzing the reflected light. It functions similar to the Sonar technology used by fish to detect objects in the water and which humans use in boats to find objects or depth in water. Airplanes and helicopters are the most commonly used platforms for acquiring LiDAR data over a large area. Geosilicon provides turn-key LiDAR image Processing services."
      },
      {
        title: "LiDAR data processing of agricultural features",
        desc: "LiDAR is a remote sensing technology that stands for Light Detection And Ranging. Lidar technology measures distance by illuminating a target with a laser and analyzing the reflected light. It functions similar to the Sonar technology used by fish to detect objects in the water and which humans use in boats to find objects or depth in water. Airplanes and helicopters are the most commonly used platforms for acquiring LiDAR data over a large area. Geosilicon provides turn-key LiDAR image Processing services."
      }
    ],
    colorTheme: "rose"
  },
  bim: {
    headline: "Taking your drawings to the next level",
    detailedIntro: "The future of CAD drawings and their involvement in the construction process is changing! 2D drawings will always have a valued and useful position in the construction process, but anyone who is serious in providing quality information to their clients will be looking at designs created using Building Information Modelling (BIM) techniques. The traditional building design was largely reliant upon two-dimensional drawings (plans, elevations, sections, etc.). Building information modeling extends this beyond 3-D, augmenting the three primary spatial dimensions with time as the fourth dimension and cost as the fifth. BIM, therefore, covers more than just geometry. It also covers spatial relationships, light analysis, geographic information, and quantities and properties of building components. We are experts in generating structure BIM models using Revit platform. With our expert Revit technicians and structure detailers we are competent enough to develop models for Steel Structures, Wood Structures and Concrete Structures. Also, we are experts in creating families for structure detailing like joists, Anchor bolts, trusses etc.",
    disciplines: [
      {
        title: "3D Architectural",
        desc: "We are experts in generating Architectural BIM models using Revit platform. With our expert Revit technicians, all type of architectural model creating. Also, we are experts in creating families for the Architectural component on a door, windows, etc."
      },
      {
        title: "3D MEP Service",
        desc: "We provide an assortment of Mechanical, Electrical and Plumbing Engineering services. Competency with software such as AutoCAD, CADD, Revit MEP allows us to offer a range of quality MEP BIM services."
      },
      {
        title: "Clashes Detection",
        desc: "A lot of time, money and resources are spent in the designing state of art buildings. However, imagine the amount of losses that may incur because a lot of unaccounted clashes and collisions go unidentified during the design phase and are detected only when the project goes on-site."
      },
      {
        title: "Extraction for Scheduling",
        desc: "We are experts in generating Scheduling in BIM models using Revit platform. All the elements are prepared using category wise schedule."
      },
      {
        title: "Walkthrough and Rendering",
        desc: "Walkthrough and Rendering we are using 3DX MAX platform."
      }
    ],
    colorTheme: "orange"
  },
  topo: {
    headline: "Professional Surveying Services",
    detailedIntro: "Whether a project involves surveying hundreds of miles of pipelines, identifying optimum oil well locations, or assisting in the recovery of a city after a natural disaster, our survey team is more than prepared to tackle any challenge. Integrating our newly refined data communications network, high quality instruments, and professional staff, our land survey services can be an efficient solution to every project. If you need a professional land surveyor, then look no further.",
    disciplines: [
      {
        title: "GPS Survey",
        desc: "Our GPS survey team is prepared to tackle any challenge. Integrating our newly refined data communications network, high quality instruments, and professional staff, our land survey services provide an efficient solution to every project."
      },
      {
        title: "Total Station Survey",
        desc: "Geosilicon is a trusted consulting partner for training, survey, data conversion, and GIS implementation. We provide services on RTK GPS / DGPS and Total Station surveys, Utility mapping, Urban mapping, and change detection. Resources provided include GPS, Surveying Equipment, and Data Collection for industries like Energy, Public works, Infrastructure, and Government."
      },
      {
        title: "DGPS Survey",
        desc: "A Topographic Survey gathers data about the elevation of points on a piece of land and presents them as contour lines. The purpose is to collect survey data about natural and man-made features and elevations. Geosilicon utilizes the latest surveying technology to produce accurate, consistently reliable topographic surveys, saving you time and money."
      },
      {
        title: "Drone Survey",
        desc: "UAVs have opened up a whole new world of surveying, Orthophoto production, 3D modeling and feature extraction. Geosilicon specializes in UAV data processing, delivering high-quality true orthophotos, Contours, DEM, DTM, DSM, and 3D models. Outputs include Ortho Rectification, Data modeling, 2D/3D Feature Extraction, and 3D Video Production."
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
    headline: "Expert IT Outsourcing & Custom Software Development",
    detailedIntro: "Geosilicon is a leading company in providing experienced Engineers & Engineering services globally. With a customer-oriented strategy, we are committed to providing clients with expert outsourced manpower for IT services and projects based on short-term, long-term, and part-time assignments.",
    disciplines: [
      {
        title: "Recruitment",
        desc: "Recruitment of the employees as per the clients specifications and assign them to the client’s workplace. We guarantee prompt recruitment and transfer of the most suitable match for each of your vacancies. We also ensure that the professionals are appointed at competitive salaries."
      },
      {
        title: "Resource Supply",
        desc: "Geosilicon is leading company in providing experienced Engineers & Engineering services (India & Abroad). With customer oriented strategy Geosilicon is committed to provide its clients with expert outsource manpower for IT services and projects based on short term, long term & part time assignment."
      },
      {
        title: "Software Developing",
        desc: "Geosilicon can work across a range of technologies and our team has significant experience in web based application development. database-driven systems, mobile application development, mapping and geo-spatial applications. Over the years the range of products and services which we provide has grown, yet the provision of customer software development remains the cornerstone of what we do."
      }
    ],
    colorTheme: "dark"
  },
  'other-services': {
    headline: "Professional Corporate Training & Development",
    detailedIntro: "Geosilicon services include providing professional inbound and outbound training to the corporate workforce. Our development process encourages the candidates to grow and in order to ace their performance.",
    disciplines: [
      {
        title: "Training & Development",
        desc: "Geosilicon services includes, providing professional inbound and outbound training to corporate workforce. Our development process encourages the candidates to grow and in order to ace their performance. After training needs are identified, our team recommends the ideal development programs for the employees in the firm. Besides leadership and management development program, we offer customized programs like client relationship management, soft skills, etc."
      }
    ],
    colorTheme: "cyan"
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
                <Link to={`/services/${service.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
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
                    </div>
                  </motion.div>
                </Link>
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
            <li className="dropdown">
              <Link to="/services" className={location.pathname === '/services' || location.pathname.startsWith('/services/') ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
              <ul className="dropdown-menu">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link to={`/services/${s.id}`} onClick={() => setIsMobileMenuOpen(false)}>
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
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
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>

      {/* WhatsApp Widget */}
      <a href="https://wa.me/919959664560" className="whatsapp-widget" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="#fff">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

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
              <Link to="/about"><ArrowRight size={14} style={{ marginRight: '5px' }} /> About Us</Link>
              <Link to="/services"><ArrowRight size={14} style={{ marginRight: '5px' }} /> Services</Link>
              <Link to="/gallery"><ArrowRight size={14} style={{ marginRight: '5px' }} /> Gallery</Link>
              <Link to="/contact"><ArrowRight size={14} style={{ marginRight: '5px' }} /> Contact Us</Link>
            </div>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h3 className="footer-title">Our Services</h3>
            <div className="footer-links">
              <Link to="/services/gis"><ArrowRight size={14} style={{ marginRight: '5px' }} /> GIS Survey</Link>
              <Link to="/services/cad"><ArrowRight size={14} style={{ marginRight: '5px' }} /> CAD Drafting</Link>
              <Link to="/services/lidar"><ArrowRight size={14} style={{ marginRight: '5px' }} /> LiDAR Tech</Link>
              <Link to="/services/bim"><ArrowRight size={14} style={{ marginRight: '5px' }} /> BIM Solutions</Link>
            </div>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h3 className="footer-title">Contact Info</h3>
            <div className="footer-contact">
              <p><MapPin size={16} style={{ color: '#f97316', flexShrink: 0 }} /> Hyderabad, Telangana 500074</p>
              <p><Phone size={16} style={{ color: '#f97316', flexShrink: 0 }} /> <a href="tel:+919959664560" style={{ color: 'inherit', textDecoration: 'none' }}>+91-9959664560</a></p>
              <p><Mail size={16} style={{ color: '#f97316', flexShrink: 0 }} /> <a href="mailto:info@geosilicon.in" style={{ color: 'inherit', textDecoration: 'none' }}>info@geosilicon.in</a></p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Geosilicon Technologies India Pvt. Ltd. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/sitemap">Sitemap</Link>
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

function PrivacyPolicy() {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '800px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#1a202c', marginBottom: '20px' }}>Privacy Policy</h1>
      <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
        At Geosilicon Technologies India Pvt. Ltd., we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
      </p>
      <h2 style={{ fontSize: '1.5rem', color: '#2d3748', marginTop: '30px', marginBottom: '15px' }}>1. Information We Collect</h2>
      <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
        We may collect, use, store and transfer different kinds of personal data about you, including Identity Data, Contact Data, Technical Data, and Usage Data. We use different methods to collect data from and about you including through direct interactions and automated technologies.
      </p>
      <h2 style={{ fontSize: '1.5rem', color: '#2d3748', marginTop: '30px', marginBottom: '15px' }}>2. How We Use Your Data</h2>
      <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data where we need to perform the contract we are about to enter into or have entered into with you, or where it is necessary for our legitimate interests.
      </p>
      <h2 style={{ fontSize: '1.5rem', color: '#2d3748', marginTop: '30px', marginBottom: '15px' }}>3. Data Security</h2>
      <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
      </p>
    </div>
  );
}

function TermsOfService() {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '800px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#1a202c', marginBottom: '20px' }}>Terms of Service</h1>
      <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
        These Terms of Service govern your use of the website and services provided by Geosilicon Technologies India Pvt. Ltd. By accessing or using our website, you agree to be bound by these terms.
      </p>
      <h2 style={{ fontSize: '1.5rem', color: '#2d3748', marginTop: '30px', marginBottom: '15px' }}>1. Use of Services</h2>
      <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
        You agree to use our services only for lawful purposes and in accordance with these terms. You are prohibited from using our site or its content for any unlawful purpose, to solicit others to perform or participate in any unlawful acts, or to violate any international, federal, or state regulations, rules, laws, or local ordinances.
      </p>
      <h2 style={{ fontSize: '1.5rem', color: '#2d3748', marginTop: '30px', marginBottom: '15px' }}>2. Intellectual Property Rights</h2>
      <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
        Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site are owned or controlled by us.
      </p>
      <h2 style={{ fontSize: '1.5rem', color: '#2d3748', marginTop: '30px', marginBottom: '15px' }}>3. Limitation of Liability</h2>
      <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
        In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the site.
      </p>
    </div>
  );
}

function Sitemap() {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '60px', maxWidth: '800px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#1a202c', marginBottom: '30px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>Sitemap</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', color: '#2d3748', marginBottom: '15px' }}>Main Pages</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link to="/" style={{ color: '#f97316', textDecoration: 'none' }}>Home</Link></li>
            <li><Link to="/about" style={{ color: '#f97316', textDecoration: 'none' }}>About Us</Link></li>
            <li><Link to="/services" style={{ color: '#f97316', textDecoration: 'none' }}>All Services</Link></li>
            <li><Link to="/gallery" style={{ color: '#f97316', textDecoration: 'none' }}>Gallery</Link></li>
            <li><Link to="/clients" style={{ color: '#f97316', textDecoration: 'none' }}>Clients</Link></li>
            <li><Link to="/contact" style={{ color: '#f97316', textDecoration: 'none' }}>Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.2rem', color: '#2d3748', marginBottom: '15px' }}>Our Services</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link to="/services/gis" style={{ color: '#f97316', textDecoration: 'none' }}>GIS Survey</Link></li>
            <li><Link to="/services/cad" style={{ color: '#f97316', textDecoration: 'none' }}>CAD Drafting</Link></li>
            <li><Link to="/services/digital-photogrammetry" style={{ color: '#f97316', textDecoration: 'none' }}>Digital Photogrammetry</Link></li>
            <li><Link to="/services/lidar" style={{ color: '#f97316', textDecoration: 'none' }}>LiDAR Drone Technologies</Link></li>
            <li><Link to="/services/bim" style={{ color: '#f97316', textDecoration: 'none' }}>BIM</Link></li>
            <li><Link to="/services/topo" style={{ color: '#f97316', textDecoration: 'none' }}>Topographic Survey</Link></li>
            <li><Link to="/services/dgps" style={{ color: '#f97316', textDecoration: 'none' }}>DGPS Survey</Link></li>
            <li><Link to="/services/netzero" style={{ color: '#f97316', textDecoration: 'none' }}>NetZero Consulting</Link></li>
            <li><Link to="/services/environmental" style={{ color: '#f97316', textDecoration: 'none' }}>Earth & Environmental</Link></li>
            <li><Link to="/services/software-services" style={{ color: '#f97316', textDecoration: 'none' }}>Software Services</Link></li>
            <li><Link to="/services/other-services" style={{ color: '#f97316', textDecoration: 'none' }}>Other Services</Link></li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.2rem', color: '#2d3748', marginBottom: '15px' }}>Legal</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link to="/privacy" style={{ color: '#f97316', textDecoration: 'none' }}>Privacy Policy</Link></li>
            <li><Link to="/terms" style={{ color: '#f97316', textDecoration: 'none' }}>Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

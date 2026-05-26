
import { Map, Plane, Compass, Satellite, Leaf, Recycle, Target, Briefcase, Monitor, Code } from 'lucide-react';
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

export { services, serviceDetails };

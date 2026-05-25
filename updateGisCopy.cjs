const fs = require('fs');
const path = require('path');

const appJsxPath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(appJsxPath, 'utf8');

const gisRegex = /gis: \{\s*headline: ".*?",\s*detailedIntro: ".*?",\s*disciplines: \[.*?\],\s*colorTheme: ".*?"\s*\}/s;

const newGisContent = `gis: {
    headline: "GIS for Planning, Design, and Management of Next Generation Networks",
    detailedIntro: "Geosilicon provides domain specific GIS solutions that address the entire telecom, gas, and electrical utility landscape. The telecommunications sector has witnessed significant technological changes, leading to a migration of copper networks to fiber. Our key capabilities include design, drafting, and migration services using CAD and GIS technologies. Our solutions enable clients to achieve operational efficiencies, capacity optimization, and required throughputs across their respective utility networks.",
    disciplines: [
      {
        title: "Wireline Communications",
        desc: "We offer network planning and design services for FTTH, FTTC, FTTX, and GPON technologies. Our team synthesizes domain knowledge with technical capabilities to provide efficient design solutions which optimize existing infrastructure. We also develop high quality datasets for OSP and ISP networks, ensuring reliable information for various operational support systems."
      },
      {
        title: "Wireless Communications",
        desc: "In today’s competitive landscape, the wireless telecom industry faces challenges including optimizing infrastructure costs and coping with technology transitions. We provide geo-data solutions for fixed wireless (WLL, LMDS) and mobile wireless (GSM, CDMA, UMTS) networks, including DEM/DTM, land use/clutter, vector databases, and 3-D building heights."
      },
      {
        title: "Gas Network Management",
        desc: "Geosilicon helps gas utilities optimize network infrastructure investments with efficient engineering drafting services. We support utilities in meeting distribution integrity management programs by capturing critical information from base maps, planner sketches, engineering designs, leak cards, and as-built work orders, ensuring safety and reliability."
      },
      {
        title: "Gas Asset Data Management",
        desc: "We develop high quality, cost-effective data management solutions tailored to handle growing infrastructure. Services include as-built conversion, data conflation, ROW management, and data audit studies. We also define Big Data strategies for the utility sector, including enterprise data lakes, asset analytics, and pipeline risk assessments."
      },
      {
        title: "Electrical Asset Data Management",
        desc: "Geosilicon helps utilities design, store, and manage network information to operate distribution infrastructure safely using integrated CAD and GIS tools. Our services include records conversion, establishing primary/secondary connectivity, reactive change-out updates, asset condition assessment, and work order processing into GIS."
      },
      {
        title: "Electrical Network Management",
        desc: "We provide focused solutions to improve the reliability, integrity, and traceability of electrical networks. This includes T&D network mapping, duct configuration, geo-schematics, LiDAR data mapping, and data readiness for the Smart Grid. We also develop custom enterprise GIS applications to seamlessly integrate geospatial data with operational support systems."
      }
    ],
    colorTheme: "blue"
  }`;

const updatedContent = content.replace(gisRegex, newGisContent);

fs.writeFileSync(appJsxPath, updatedContent);
console.log("GIS copy updated successfully.");

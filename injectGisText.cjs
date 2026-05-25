const fs = require('fs');
const filePath = 'src/App.jsx';
let content = fs.readFileSync(filePath, 'utf8');

const fullGisSection = `{id === 'gis' ? (
          <div className="gis-premium-wrapper">
            {/* Interactive Tab Controls */}
            <div className="gis-premium-tabbar">
              <button
                className={\`gis-premium-tab-btn \${activeSubTab === 'telecom' ? 'active' : ''}\`}
                onClick={() => setActiveSubTab('telecom')}
              >
                <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
                Telecom Network
                <div className="tab-indicator"></div>
              </button>
              <button
                className={\`gis-premium-tab-btn \${activeSubTab === 'gas' ? 'active' : ''}\`}
                onClick={() => setActiveSubTab('gas')}
              >
                <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c-1.38 0-2.5-1.12-2.5-2.5S9.62 7 11 7c0-1.38-1.12-2.5-2.5-2.5S6 5.62 6 7c0 1.38 1.12 2.5 2.5 2.5C7.12 9.5 6 10.62 6 12s1.12 2.5 2.5 2.5z"></path><path d="M15.5 14.5A2.5 2.5 0 0 0 18 12c-1.38 0-2.5-1.12-2.5-2.5S16.62 7 18 7c0-1.38-1.12-2.5-2.5-2.5S13 5.62 13 7c0 1.38 1.12 2.5 2.5 2.5C14.12 9.5 13 10.62 13 12s1.12 2.5 2.5 2.5z"></path><path d="M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"></path></svg>
                Gas Network
                <div className="tab-indicator"></div>
              </button>
              <button
                className={\`gis-premium-tab-btn \${activeSubTab === 'electrical' ? 'active' : ''}\`}
                onClick={() => setActiveSubTab('electrical')}
              >
                <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                Electrical Network
                <div className="tab-indicator"></div>
              </button>
            </div>

            <div className="gis-tab-content-wrapper">
              {/* Tab 1: Telecom Network */}
              {activeSubTab === 'telecom' && (
                <div className="gis-premium-grid fade-in-up">
                  {/* Left Panel: Overview */}
                  <div className="gis-premium-overview">
                    <div className="gis-premium-badge">Telecom Network</div>
                    <h2 className="gis-overview-title">Telecom Network Solutions</h2>
                    <h3 className="gis-overview-subtitle">WIRELINE COMMUNICATIONS</h3>

                    <div className="gis-premium-highlight-box">
                      <strong>GIS for planning, design, and management of next generation networks.</strong>
                    </div>

                    <p className="gis-overview-desc">
                      The telecommunications sector has witnessed significant technological and regulatory changes over the last two decades. The concept of the converged or unified network for voice, data and video information has greatly influenced the industry leading to a trend of migration of copper network to fiber.
                    </p>
                    <p className="gis-overview-desc">
                      Geosilicon provides domain specific GIS solutions that address the entire telecom industry landscape including cable and broadband services. Our key capabilities include copper and FTTx design, drafting and migration services using CAD, GIS and SpatialNET technologies.
                    </p>
                    <p className="gis-overview-desc">
                      These are complimented with our strong application development capabilities for enterprise application integration, technology up-gradation / migration, and developing smart tools for conflation, network migration, and automating critical processes and workflows.
                    </p>
                    <p className="gis-overview-desc">
                      Geosilicon has successfully developed solutions for complex telecom projects for a range of global clients. Our solutions enable clients to achieve operational efficiencies, capacity optimization, and required throughputs. We have experience on all leading industry platforms such as Synchronoss SpatialNET, Intergraph FRAMME, Ericsson Network Engineer, and other Custom OSP applications.
                    </p>
                  </div>

                  {/* Right Panel: Solutions Grid */}
                  <div className="gis-premium-solutions">
                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon blue-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        </div>
                        <h4>Network Planning and Design (Fiber and Copper)</h4>
                      </div>
                      <p>
                        Geosilicon offers network planning and design services for FTTH, FTTC & FTTX, GPON technologies to communication service providers across the globe. Our team of network planning & design experts synthesize their domain knowledge with technical capabilities to provide efficient design solutions which optimize the client's existing infrastructure and enable faster network rollouts. We also offer trained domain experts to help our clients increase their network capacity, thereby enabling improved customer experience.
                      </p>
                      <ul className="gis-bullet-list">
                        <li>Backbone/Distribution Design & Planning</li>
                        <li>Detailed Documentation – Splicing Details, BOM, BOQ, SLDs, CAPEX</li>
                        <li>AS-built Updates in GIS</li>
                        <li>Physical Network Inventory Data Management</li>
                        <li>Network Design Drafting Plans for Municipal Approvals</li>
                      </ul>
                    </div>

                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon green-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                        </div>
                        <h4>GIS Data Management</h4>
                      </div>
                      <p>
                        Geosilicon has considerable experience of developing and maintaining high quality datasets for for both OSP (Outside Plant) and ISP(Inside Plant) networks. These datasets are developed using best of the breed industry technologies and processes that ensures reliable network information for various business and operational support systems. Key services include:
                      </p>
                      <ul className="gis-bullet-list">
                        <li>Data Migration</li>
                        <li>Legacy Data/ PLRs Conversion</li>
                        <li>Landbase and Facility Network Mapping</li>
                        <li>Engineering Work Order Posting</li>
                        <li>OSP & ISP Data Cleansing</li>
                        <li>Data Conflation for Accuracy Improvement</li>
                      </ul>
                    </div>

                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon dark-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                        </div>
                        <h4>Application Development</h4>
                      </div>
                      <p>
                        Geosilicon provides a host of innovative solutions using industry-standard tools and platforms for the communications industry to maintain accurate, up-to-date data for planning, design and management of networks. Our dedicated team of application development experts provides the following services:
                      </p>
                      <ul className="gis-bullet-list">
                        <li>Application Development & Maintenance</li>
                        <li>Web GIS Applications</li>
                        <li>Enterprise Application Integration</li>
                        <li>Technology Upgradation / Migration</li>
                        <li>Customized Applications / Tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Gas Network */}
              {activeSubTab === 'gas' && (
                <div className="gis-premium-grid fade-in-up">
                  <div className="gis-premium-overview">
                    <div className="gis-premium-badge">GAS Network</div>
                    <h2 className="gis-overview-title">GAS Network</h2>
                    <h3 className="gis-overview-subtitle">GIS managed services for distribution integrity management</h3>

                    <p className="gis-overview-desc">
                      Geosilicon provides domain specific enterprise GIS solutions that seamlessly integrate with other systems to increase process efficiencies and streamline information flows across the business value chain. We partner with clients to help them meet their key challenges of improving operational efficiencies, reducing operations costs, improving asset management, optimizing capacity, mitigating risks and meeting regulatory compliance requirements.
                    </p>
                    <p className="gis-overview-desc">
                      Geosilicon's key differentiator lies in its unique ability to automate processes, develop customized tools, and workflow management systems that help reduce the total cost of ownership and delivery time, while maintaining the highest levels of quality.
                    </p>
                  </div>

                  <div className="gis-premium-solutions">
                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon green-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                        </div>
                        <h4>Network Management</h4>
                      </div>
                      <p>
                        Geosilicon helps gas utilities to optimize network infrastructure investments by supporting their planners with efficient engineering drafting services to meet municipal regulations for permit approvals. We also ensure maintenance of asset network in GIS and Enterprise Asset Management systems in accordance with real world changes. Our smart network management solutions help our clients in improving the reliability, integrity and traceability of their networks. Key services include:
                      </p>
                      <ul className="gis-bullet-list">
                        <li>Network design drafting</li>
                        <li>Landbase management</li>
                        <li>Relocation and replacements</li>
                      </ul>
                    </div>

                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon blue-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        </div>
                        <h4>Asset Data Management</h4>
                      </div>
                      <p>
                        Geosilicon develops high quality, cost effective data management solutions using the industry best breed of technologies and process innovations for managing assets. Our solutions are specifically tailored to our customer's needs and help them face the challenges of handling their ever growing assets, infrastructure and diverse business processes. Key services include:
                      </p>
                      <ul className="gis-bullet-list">
                        <li>As-Built conversion & updates</li>
                        <li>Data life cycle management</li>
                        <li>Data conflation & consolidation</li>
                        <li>Field data integration</li>
                        <li>ROW/easement management</li>
                        <li>Data audit and condition assessment studies</li>
                      </ul>
                    </div>

                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon red-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </div>
                        <h4>Distribution Integrity Management</h4>
                      </div>
                      <p>
                        Geosilicon supports utilities to meet various integrity management programs by capturing critical information about each asset from base maps, planners sketches, engineering designs,field notes, leak cards, customer service tickets, as-built work orders. This helps in tracking of every bit of information about the asset, hence ensuring safety and reliability to its customers. Our services include:
                      </p>
                      <ul className="gis-bullet-list">
                        <li>Legacy records conversion</li>
                        <li>Historic service records scanning and indexing</li>
                        <li>Leak data management</li>
                        <li>Pressure test records management</li>
                        <li>'Call Before You Dig' analysis and reporting</li>
                      </ul>
                    </div>

                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon dark-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                        </div>
                        <h4>Enterprise GIS</h4>
                      </div>
                      <p>
                        Geosilicon develops custom applications to seamlessly integrate existing geospatial data and applications with other enterprise systems, optimizing operational workflows thereby enhancing performance and service reliability. RMSI also supports complex projects by developing smart in-house tools to enhance productivity and efficiency and ensure maximum quality compliance. Key solutions include:
                      </p>
                      <ul className="gis-bullet-list">
                        <li>Data discovery & gap analysis</li>
                        <li>Data model development & implementation</li>
                        <li>UPDM data model support</li>
                        <li>Technology migration / upgrade</li>
                        <li>Custom application development</li>
                        <li>GIS & Enterprise Asset Management Data Integration</li>
                      </ul>
                    </div>

                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon purple-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                        </div>
                        <h4>Big Data & Analytics</h4>
                      </div>
                      <p>
                        Geosilicon business domain expertise coupled with rich technical competencies enables us to define Big Data strategies for the utility sector. Key services include:
                      </p>
                      <ul className="gis-bullet-list">
                        <li>Enterprise data lake</li>
                        <li>Asset analytics</li>
                        <li>Probabilistic/relative pipeline risk assessments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Electrical Network */}
              {activeSubTab === 'electrical' && (
                <div className="gis-premium-grid fade-in-up">
                  <div className="gis-premium-overview">
                    <div className="gis-premium-badge">Electrical Network</div>
                    <h2 className="gis-overview-title">Electrical Network</h2>
                    <h3 className="gis-overview-subtitle">Integrated GIS for managing transmission and distribution networks</h3>

                    <p className="gis-overview-desc">
                      Geosilicon helps utilities to design, store, manage, and maintain network information to operate distribution infrastructure safely, efficiently, and profitably using integrated CAD and GIS tools, with the best of the breed technologies
                    </p>
                    <p className="gis-overview-desc">
                      Our comprehensive GIS solution offerings include consulting & ideation, to actual implementation & post implementation support. Our solutions span the entire value chain from records conversion and management, to supporting critical engineering and business applications for electric transmission and distribution networks.
                    </p>
                    <p className="gis-overview-desc">
                      Geosilicon key value proposition is its unique ability to synthesize strong domain knowledge with technical abilities. Our solutions are backed by proven expertise in consulting, analysis, design and implementation of enterprise solutions. Our technology agnostic approach allows us to implement solutions grounds up or take over existing investments in technology by our clients.
                    </p>
                  </div>

                  <div className="gis-premium-solutions">
                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon blue-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                        </div>
                        <h4>Asset Data Management</h4>
                      </div>
                      <p>
                        Geosilicon develops high quality, cost effective data management solutions using the industry best breed of technologies and process innovations for managing assets. Our solutions are specifically tailored to our customer's needs and help them face the challenges of handling their ever growing assets, infrastructure and diverse business processes. Key services include:
                      </p>
                      <ul className="gis-bullet-list">
                        <li>Records Conversion and Integration</li>
                        <li>Establishing Primary/ Secondary Connectivity</li>
                        <li>Data Conflation and Realignment</li>
                        <li>Reactive Change-out & Field Order Forms Update</li>
                        <li>Asset Condition Assessment</li>
                        <li>Work Order Processing and Posting into GIS</li>
                      </ul>
                    </div>

                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon green-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </div>
                        <h4>Network Management</h4>
                      </div>
                      <p>
                        Geosilicon leverages its unique ability of sythesizing domain knowledge with technical capabilities to provide focused solutions in network management. Our solutions help our clients in improving the reliability, integrity and traceability of their networks.
                      </p>
                      <ul className="gis-bullet-list">
                        <li>T&D Network Mapping</li>
                        <li>Duct Configuration & Station Modelling</li>
                        <li>Geo-schematics</li>
                        <li>ROW Vegetation Management</li>
                        <li>LiDAR Data Mapping</li>
                        <li>Data Readiness for Smart Grid</li>
                      </ul>
                    </div>

                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon dark-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        </div>
                        <h4>Enterprise GIS</h4>
                      </div>
                      <p>
                        Geosilicon develops custom applications to seamlessly integrate existing geospatial data with other business & operational support systems. We help our clients in optimizing their operational workflows thereby enhancing performance and service reliability. In case of complex projects, we specialize in developing smart in-house tools to enhance productivity, efficiency and achieve maximum quality compliance.
                      </p>
                      <ul className="gis-bullet-list">
                        <li>Data Discovery & Gap Analysis</li>
                        <li>T&D Data Model Design and Development</li>
                        <li>CAD/GIS Integration</li>
                        <li>Enterprise Asset Management Integration with GIS</li>
                        <li>Technology Migration/Upgrade</li>
                        <li>Custom Application Development for the utility sector</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div style={{ backgroundColor: 'white', padding: '50px', borderRadius: '15px', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}`;

let startIndex = content.indexOf("<div style={{ backgroundColor: 'white', padding: '50px', borderRadius: '15px', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>");

if (startIndex !== -1) {
  content = content.substring(0, startIndex) + fullGisSection + content.substring(startIndex + 144);
  
  // Now we need to append the closing tag ')}' at the end of this div block
  let divEndIndex = content.indexOf('</div>      </div>');
  if (divEndIndex !== -1) {
    // Insert ')}' right after the first </div>
    content = content.substring(0, divEndIndex + 6) + '\\n        )}' + content.substring(divEndIndex + 6);
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('App.jsx correctly restored with the text, omitting Wireless!');
} else {
  console.log('Could not find the target block in App.jsx');
}

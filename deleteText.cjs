const fs = require('fs');
const filePath = 'src/App.jsx';
let content = fs.readFileSync(filePath, 'utf8');

const newGisSection = `            <div className="gis-tab-content-wrapper">
              {/* Tab 1: Telecom Network */}
              {activeSubTab === 'telecom' && (
                <div className="gis-premium-grid fade-in-up">
                  {/* Left Panel: Overview */}
                  <div className="gis-premium-overview">
                    <div className="gis-premium-badge">Telecom Network</div>
                    <h2 className="gis-overview-title">Telecom Network Solutions</h2>
                    <h3 className="gis-overview-subtitle">WIRELINE COMMUNICATIONS</h3>
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
                    </div>

                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon green-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                        </div>
                        <h4>GIS Data Management</h4>
                      </div>
                    </div>

                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon dark-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                        </div>
                        <h4>Application Development</h4>
                      </div>
                    </div>

                    <div className="gis-premium-card highlighted-card">
                      <div className="card-header">
                        <div className="card-icon gold-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        </div>
                        <h4>WIRELESS COMMUNICATIONS</h4>
                      </div>
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
                  </div>

                  <div className="gis-premium-solutions">
                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon green-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                        </div>
                        <h4>Network Management</h4>
                      </div>
                    </div>

                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon blue-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        </div>
                        <h4>Asset Data Management</h4>
                      </div>
                    </div>

                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon red-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </div>
                        <h4>Distribution Integrity Management</h4>
                      </div>
                    </div>

                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon dark-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                        </div>
                        <h4>Enterprise GIS</h4>
                      </div>
                    </div>

                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon purple-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                        </div>
                        <h4>Big Data & Analytics</h4>
                      </div>
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
                  </div>

                  <div className="gis-premium-solutions">
                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon blue-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                        </div>
                        <h4>Asset Data Management</h4>
                      </div>
                    </div>

                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon green-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </div>
                        <h4>Network Management</h4>
                      </div>
                    </div>

                    <div className="gis-premium-card">
                      <div className="card-header">
                        <div className="card-icon dark-gradient">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        </div>
                        <h4>Enterprise GIS</h4>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>`;

let startIndex = content.indexOf('<div className="gis-tab-content-wrapper">');
let endIndex = content.indexOf('</div>\n          </div>\n        ) : (', startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + newGisSection + content.substring(endIndex);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('App.jsx text deleted successfully!');
} else {
  console.log('Could not find the target block in App.jsx');
}

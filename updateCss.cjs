const fs = require('fs');
const filePath = 'src/index.css';
let content = fs.readFileSync(filePath, 'utf8');

const newCss = `
/* ==========================================================================
   Premium GIS Survey Dashboard Styles
   ========================================================================== */

/* Wrapper & Layout */
.gis-premium-wrapper {
  animation: fadeIn 0.8s ease-out;
}

.gis-premium-grid {
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 40px;
  align-items: start;
}

@media (max-width: 1024px) {
  .gis-premium-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Premium Tab Controls */
.gis-premium-tabbar {
  display: flex;
  gap: 15px;
  margin-bottom: 50px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 86, 179, 0.1);
  justify-content: center;
  flex-wrap: wrap;
}

.gis-premium-tab-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  border-radius: 12px;
  border: 1px solid rgba(0, 86, 179, 0.1);
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  color: var(--text-light);
  font-size: 1.05rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  overflow: hidden;
}

.gis-premium-tab-btn .tab-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.gis-premium-tab-btn:hover {
  background: var(--white);
  transform: translateY(-2px);
  color: var(--primary);
  border-color: rgba(0, 86, 179, 0.2);
  box-shadow: 0 8px 25px rgba(0, 86, 179, 0.08);
}

.gis-premium-tab-btn:hover .tab-icon {
  transform: scale(1.1) rotate(-5deg);
}

.gis-premium-tab-btn.active {
  background: var(--primary);
  color: var(--white);
  border-color: var(--primary);
  box-shadow: 0 10px 30px rgba(0, 86, 179, 0.25);
}

.gis-premium-tab-btn.active .tab-icon {
  transform: scale(1.1);
}

.tab-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 3px;
  background: #fff;
  transition: width 0.3s ease;
  border-radius: 3px 3px 0 0;
}

.gis-premium-tab-btn.active .tab-indicator {
  width: 40%;
}

/* Overview Panel */
.gis-premium-overview {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.6);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 150px;
}

.gis-premium-badge {
  display: inline-block;
  padding: 6px 14px;
  background: linear-gradient(135deg, rgba(0, 86, 179, 0.1), rgba(103, 162, 24, 0.1));
  color: var(--primary);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-radius: 20px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 86, 179, 0.05);
}

.gis-overview-title {
  font-size: 2.2rem;
  color: var(--primary);
  margin-bottom: 10px;
  font-weight: 800;
  line-height: 1.2;
}

.gis-overview-subtitle {
  font-size: 1.1rem;
  color: var(--primary-light);
  margin-bottom: 30px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.gis-premium-highlight-box {
  background: var(--primary);
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 30px;
  font-size: 1.05rem;
  line-height: 1.6;
  box-shadow: 0 8px 20px rgba(0, 86, 179, 0.2);
  border-left: 4px solid var(--primary-light);
}

.gis-overview-desc {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-light);
  margin-bottom: 20px;
}

.gis-platform-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

.gis-platform-tags span {
  background: rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.85rem;
  color: var(--text-dark);
  font-weight: 500;
  transition: all 0.3s ease;
}

.gis-platform-tags span:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 86, 179, 0.2);
}

/* Solutions Cards */
.gis-premium-solutions {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.gis-premium-card {
  background: white;
  padding: 35px;
  border-radius: 20px;
  border: 1px solid rgba(0, 86, 179, 0.08);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.02);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.gis-premium-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom, var(--primary), var(--primary-light));
  opacity: 0;
  transition: opacity 0.4s ease;
}

.gis-premium-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 86, 179, 0.08);
  border-color: rgba(0, 86, 179, 0.15);
}

.gis-premium-card:hover::after {
  opacity: 1;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-bottom: 20px;
}

.card-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.card-icon.blue-gradient { background: linear-gradient(135deg, #0056b3, #3388ff); }
.card-icon.green-gradient { background: linear-gradient(135deg, #67a218, #8bc34a); }
.card-icon.dark-gradient { background: linear-gradient(135deg, #1a202c, #4a5568); }
.card-icon.red-gradient { background: linear-gradient(135deg, #e53e3e, #f56565); }
.card-icon.purple-gradient { background: linear-gradient(135deg, #6b46c1, #9f7aea); }
.card-icon.gold-gradient { background: linear-gradient(135deg, #d69e2e, #ecc94b); }

.card-icon svg {
  width: 24px;
  height: 24px;
}

.gis-premium-card h4 {
  font-size: 1.35rem;
  color: var(--text-dark);
  font-weight: 700;
  line-height: 1.3;
}

.gis-premium-card p {
  font-size: 0.98rem;
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 20px;
}

/* Custom Bullet List */
.gis-bullet-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 12px;
}

.gis-bullet-list li {
  position: relative;
  padding-left: 30px;
  font-size: 0.95rem;
  color: var(--text-dark);
  font-weight: 500;
  line-height: 1.5;
}

.gis-bullet-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 4px;
  width: 18px;
  height: 18px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230056b3' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
}

/* Highlighted Special Card */
.highlighted-card {
  background: linear-gradient(145deg, #ffffff, #f8faff);
  border: 1px solid rgba(0, 86, 179, 0.15);
}

.highlighted-content strong {
  display: block;
  font-size: 1.1rem;
  color: var(--primary);
  margin-bottom: 15px;
}

.geodata-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.geodata-tags span {
  background: white;
  border: 1px solid rgba(0, 86, 179, 0.2);
  color: var(--primary);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);
}
`;

let searchString = '/* Premium GIS Survey Sub-Tabs Design */';
let startIndex = content.indexOf(searchString);

if (startIndex !== -1) {
  content = content.substring(0, startIndex) + newCss;
} else {
  content += '\n' + newCss;
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('index.css updated successfully!');

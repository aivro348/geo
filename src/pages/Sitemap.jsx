import { Link } from 'react-router-dom';

export default function Sitemap() {
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

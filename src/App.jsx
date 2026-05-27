import { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, MapPin, Mail, Phone, ArrowUp } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './index.css';
import { services } from './data/servicesData';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Clients = lazy(() => import('./pages/Clients'));
const Contact = lazy(() => import('./pages/Contact'));
const BookAppointment = lazy(() => import('./pages/BookAppointment'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Sitemap = lazy(() => import('./pages/Sitemap'));

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

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
              <Link 
                to="/services" 
                className={location.pathname === '/services' || location.pathname.startsWith('/services/') ? 'active' : ''} 
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    setIsMobileServicesOpen(!isMobileServicesOpen);
                  } else {
                    setIsMobileMenuOpen(false);
                  }
                }}
              >
                Services
              </Link>
              <ul className="dropdown-menu" style={isMobileServicesOpen && window.innerWidth <= 768 ? { display: 'block' } : {}}>
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
            <li><Link to="/book" className="btn btn-primary" style={{ padding: '8px 15px', color: 'white' }} onClick={() => setIsMobileMenuOpen(false)}>Book Appointment</Link></li>
          </ul>
        </div>
      </header>

      <Suspense fallback={<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div className="loader"></div></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </Suspense>

      {/* WhatsApp Widget */}
      <a href="https://wa.me/919959664560" className="whatsapp-widget" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="#fff">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
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
            <div className="social-icons" style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              <a href="#" style={{ color: '#94a3b8', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}><FaFacebook size={20} /></a>
              <a href="#" style={{ color: '#94a3b8', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#e1306c'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}><FaInstagram size={20} /></a>
              <a href="#" style={{ color: '#94a3b8', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#1da1f2'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}><FaTwitter size={20} /></a>
              <a href="https://www.linkedin.com/company/geosilicon-technologies-opc-pvt-ltd/" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0077b5'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}><FaLinkedin size={20} /></a>
              <a href="#" style={{ color: '#94a3b8', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ff0000'} onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}><FaYoutube size={20} /></a>
            </div>
          </div>

          {/* Column 2 */}
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <Link to="/"><ArrowRight size={14} style={{ marginRight: '5px' }} /> Home</Link>
              <Link to="/about"><ArrowRight size={14} style={{ marginRight: '5px' }} /> About Us</Link>
              <Link to="/services"><ArrowRight size={14} style={{ marginRight: '5px' }} /> Services</Link>
              <Link to="/gallery"><ArrowRight size={14} style={{ marginRight: '5px' }} /> Gallery</Link>
              <Link to="/clients"><ArrowRight size={14} style={{ marginRight: '5px' }} /> Clients</Link>
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
              <p style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={16} style={{ color: '#f97316', flexShrink: 0, marginTop: '4px' }} /> 
                <span>
                  H. No: 4-33-12/2, 2nd Floor,<br/>
                  Street No. 3, Venkateshwara Nagar,<br/>
                  Jagathgiri Gutta, Hyderabad,<br/>
                  Telangana – 500037
                </span>
              </p>
              <p><Phone size={16} style={{ color: '#f97316', flexShrink: 0 }} /> <a href="tel:+919959664560" style={{ color: 'inherit', textDecoration: 'none' }}>+91-9959664560</a></p>
              <p style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <Mail size={16} style={{ color: '#f97316', flexShrink: 0, marginTop: '4px' }} />
                <span style={{ display: 'flex', flexDirection: 'column' }}>
                  <a href="mailto:info@geosilicon.in" style={{ color: 'inherit', textDecoration: 'none' }}>info@geosilicon.in</a>
                  <a href="mailto:geosilicontechnologiesindia@gmail.com" style={{ color: 'inherit', textDecoration: 'none', marginTop: '2px' }}>geosilicontechnologiesindia@gmail.com</a>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Geosilicon Technologies India Pvt. Ltd. <a href="https://www.reddycharan.me" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>All Rights Reserved.</a></p>
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

export default App;

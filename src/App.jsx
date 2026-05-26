import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation, useParams } from 'react-router-dom';
import { ArrowRight, MapPin, Mail, Phone, Target, Eye, Briefcase, Menu, X, ArrowUp, FolderCheck } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { services, serviceDetails } from './data/servicesData';

const projectsList = [
  "POI Survey",
  "Just Dial Reseller",
  "Village Survey",
  "Base Map Digitization",
  "Village Map Geo rectification",
  "RAPDRP-1",
  "RAPDRP-2",
  "Cadastral Mapping",
  "Base Map Preparation",
  "Land base Survey"
];
function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: ''
  });
  const [status, setStatus] = useState('');
  const formRef = useRef();
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      setStatus('Phone number must be exactly 10 digits.');
      return;
    }
    setStatus('Sending...');

    emailjs.sendForm(
      'service_0gjlh37',
      'template_ib252zn',
      formRef.current,
      'TKIf8mmMtO5vpHkxg'
    )
      .then(() => {
        setStatus('Appointment request sent successfully!');
        setFormData({ name: '', email: '', phone: '', service: '', date: '' });
      }, (error) => {
        setStatus('Failed to send request. Please try again.');
        console.error(error.text);
      });
  };

  return (
    <div style={{ paddingTop: '150px', backgroundColor: 'var(--secondary)', minHeight: '100vh', paddingBottom: '100px' }}>
      <section className="section" style={{ marginTop: 0 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="contact-container"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div className="contact-form-wrapper" style={{ width: '100%', maxWidth: '600px' }}>
            <h3>Book an Appointment</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name (Full Name *)"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email (Email Address *)"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter 10-digit mobile number (Phone Number *)"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', color: formData.service ? 'var(--text-dark)' : '#757575', backgroundColor: '#fff', fontFamily: 'inherit' }}
                >
                  <option value="" disabled>Select a service (Service Required *)</option>
                  {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div className="form-group">
                <input
                  type="date"
                  name="date"
                  required
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  style={{ color: formData.date ? 'var(--text-dark)' : '#757575', width: '100%', padding: '15px', border: '1px solid #e2e8f0', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit' }}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Book Consultation</button>
              {status && <p style={{ marginTop: '15px', color: status.includes('success') ? 'green' : 'red', fontWeight: '500' }}>{status}</p>}
            </form>
          </div>
        </motion.div>
      </section>
    </div>
  );
}


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
            {services.map((service) => (
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

      {/* Projects Section */}
      <section id="projects" className="section" style={{ backgroundColor: '#f8fafc' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">
            A track record of excellence across diverse geospatial and engineering domains.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projectsList.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="project-icon">
                <FolderCheck size={20} />
              </div>
              <h3 className="project-title">{project}</h3>
            </motion.div>
          ))}
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
          <motion.img src="/c2.png" alt="Client 2" className="client-logo" style={{ height: '120px' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} />
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
            <li><Link to="/book" className="btn btn-primary" style={{ padding: '8px 15px', color: 'white' }} onClick={() => setIsMobileMenuOpen(false)}>Book Appointment</Link></li>
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
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>

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

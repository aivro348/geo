import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { services } from '../data/servicesData';

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

export default function Home() {
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
            <img 
              src={service.img} 
              alt={service.title} 
              loading={index === 0 ? "eager" : "lazy"} 
              fetchpriority={index === 0 ? "high" : "auto"} 
            />

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
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
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
                      <img src={service.img} alt={service.title} className="service-img" loading="lazy" />
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
              <h3 className="project-title" style={{ textAlign: 'center', width: '100%' }}>{project}</h3>
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
          <motion.img src="/c1.png" alt="Client 1" className="client-logo" loading="lazy" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} />
          <motion.img src="/c2.png" alt="Client 2" className="client-logo" loading="lazy" style={{ height: '120px' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} />
          <motion.img src="/c3.png" alt="Client 3" className="client-logo" loading="lazy" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} />
          <motion.img src="/c4.png" alt="Client 4" className="client-logo" loading="lazy" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} />
          <motion.img src="/c5.png" alt="Client 5" className="client-logo" loading="lazy" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          <motion.img src="/logo6.png" alt="Client 6" className="client-logo" loading="lazy" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} />
          <motion.img src="/logo7.png" alt="Client 7" className="client-logo" loading="lazy" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }} />
        </div>
      </section>

    </>
  );
}

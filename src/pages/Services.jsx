import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/servicesData';

export default function Services() {
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
                  <img src={service.img} alt={service.title} className="service-img" loading="lazy" />
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

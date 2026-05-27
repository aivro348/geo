import { motion } from 'framer-motion';
import { services } from '../data/servicesData';

export default function Gallery() {
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
              <img src={service.heroImg || service.img} alt={service.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

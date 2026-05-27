import { motion } from 'framer-motion';

export default function About() {
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
            <img src="/about.png" alt="About Geosilicon" loading="lazy" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';

export default function Clients() {
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
          <motion.img src="/c1.png" alt="Client 1" className="client-logo" loading="lazy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} />
          <motion.img src="/c2.png" alt="Client 2" className="client-logo" loading="lazy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} />
          <motion.img src="/c3.png" alt="Client 3" className="client-logo" loading="lazy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} />
          <motion.img src="/c4.png" alt="Client 4" className="client-logo" loading="lazy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} />
          <motion.img src="/c5.png" alt="Client 5" className="client-logo" loading="lazy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} />
          <motion.img src="/logo6.png" alt="Client 6" className="client-logo" loading="lazy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
          <motion.img src="/logo7.png" alt="Client 7" className="client-logo" loading="lazy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />
        </div>
      </section>
    </div>
  );
}

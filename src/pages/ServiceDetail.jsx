import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services, serviceDetails } from '../data/servicesData';

export default function ServiceDetail() {
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

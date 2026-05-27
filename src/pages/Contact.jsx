import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { services } from '../data/servicesData';

export default function Contact() {
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

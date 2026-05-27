import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { services } from '../data/servicesData';

export default function BookAppointment() {
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

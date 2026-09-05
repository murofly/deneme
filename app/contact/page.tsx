'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form verisi:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="container">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '2rem' }}>İletişim</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          <div style={{
            backgroundColor: '#f5f5f5',
            padding: '2rem',
            borderRadius: '8px'
          }}>
            <h3 style={{ color: '#d9534f', marginBottom: '1rem' }}>Bize Ulaşın</h3>
            <p style={{ marginBottom: '1rem' }}>
              <strong>📞 Telefon:</strong> +90 212 XXX XX XX
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>📧 Email:</strong> info@muro-otomotiv.com
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>📍 Adres:</strong> İstanbul, Türkiye
            </p>
            <p style={{ marginBottom: '1rem' }}>
              <strong>⏰ Çalışma Saatleri:</strong>
            </p>
            <p>Pazartesi - Cuma: 09:00 - 18:00</p>
            <p>Cumartesi: 10:00 - 16:00</p>
            <p>Pazar: Kapalı</p>
          </div>

          <div>
            {submitted && (
              <div style={{
                padding: '1rem',
                backgroundColor: '#d4edda',
                color: '#155724',
                borderRadius: '5px',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                ✓ Mesajınız başarıyla gönderildi. Teşekkürler!
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ad Soyad</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="E-posta adresiniz"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Telefon numaranız"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Konuyu yazın"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Mesajınızı yazın"
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

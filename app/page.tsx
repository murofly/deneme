'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h2>Muro Otomotiv&apos;e Hoşgeldiniz</h2>
          <p>Güvenilir, Kaliteli ve Profesyonel Araç Satışı</p>
          <Link href="/vehicles">
            <button className="btn btn-primary">Araçları Görüntüle</button>
          </Link>
        </div>
      </section>

      <div className="container">
        <section className="features">
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Neden Bize Güvenmelisiniz?</h2>
          <div className="vehicles-grid">
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
              <h3>Garantili Araçlar</h3>
              <p>Tüm araçlarımız detaylı kontrol ve bakım üzerinden geçer.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
              <h3>Rekabetçi Fiyatlar</h3>
              <p>En iyi fiyat garantisi ile kaliteli araçları bulun.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🤝</div>
              <h3>Profesyonel Hizmet</h3>
              <p>Deneyimli ve dostça satış temsilcilerimiz yanınızda.</p>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '2rem' }}>İletişim Bilgileri</h2>
          <p>📞 Telefon: +90 212 XXX XX XX</p>
          <p>📧 Email: info@muro-otomotiv.com</p>
          <p>📍 Adres: İstanbul, Türkiye</p>
        </section>
      </div>
    </>
  );
}

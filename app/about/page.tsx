export default function About() {
  return (
    <div className="container">
      <h2 style={{ marginBottom: '2rem' }}>Hakkımızda</h2>

      <section style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#d9534f', marginBottom: '1rem' }}>Muro Otomotiv Kimdir?</h3>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Muro Otomotiv, 2015 yılından beri İstanbul'da faaliyet gösteren ve müşteri memnuniyetini ön planda tutan
          profesyonel bir araç satış şirketidir. Yılların deneyimiyle, geniş araç envanteri ve adil fiyatlandırma
          politikamız ile binlerce müşterimize hizmet sunmaktayız.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#d9534f', marginBottom: '1rem' }}>Vizyonumuz</h3>
        <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
          Türkiye'nin en güvenilir ve müşteri odaklı araç satış merkezi olmak. Her müşterinin ihtiyaçına uygun,
          kaliteli ve uygun fiyatlı araçlar sunmak.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3 style={{ color: '#d9534f', marginBottom: '1rem' }}>Değerlerimiz</h3>
        <ul style={{ lineHeight: '2', marginLeft: '1.5rem' }}>
          <li>✓ Müşteri memnuniyeti her şeyin merkezinde</li>
          <li>✓ Şeffaf ve dürüst iş uygulamaları</li>
          <li>✓ Kaliteli araç ve profesyonel hizmet</li>
          <li>✓ Hızlı ve güvenilir servis</li>
        </ul>
      </section>

      <section style={{
        backgroundColor: '#f5f5f5',
        padding: '2rem',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#d9534f', marginBottom: '1rem' }}>Bize Ulaşın</h3>
        <p>📞 +90 212 XXX XX XX</p>
        <p>📧 info@muro-otomotiv.com</p>
        <p>📍 İstanbul, Türkiye</p>
      </section>
    </div>
  );
}

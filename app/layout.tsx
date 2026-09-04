import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muro Otomotiv - Profesyonel Araç Satışı',
  description: 'Muro Otomotiv ile güvenilir ve kaliteli araç satışı hizmetini keşfedin.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <header className="header">
          <nav className="navbar">
            <div className="container">
              <div className="logo">
                <h1>🚗 Muro Otomotiv</h1>
              </div>
              <ul className="nav-links">
                <li><a href="/">Anasayfa</a></li>
                <li><a href="/vehicles">Araçlar</a></li>
                <li><a href="/about">Hakkımızda</a></li>
                <li><a href="/contact">İletişim</a></li>
              </ul>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 Muro Otomotiv. Tüm hakları saklıdır.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

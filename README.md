# 🚗 Muro Otomotiv - Next.js Otomotiv Website

Muro Otomotiv, XAMPP ve phpMyAdmin ile çalışan profesyonel bir otomotiv satış websitesidir.

## 📋 Teknolojiler

- **Framework:** Next.js 15
- **Dil:** TypeScript & TSX
- **Veritabanı:** MySQL (XAMPP)
- **Yönetim:** phpMyAdmin
- **Styling:** CSS3

## 🚀 Kurulum Adımları

### 1. XAMPP Ayarları

#### MySQL Başlatma
```bash
# Windows
xampp_start.exe

# Linux
sudo /opt/lampp/lampp start

# Mac
sudo /Applications/XAMPP/xamppfiles/bin/./xampp start
```

#### phpMyAdmin Erişimi
- URL: `http://localhost/phpmyadmin`
- Kullanıcı: `root`
- Şifre: *(Boş)*

### 2. Veritabanı Oluşturma

phpMyAdmin'de aşağıdaki SQL komutlarını çalıştırın:

```sql
CREATE DATABASE muro_otomotiv CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE muro_otomotiv;

CREATE TABLE vehicles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  brand VARCHAR(100) NOT NULL,
  model VARCHAR(100) NOT NULL,
  year INT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_brand (brand),
  INDEX idx_price (price)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Örnek veriler
INSERT INTO vehicles (brand, model, year, price, description) VALUES
('Toyota', 'Corolla', 2022, 450000, 'Çok temiz, düşük km araç'),
('Honda', 'Civic', 2021, 520000, 'Full donanımlı, garaj araçı'),
('BMW', '320i', 2020, 650000, 'Konforlu, ekonomik araç'),
('Mercedes', 'A180', 2019, 550000, 'Lüks ve güvenli');
```

### 3. Node.js Bağımlılıklarını Yükleme

```bash
npm install
```

### 4. Ortam Değişkenlerini Ayarlama

`.env.local` dosyası zaten oluşturulmuştur. Gerekirse değiştirin:

```env
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=muro_otomotiv
```

### 5. Geliştirme Sunucusunu Başlatma

```bash
npm run dev
```

Tarayıcıda açın: `http://localhost:3000`

## 📁 Proje Yapısı

```
muro-otomotiv/
├── app/
│   ├── api/
│   │   └── vehicles/           # REST API endpoints
│   │       └── route.ts
│   ├── vehicles/               # Araçlar sayfası
│   │   └── page.tsx
│   ├── about/                  # Hakkımızda sayfası
│   │   └── page.tsx
│   ├── contact/                # İletişim sayfası
│   │   └── page.tsx
│   ├── components/             # Reusable bileşenler
│   ├── services/               # Servisler
│   │   └── db.ts              # MySQL bağlantısı
│   ├── layout.tsx              # Ana layout
│   ├── page.tsx                # Anasayfa
│   └── globals.css             # Global stiller
├── public/                      # Statik dosyalar
├── .env.local                   # Ortam değişkenleri
├── next.config.js              # Next.js konfigürasyonu
├── tsconfig.json               # TypeScript konfigürasyonu
└── package.json
```

## 📝 Sayfalar

- **Anasayfa** (`/`) - Hoşgeldin sayfası ve tanıtım
- **Araçlar** (`/vehicles`) - Tüm araçların listelenmesi
- **Hakkımızda** (`/about`) - Şirket bilgileri
- **İletişim** (`/contact`) - İletişim formu

## 🔌 API Endpoints

### GET /api/vehicles
Tüm araçları listeler

**Response:**
```json
[
  {
    "id": 1,
    "brand": "Toyota",
    "model": "Corolla",
    "year": 2022,
    "price": 450000,
    "description": "Çok temiz, düşük km araç",
    "created_at": "2024-09-04T12:30:00Z"
  }
]
```

### POST /api/vehicles
Yeni araç ekler

**Request:**
```json
{
  "brand": "Honda",
  "model": "Civic",
  "year": 2023,
  "price": 650000,
  "description": "Yeni model"
}
```

## 🛠️ Geliştirme Komutları

```bash
# Geliştirme sunucusunu başlat
npm run dev

# Production için build et
npm run build

# Production sunucusunu çalıştır
npm start

# Linting
npm run lint
```

## 💾 XAMPP ile MySQL İşlemleri

### MySQL'e phpMyAdmin üzerinden bağlanma
1. `http://localhost/phpmyadmin` adresine gidin
2. Kullanıcı: `root`
3. Şifre: *(Boş bırakın)*

### MySQL'e komut satırından bağlanma
```bash
mysql -u root -p muro_otomotiv
```

## 🐛 Sorun Giderme

### MySQL bağlantı hatası
- XAMPP'de MySQL'in çalıştığını kontrol edin
- `.env.local` dosyasındaki bağlantı bilgilerini doğrulayın
- MySQL portu 3306 olduğundan emin olun

### Port 3000 zaten kullanılıyorsa
```bash
npm run dev -- -p 3001
```

### Veritabanı boş
Yukarıdaki SQL komutlarını phpMyAdmin'de çalıştırın

## 📦 Bağımlılıklar

- react: 19.0.0
- react-dom: 19.0.0
- next: 15.0.0
- typescript: 5.3.0
- mysql2: 3.6.0

## 📞 İletişim

- 📧 Email: info@muro-otomotiv.com
- 📞 Telefon: +90 212 XXX XX XX
- 📍 Adres: İstanbul, Türkiye

## 📄 Lisans

MIT License - Tüm hakları saklıdır © 2024 Muro Otomotiv

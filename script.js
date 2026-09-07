// Favorites array from localStorage
let favorites = JSON.parse(localStorage.getItem('murocarFavorites')) || [];

// Sample car data with more details
let cars = [
    {
        id: 1,
        brand: 'Toyota',
        model: 'Corolla',
        year: 2023,
        km: 15000,
        price: 450000,
        fuel: 'Benzin',
        transmission: 'Otomatik',
        color: 'Beyaz',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        description: 'Mükemmel durumda Toyota Corolla. Tam bakımlı, hasarsız araba. Orijinal km, airbag sistemleri tamam.',
        seller: 'Ahmet Kardeş Oto',
        sellerPhone: '+90 (212) 123 45 67',
        engine: '1.6L',
        power: '120 hp',
        fuelConsumption: '6.5 L/100km',
        trending: true,
        views: 2450
    },
    {
        id: 2,
        brand: 'Honda',
        model: 'Civic',
        year: 2022,
        km: 32000,
        price: 380000,
        fuel: 'Benzin',
        transmission: 'Manual',
        color: 'Siyah',
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c3dec6765?w=400&h=300&fit=crop',
        description: 'Honda Civic 2022. Çok düşün kmli. Garantisi devam ediyor. Servis bakımları yapılmış.',
        seller: 'Oto Satış Plus',
        sellerPhone: '+90 (212) 234 56 78',
        engine: '1.5L',
        power: '130 hp',
        fuelConsumption: '6.2 L/100km',
        trending: true,
        views: 3120
    },
    {
        id: 3,
        brand: 'Volkswagen',
        model: 'Golf',
        year: 2021,
        km: 55000,
        price: 320000,
        fuel: 'Dizel',
        transmission: 'Otomatik',
        color: 'Gümüş',
        image: 'https://images.unsplash.com/photo-1581346846014-fa7f826b8f63?w=400&h=300&fit=crop',
        description: 'Volkswagen Golf 7 Dizel. Orjinal yapı. Bakımlı ve temiz araba.',
        seller: 'Güvenir Oto',
        sellerPhone: '+90 (212) 345 67 89',
        engine: '2.0L TDI',
        power: '150 hp',
        fuelConsumption: '4.8 L/100km',
        trending: false,
        views: 1820
    },
    {
        id: 4,
        brand: 'BMW',
        model: '320i',
        year: 2020,
        km: 78000,
        price: 550000,
        fuel: 'Benzin',
        transmission: 'Otomatik',
        color: 'Mavi',
        image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop',
        description: 'BMW 320i. Sunroof ve deri iç. Tüm bakımlar güncel. Orjinal dış kaporta.',
        seller: 'Lüks Oto Satış',
        sellerPhone: '+90 (212) 456 78 90',
        engine: '2.0L',
        power: '184 hp',
        fuelConsumption: '7.1 L/100km',
        trending: true,
        views: 2890
    },
    {
        id: 5,
        brand: 'Mercedes',
        model: 'C200',
        year: 2019,
        km: 95000,
        price: 600000,
        fuel: 'Benzin',
        transmission: 'Otomatik',
        color: 'Beyaz',
        image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop',
        description: 'Mercedes Benz C200. Deri iç, çatı açılır. Servis geçmişi tam.',
        seller: 'Premium Oto Merkezi',
        sellerPhone: '+90 (212) 567 89 01',
        engine: '1.8L',
        power: '155 hp',
        fuelConsumption: '7.5 L/100km',
        trending: false,
        views: 1650
    },
    {
        id: 6,
        brand: 'Hyundai',
        model: 'i20',
        year: 2024,
        km: 5000,
        price: 280000,
        fuel: 'Benzin',
        transmission: 'Manual',
        color: 'Kırmızı',
        image: 'https://images.unsplash.com/photo-1609628982106-b3b3d7b4e18b?w=400&h=300&fit=crop',
        description: 'Sıfır km gibi Hyundai i20. Oto elektrik, klima, temiz araba.',
        seller: 'Yeni Araçlar Oto',
        sellerPhone: '+90 (212) 678 90 12',
        engine: '1.2L',
        power: '84 hp',
        fuelConsumption: '5.5 L/100km',
        trending: true,
        views: 3560
    },
    {
        id: 7,
        brand: 'Audi',
        model: 'A4',
        year: 2021,
        km: 48000,
        price: 650000,
        fuel: 'Dizel',
        transmission: 'Otomatik',
        color: 'Siyah',
        image: 'https://images.unsplash.com/photo-1606611013016-969c19d4336d?w=400&h=300&fit=crop',
        description: 'Audi A4 2021. Dijital gösterge paneli. Led lambalar. Harika durumda.',
        seller: 'Prestij Otomotiv',
        sellerPhone: '+90 (212) 789 01 23',
        engine: '2.0L TDI',
        power: '163 hp',
        fuelConsumption: '4.9 L/100km',
        trending: false,
        views: 2140
    },
    {
        id: 8,
        brand: 'Renault',
        model: 'Dacia Logan',
        year: 2020,
        km: 110000,
        price: 180000,
        fuel: 'Benzin',
        transmission: 'Manual',
        color: 'Gri',
        image: 'https://images.unsplash.com/photo-1609632733057-6c6a341bed3a?w=400&h=300&fit=crop',
        description: 'Dacia Logan. Ekonomik ve güvenilir araba. Bakımlı, temiz.',
        seller: 'Ekonomik Oto Satış',
        sellerPhone: '+90 (212) 890 12 34',
        engine: '1.0L',
        power: '65 hp',
        fuelConsumption: '5.2 L/100km',
        trending: false,
        views: 980
    }
];

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
});

// Close menu when link clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks?.classList.remove('active');
    });
});

// Display all cars on page load
window.addEventListener('DOMContentLoaded', () => {
    displayTrendingCars();
    displayCars(cars);
    displayFavorites();
});

// Display cars
function displayCars(carArray) {
    const carsList = document.getElementById('carsList');
    carsList.innerHTML = '';

    if (carArray.length === 0) {
        carsList.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">Şu anda gösterecek araba yok.</p>';
        return;
    }

    carArray.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        const isFavorite = favorites.includes(car.id);
        carCard.innerHTML = `
            <div class="car-image" style="position: relative;">
                <img src="${car.image}" alt="${car.brand} ${car.model}" style="width: 100%; height: 220px; object-fit: cover; border-radius: 16px 16px 0 0;">
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${car.id})">
                    ${isFavorite ? '❤️' : '🤍'}
                </button>
            </div>
            <div class="car-info">
                <div class="car-title">${car.brand} ${car.model}</div>
                <div class="car-details">
                    <span>📅 ${car.year} | 🚗 ${car.km.toLocaleString()} km</span>
                    <span>⛽ ${car.fuel} | 🔧 ${car.transmission}</span>
                    <span>🎨 ${car.color}</span>
                </div>
                <div class="car-price">₺${car.price.toLocaleString('tr-TR')}</div>
                <div class="car-seller">${car.seller}</div>
                <div class="car-buttons">
                    <button class="btn-primary" onclick="viewCarDetail(${car.id})">Detaylar</button>
                    <button class="btn-secondary" onclick="contactSeller('${car.seller}', '${car.sellerPhone}')">İletişim</button>
                </div>
            </div>
        `;
        carsList.appendChild(carCard);
    });
}

// View car details
function viewCarDetail(carId) {
    const car = cars.find(c => c.id === carId);
    if (!car) return;

    const modal = document.getElementById('carDetailModal');
    const detailBody = document.getElementById('carDetailBody');

    detailBody.innerHTML = `
        <div class="car-detail-body">
            <div>
                <img src="${car.image}" alt="${car.brand} ${car.model}" class="detail-image">
            </div>
            <div class="detail-info">
                <h2>${car.brand} ${car.model}</h2>
                <div class="detail-price">₺${car.price.toLocaleString('tr-TR')}</div>

                <div class="detail-specs">
                    <div class="spec-row">
                        <strong>Yıl:</strong>
                        <span>${car.year}</span>
                    </div>
                    <div class="spec-row">
                        <strong>Kilometre:</strong>
                        <span>${car.km.toLocaleString()} km</span>
                    </div>
                    <div class="spec-row">
                        <strong>Motor:</strong>
                        <span>${car.engine}</span>
                    </div>
                    <div class="spec-row">
                        <strong>Güç:</strong>
                        <span>${car.power}</span>
                    </div>
                    <div class="spec-row">
                        <strong>Yakıt Tüketimi:</strong>
                        <span>${car.fuelConsumption}</span>
                    </div>
                    <div class="spec-row">
                        <strong>Yakıt Türü:</strong>
                        <span>${car.fuel}</span>
                    </div>
                    <div class="spec-row">
                        <strong>Vites Tipi:</strong>
                        <span>${car.transmission}</span>
                    </div>
                    <div class="spec-row">
                        <strong>Renk:</strong>
                        <span>${car.color}</span>
                    </div>
                </div>

                <div class="detail-description">
                    <strong>Açıklama:</strong>
                    <p>${car.description}</p>
                </div>

                <div class="detail-seller">
                    <h3>Satıcı Bilgileri</h3>
                    <p><strong>Satıcı:</strong> ${car.seller}</p>
                    <p><strong>Telefon:</strong> <a href="tel:${car.sellerPhone}" style="color: var(--accent-color); text-decoration: none;">${car.sellerPhone}</a></p>
                    <button class="contact-seller-btn" onclick="alert('Satıcı ile iletişime geçmek için telefon numarasına tıklayınız veya mesaj gönderin.')">Satıcıya Mesaj Gönder</button>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
}

// Close car detail modal
function closeCarDetail() {
    document.getElementById('carDetailModal').style.display = 'none';
}

// Contact seller
function contactSeller(sellerName, phone) {
    alert(`${sellerName} ile iletişime geçmek için:\n\nTelefon: ${phone}\n\nDirect olarak arayabilir veya WhatsApp ile yazabilirsiniz.`);
}

// Search cars
function searchCars() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filtered = cars.filter(car => {
        const searchStr = `${car.brand} ${car.model} ${car.year}`.toLowerCase();
        return searchStr.includes(searchInput) || car.price.toString().includes(searchInput);
    });
    displayCars(filtered);
}

// Apply filters
function applyFilters() {
    const brand = document.getElementById('brandFilter').value;
    const year = document.getElementById('yearFilter').value;
    const priceRange = document.getElementById('priceFilter').value;
    const fuel = document.getElementById('fuelFilter').value;

    let filtered = cars;

    if (brand) {
        filtered = filtered.filter(car => car.brand === brand);
    }

    if (year) {
        filtered = filtered.filter(car => car.year.toString() === year);
    }

    if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        filtered = filtered.filter(car => car.price >= min && car.price <= max);
    }

    if (fuel) {
        filtered = filtered.filter(car => car.fuel === fuel);
    }

    displayCars(filtered);
}

// Admin Panel Functions
function openAdminPanel() {
    document.getElementById('adminModal').style.display = 'flex';
    loadManageCars();
}

function closeAdminPanel() {
    document.getElementById('adminModal').style.display = 'none';
}

// Admin link
document.querySelector('.admin-link')?.addEventListener('click', (e) => {
    e.preventDefault();
    openAdminPanel();
});

// Switch admin tabs
function switchTab(tabName) {
    const contents = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');

    contents.forEach(content => content.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// Add car form
document.getElementById('addCarForm')?.addEventListener('submit', (e) => {
    e.preventDefault();

    const newCar = {
        id: cars.length + 1,
        brand: document.getElementById('brand').value,
        model: document.getElementById('model').value,
        year: parseInt(document.getElementById('year').value),
        km: parseInt(document.getElementById('km').value),
        price: parseInt(document.getElementById('price').value),
        fuel: document.getElementById('fuel').value,
        transmission: document.getElementById('transmission').value,
        color: document.getElementById('color').value,
        image: document.getElementById('image').value,
        description: document.getElementById('description').value,
        seller: document.getElementById('seller').value,
        sellerPhone: document.getElementById('sellerPhone').value
    };

    cars.push(newCar);
    displayCars(cars);
    loadManageCars();

    document.getElementById('addCarForm').reset();
    alert('Araba başarıyla eklendi!');
});

// Load manage cars
function loadManageCars() {
    const container = document.getElementById('manageCarsContainer');
    container.innerHTML = '';

    cars.forEach(car => {
        const item = document.createElement('div');
        item.className = 'manage-car-item';
        item.innerHTML = `
            <div class="manage-car-info">
                <h4>${car.brand} ${car.model} (${car.year})</h4>
                <p>Fiyat: ₺${car.price.toLocaleString('tr-TR')} | KM: ${car.km.toLocaleString()} | Satıcı: ${car.seller}</p>
            </div>
            <div class="manage-car-actions">
                <button class="edit-btn" onclick="editCar(${car.id})">Düzenle</button>
                <button class="delete-btn" onclick="deleteCar(${car.id})">Sil</button>
            </div>
        `;
        container.appendChild(item);
    });
}

// Delete car
function deleteCar(carId) {
    if (confirm('Arabaları silmek istediğinizden emin misiniz?')) {
        cars = cars.filter(car => car.id !== carId);
        displayCars(cars);
        loadManageCars();
        alert('Araba başarıyla silindi!');
    }
}

// Edit car (simplified - opens form with car data)
function editCar(carId) {
    const car = cars.find(c => c.id === carId);
    if (!car) return;

    document.getElementById('brand').value = car.brand;
    document.getElementById('model').value = car.model;
    document.getElementById('year').value = car.year;
    document.getElementById('km').value = car.km;
    document.getElementById('price').value = car.price;
    document.getElementById('fuel').value = car.fuel;
    document.getElementById('transmission').value = car.transmission;
    document.getElementById('color').value = car.color;
    document.getElementById('image').value = car.image;
    document.getElementById('description').value = car.description;
    document.getElementById('seller').value = car.seller;
    document.getElementById('sellerPhone').value = car.sellerPhone;

    // Change button text
    const addCarForm = document.getElementById('addCarForm');
    const submitBtn = addCarForm.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Arabaları Güncelle';

    switchTab('add-car');

    // Handle update
    addCarForm.onsubmit = (e) => {
        e.preventDefault();

        const updatedCar = cars.find(c => c.id === carId);
        updatedCar.brand = document.getElementById('brand').value;
        updatedCar.model = document.getElementById('model').value;
        updatedCar.year = parseInt(document.getElementById('year').value);
        updatedCar.km = parseInt(document.getElementById('km').value);
        updatedCar.price = parseInt(document.getElementById('price').value);
        updatedCar.fuel = document.getElementById('fuel').value;
        updatedCar.transmission = document.getElementById('transmission').value;
        updatedCar.color = document.getElementById('color').value;
        updatedCar.image = document.getElementById('image').value;
        updatedCar.description = document.getElementById('description').value;
        updatedCar.seller = document.getElementById('seller').value;
        updatedCar.sellerPhone = document.getElementById('sellerPhone').value;

        displayCars(cars);
        loadManageCars();
        addCarForm.reset();
        submitBtn.textContent = 'İlan Ekle';
        addCarForm.onsubmit = null;
        alert('Araba başarıyla güncellendi!');
    };
}

// Contact form
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mesajınız gönderildi. En kısa sürede size dönüş yapacağız!');
    document.getElementById('contactForm').reset();
});

// Trending Cars Display
function displayTrendingCars() {
    const trendingList = document.getElementById('trendingCars');
    const trendingCars = cars.filter(car => car.trending);

    if (trendingList) {
        trendingList.innerHTML = '';
        trendingCars.slice(0, 4).forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'car-card';
            const isFavorite = favorites.includes(car.id);
            carCard.innerHTML = `
                <div class="car-image" style="position: relative;">
                    <img src="${car.image}" alt="${car.brand} ${car.model}" style="width: 100%; height: 220px; object-fit: cover; border-radius: 16px 16px 0 0;">
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(${car.id})">
                        ${isFavorite ? '❤️' : '🤍'}
                    </button>
                </div>
                <div class="car-info">
                    <div class="car-title">${car.brand} ${car.model}</div>
                    <div class="car-details">
                        <span>📅 ${car.year} | 🚗 ${car.km.toLocaleString()} km</span>
                        <span>⛽ ${car.fuel} | 🔧 ${car.transmission}</span>
                        <span>👁️ ${car.views} görüntülenme</span>
                    </div>
                    <div class="car-price">₺${car.price.toLocaleString('tr-TR')}</div>
                    <div class="car-seller">${car.seller}</div>
                    <div class="car-buttons">
                        <button class="btn-primary" onclick="viewCarDetail(${car.id})">Detaylar</button>
                        <button class="btn-secondary" onclick="contactSeller('${car.seller}', '${car.sellerPhone}')">İletişim</button>
                    </div>
                </div>
            `;
            trendingList.appendChild(carCard);
        });
    }
}

// Favorites Management
function toggleFavorite(carId) {
    const index = favorites.indexOf(carId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(carId);
    }
    localStorage.setItem('murocarFavorites', JSON.stringify(favorites));
    displayCars(cars);
    displayTrendingCars();
    displayFavorites();
}

// Display Favorites
function displayFavorites() {
    const favoritesList = document.getElementById('favoritesList');
    if (!favoritesList) return;

    const favoriteCars = cars.filter(car => favorites.includes(car.id));

    favoritesList.innerHTML = '';

    if (favoriteCars.length === 0) {
        favoritesList.innerHTML = '<p class="empty-message" style="grid-column: 1/-1;">Henüz favori eklemediniz. Araçları favorilerinize eklemek için ❤️ butonuna tıklayın.</p>';
        return;
    }

    favoriteCars.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <div class="car-image" style="position: relative;">
                <img src="${car.image}" alt="${car.brand} ${car.model}" style="width: 100%; height: 220px; object-fit: cover; border-radius: 16px 16px 0 0;">
                <button class="favorite-btn active" onclick="toggleFavorite(${car.id})">
                    ❤️
                </button>
            </div>
            <div class="car-info">
                <div class="car-title">${car.brand} ${car.model}</div>
                <div class="car-details">
                    <span>📅 ${car.year} | 🚗 ${car.km.toLocaleString()} km</span>
                    <span>⛽ ${car.fuel} | 🔧 ${car.transmission}</span>
                    <span>🎨 ${car.color}</span>
                </div>
                <div class="car-price">₺${car.price.toLocaleString('tr-TR')}</div>
                <div class="car-seller">${car.seller}</div>
                <div class="car-buttons">
                    <button class="btn-primary" onclick="viewCarDetail(${car.id})">Detaylar</button>
                    <button class="btn-secondary" onclick="contactSeller('${car.seller}', '${car.sellerPhone}')">İletişim</button>
                </div>
            </div>
        `;
        favoritesList.appendChild(carCard);
    });
}

// Newsletter subscription
document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    alert(`${email} adresiniz başarıyla abone listesine eklendi! 🎉`);
    e.target.reset();
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const adminModal = document.getElementById('adminModal');
    const carDetailModal = document.getElementById('carDetailModal');

    if (e.target === adminModal) {
        adminModal.style.display = 'none';
    }

    if (e.target === carDetailModal) {
        carDetailModal.style.display = 'none';
    }
});

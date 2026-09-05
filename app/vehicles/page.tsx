'use client';

import { useEffect, useState } from 'react';

interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  description: string;
}

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/vehicles');
      if (!response.ok) throw new Error('Araçlar yüklenemedi');
      const data = await response.json();
      setVehicles(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Bir hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2 style={{ marginBottom: '2rem' }}>Araç Envanteri</h2>

      {error && (
        <div style={{
          padding: '1rem',
          backgroundColor: '#f8d7da',
          color: '#721c24',
          borderRadius: '5px',
          marginBottom: '2rem'
        }}>
          ⚠️ {error}
        </div>
      )}

      {loading ? (
        <p style={{ textAlign: 'center', padding: '2rem' }}>Araçlar yükleniyor...</p>
      ) : vehicles.length === 0 ? (
        <p style={{ textAlign: 'center', padding: '2rem' }}>Şu anda araç bulunmamaktadır.</p>
      ) : (
        <div className="vehicles-grid">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="vehicle-card">
              <div className="vehicle-image">🚗</div>
              <div className="vehicle-content">
                <h3>{vehicle.brand} {vehicle.model}</h3>
                <p className="vehicle-price">₺{vehicle.price.toLocaleString('tr-TR')}</p>
                <p><strong>Yıl:</strong> {vehicle.year}</p>
                <p>{vehicle.description}</p>
                <button className="btn btn-primary" style={{ width: '100%' }}>
                  Detayları Gör
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

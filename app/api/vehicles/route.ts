import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const mockVehicles = [
      {
        id: 1,
        brand: 'Toyota',
        model: 'Corolla',
        year: 2022,
        price: 450000,
        description: 'Çok temiz, düşük km araç',
        created_at: new Date().toISOString()
      },
      {
        id: 2,
        brand: 'Honda',
        model: 'Civic',
        year: 2021,
        price: 520000,
        description: 'Full donanımlı, garaj araçı',
        created_at: new Date().toISOString()
      },
      {
        id: 3,
        brand: 'BMW',
        model: '320i',
        year: 2020,
        price: 650000,
        description: 'Konforlu, ekonomik araç',
        created_at: new Date().toISOString()
      },
      {
        id: 4,
        brand: 'Mercedes',
        model: 'A180',
        year: 2019,
        price: 550000,
        description: 'Lüks ve güvenli',
        created_at: new Date().toISOString()
      }
    ];
    return NextResponse.json(mockVehicles);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch vehicles' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { brand, model, year, price, description } = body;

    const result = await query(
      'INSERT INTO vehicles (brand, model, year, price, description, created_at) VALUES (?, ?, ?, ?, ?, NOW())',
      [brand, model, year, price, description]
    );

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Error creating vehicle:', error);
    return NextResponse.json(
      { error: 'Failed to create vehicle' },
      { status: 500 }
    );
  }
}

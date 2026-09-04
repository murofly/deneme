import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/app/services/db';

export async function GET(request: NextRequest) {
  try {
    const results = await query('SELECT * FROM vehicles LIMIT 20');
    return NextResponse.json(results);
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

import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  port: parseInt(process.env.MYSQL_PORT || '3306'),
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'muro_otomotiv',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function query(sql: string, values?: any[]) {
  try {
    const connection = await pool.getConnection();
    const [results] = await connection.execute(sql, values || []);
    connection.release();
    return results;
  } catch (error) {
    console.error('Database error:', error);
    throw error;
  }
}

export default pool;

import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') || '*',
  credentials: true
}));
app.use(express.json());

// Health check (Railway uses this to check if app is running)
app.get('/', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    message: 'Christian Platform API is running',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'healthy' });
});

// Test route
app.get('/api/test', (req: Request, res: Response) => {
  res.json({ message: 'API is working!' });
});

// Database connection test
app.get('/test-db', async (req: Request, res: Response) => {
  try {
    // Check if DATABASE_URL exists
    if (!process.env.DATABASE_URL) {
      return res.status(500).json({
        status: 'error',
        message: 'DATABASE_URL not configured',
        hint: 'Add DATABASE_URL in Railway Variables'
      });
    }

    // Try to connect to MongoDB
    const { MongoClient } = require('mongodb');
    const client = new MongoClient(process.env.DATABASE_URL);

    console.log('Attempting to connect to MongoDB...');
    await client.connect();
    console.log('✅ MongoDB connected successfully!');

    // Ping the database
    await client.db().admin().ping();
    console.log('✅ MongoDB ping successful!');

    await client.close();
    console.log('✅ MongoDB connection closed');

    res.json({
      status: 'success',
      message: 'MongoDB Atlas connection successful!',
      database: 'Connected',
      timestamp: new Date().toISOString()
    });

  } catch (error: any) {
    console.error('❌ Database connection error:', error);

    res.status(500).json({
      status: 'error',
      message: 'Database connection failed',
      error: error.message,
      possibleCauses: [
        'MongoDB Atlas Network Access not configured',
        'Wrong DATABASE_URL',
        'Wrong password in connection string',
        'Database cluster is paused or deleted'
      ]
    });
  }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

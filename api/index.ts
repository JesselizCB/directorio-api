/**
 * Vercel Serverless Function Handler
 * Este archivo es el entry point para Vercel
 */
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import divisionsRouter from '../src/routes/divisions';

const app = express();

// ============ MIDDLEWARE ============

/**
 * CORS - Habilitar peticiones desde el frontend Angular
 * Permite localhost para desarrollo y dominios de producción
 */
const allowedOrigins = [
  'http://localhost:4200',
  'http://localhost:4200/',
  process.env.FRONTEND_URL, // URL del frontend en producción
  /\.vercel\.app$/ // Permite cualquier subdominio de vercel.app
];

app.use(cors({
  origin: (origin, callback) => {
    // Permitir requests sin origin (como mobile apps, Postman, curl)
    if (!origin) return callback(null, true);
    
    // Verificar si el origin está en la lista permitida
    const isAllowed = allowedOrigins.some(allowedOrigin => {
      if (typeof allowedOrigin === 'string') {
        return origin === allowedOrigin;
      }
      if (allowedOrigin instanceof RegExp) {
        return allowedOrigin.test(origin);
      }
      return false;
    });
    
    if (isAllowed) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

/**
 * Parser JSON
 */
app.use(express.json());

/**
 * Logger - Registra todas las peticiones en consola
 */
app.use((req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// ============ RUTAS ============

/**
 * Ruta raíz - Información de la API
 */
app.get('/', (req: Request, res: Response) => {
  res.json({
    name: 'API REST - Directorio Organizacional',
    version: '1.0.0',
    description: 'API para gestión de divisiones organizacionales con TypeScript',
    endpoints: {
      divisions: {
        getAll: 'GET /api/divisions',
        getById: 'GET /api/divisions/:id',
        searchByName: 'GET /api/divisions/search/:name (opcional)'
      }
    },
    status: 'online',
    environment: process.env.NODE_ENV || 'development'
  });
});

/**
 * Rutas de divisiones
 */
app.use('/api/divisions', divisionsRouter);

/**
 * 404 - Ruta no encontrada
 */
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: `Ruta no encontrada: ${req.method} ${req.url}`,
    availableEndpoints: [
      'GET /',
      'GET /api/divisions',
      'GET /api/divisions/:id',
      'GET /api/divisions/search/:name'
    ]
  });
});

/**
 * Manejo global de errores
 */
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err);
  
  res.status(500).json({
    success: false,
    message: err.message || 'Error interno del servidor',
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

export default app;

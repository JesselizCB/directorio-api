/**
 * Rutas para el manejo de divisiones
 */
import express, { Request, Response, NextFunction } from 'express';
import { divisions } from '../data/divisions';
import type { ApiResponse } from '../types/division';

const router = express.Router();

/**
 * Simula delay de red (300-500ms) para hacer más realista
 */
const simulateDelay = (): Promise<void> => {
  const delay = Math.floor(Math.random() * 200) + 300; // 300-500ms
  return new Promise(resolve => setTimeout(resolve, delay));
};

/**
 * GET /api/divisions
 * Obtener todas las divisiones
 */
router.get('/', async (req: Request, res: Response) => {
  try {
    // Simular delay de red
    await simulateDelay();

    const response: ApiResponse = {
      success: true,
      data: divisions,
      total: divisions.length
    };

    res.json(response);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    res.status(500).json({
      success: false,
      message: 'Error al obtener las divisiones',
      error: errorMessage
    });
  }
});

/**
 * GET /api/divisions/search/:name
 * Buscar divisiones por nombre (opcional)
 * Nota: El frontend hace el filtrado localmente, este endpoint es opcional
 */
router.get('/search/:name', async (req: Request, res: Response) => {
  try {
    // Simular delay de red
    await simulateDelay();

    const searchTerm = req.params.name.toLowerCase();
    
    const filteredDivisions = divisions.filter(division => 
      division.division.toLowerCase().includes(searchTerm)
    );

    const response: ApiResponse = {
      success: true,
      data: filteredDivisions,
      total: filteredDivisions.length
    };

    res.json(response);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    res.status(500).json({
      success: false,
      message: 'Error al buscar divisiones',
      error: errorMessage
    });
  }
});

/**
 * GET /api/divisions/:id
 * Obtener una división específica por ID
 */
router.get('/:id', async (req: Request, res: Response) => {
  try {
    // Simular delay de red
    await simulateDelay();

    const divisionId = parseInt(req.params.id);
    
    if (isNaN(divisionId)) {
      return res.status(400).json({
        success: false,
        message: 'ID inválido. Debe ser un número.'
      });
    }

    const division = divisions.find(d => d.id === divisionId);

    if (!division) {
      return res.status(404).json({
        success: false,
        message: `División con ID ${divisionId} no encontrada`
      });
    }

    const response: ApiResponse = {
      success: true,
      data: division
    };

    res.json(response);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
    res.status(500).json({
      success: false,
      message: 'Error al obtener la división',
      error: errorMessage
    });
  }
});

export default router;

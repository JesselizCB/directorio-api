/**
 * Interfaces y tipos de datos para divisiones organizacionales
 */

export interface Division {
  id: number;
  division: string;
  divisionUp: string | null;
  collaborators: number;
  nivel: number;
  subdivisions: number;
  ambassadors: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  total?: number;
  message?: string;
  error?: string;
}

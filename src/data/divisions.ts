/**
 * Mock Data - Divisiones Organizacionales
 * Registros simplificados con 5 tipos de división
 */

import type { Division } from '../types/division';

export const divisions: Division[] = [
  // ============ NIVEL 1 - CEO ============
  {
    id: 1,
    division: "CEO",
    divisionUp: null,
    collaborators: 8,
    nivel: 1,
    subdivisions: 12,
    ambassadors: "Jordyn Herwitz"
  },

  // ============ NIVEL 2 - DIRECCIÓN GENERAL ============
  {
    id: 2,
    division: "Dirección general",
    divisionUp: "CEO",
    collaborators: 15,
    nivel: 2,
    subdivisions: 8,
    ambassadors: "Carla Siphron"
  },

  // ============ NIVEL 2 - STRATEGY ============
  {
    id: 3,
    division: "Strategy",
    divisionUp: "CEO",
    collaborators: 22,
    nivel: 2,
    subdivisions: 6,
    ambassadors: "Jess Press"
  },
  {
    id: 4,
    division: "Strategy",
    divisionUp: "Dirección general",
    collaborators: 18,
    nivel: 3,
    subdivisions: 4,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 5,
    division: "Strategy",
    divisionUp: "Producto",
    collaborators: 12,
    nivel: 3,
    subdivisions: 3,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 6,
    division: "Strategy",

    divisionUp: "Operaciones",
    collaborators: 10,
    nivel: 3,
    subdivisions: 2,
    ambassadors: "Carla Siphron"
  },
  {
    id: 7,
    division: "Strategy",
    divisionUp: "Strategy",
    collaborators: 8,
    nivel: 4,
    subdivisions: 0,
    ambassadors: "Jess Press"
  },

  // ============ NIVEL 2 - PRODUCTO ============
  {
    id: 8,
    division: "Producto",
    divisionUp: "CEO",
    collaborators: 30,
    nivel: 2,
    subdivisions: 7,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 9,
    division: "Producto",
    divisionUp: "Dirección general",
    collaborators: 25,
    nivel: 3,
    subdivisions: 5,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 10,
    division: "Producto",
    divisionUp: "Strategy",
    collaborators: 15,
    nivel: 3,
    subdivisions: 4,
    ambassadors: "Carla Siphron"
  },
  {
    id: 11,
    division: "Producto",
    divisionUp: "Producto",
    collaborators: 12,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Jess Press"
  },
  {
    id: 12,
    division: "Producto",
    divisionUp: "Operaciones",
    collaborators: 14,
    nivel: 3,
    subdivisions: 3,
    ambassadors: "Kierra Rosser"
  },

  // ============ NIVEL 2 - OPERACIONES ============
  {
    id: 13,
    division: "Operaciones",
    divisionUp: "CEO",
    collaborators: 28,
    nivel: 2,
    subdivisions: 6,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 14,
    division: "Operaciones",
    divisionUp: "Dirección general",
    collaborators: 20,
    nivel: 3,
    subdivisions: 5,
    ambassadors: "Carla Siphron"
  },
  {
    id: 15,
    division: "Operaciones",
    divisionUp: "Strategy",
    collaborators: 16,
    nivel: 3,
    subdivisions: 3,
    ambassadors: "Jess Press"
  },
  {
    id: 16,
    division: "Operaciones",
    divisionUp: "Producto",
    collaborators: 13,
    nivel: 3,
    subdivisions: 4,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 17,
    division: "Operaciones",
    divisionUp: "Operaciones",
    collaborators: 11,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Jordyn Herwitz"
  },

  // ============ NIVEL 3 - DIRECCIÓN GENERAL ============
  {
    id: 18,
    division: "Dirección general",
    divisionUp: "Strategy",
    collaborators: 10,
    nivel: 3,
    subdivisions: 2,
    ambassadors: "Carla Siphron"
  },
  {
    id: 19,
    division: "Dirección general",
    divisionUp: "Producto",
    collaborators: 12,
    nivel: 3,
    subdivisions: 3,
    ambassadors: "Jess Press"
  },
  {
    id: 20,
    division: "Dirección general",
    divisionUp: "Operaciones",
    collaborators: 9,
    nivel: 3,
    subdivisions: 2,
    ambassadors: "Kierra Rosser"
  },

  // ============ NIVEL 4 - CEO ============
  {
    id: 21,
    division: "CEO",
    divisionUp: "Strategy",
    collaborators: 5,
    nivel: 4,
    subdivisions: 1,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 22,
    division: "CEO",
    divisionUp: "Producto",
    collaborators: 6,
    nivel: 4,
    subdivisions: 1,
    ambassadors: "Carla Siphron"
  },
  {
    id: 23,
    division: "CEO",
    divisionUp: "Operaciones",
    collaborators: 4,
    nivel: 4,
    subdivisions: 1,
    ambassadors: "Jess Press"
  },

  // ============ MÁS REGISTROS ============
  {
    id: 24,
    division: "Strategy",
    divisionUp: "CEO",
    collaborators: 19,
    nivel: 2,
    subdivisions: 4,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 25,
    division: "Producto",
    divisionUp: "CEO",
    collaborators: 22,
    nivel: 2,
    subdivisions: 5,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 26,
    division: "Operaciones",
    divisionUp: "CEO",
    collaborators: 18,
    nivel: 2,
    subdivisions: 4,
    ambassadors: "Carla Siphron"
  },
  {
    id: 27,
    division: "Dirección general",
    divisionUp: "CEO",
    collaborators: 16,
    nivel: 2,
    subdivisions: 5,
    ambassadors: "Jess Press"
  },
  {
    id: 28,
    division: "Strategy",
    divisionUp: "Dirección general",
    collaborators: 14,
    nivel: 3,
    subdivisions: 3,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 29,
    division: "Producto",
    divisionUp: "Dirección general",
    collaborators: 17,
    nivel: 3,
    subdivisions: 4,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 30,
    division: "Operaciones",
    divisionUp: "Dirección general",
    collaborators: 15,
    nivel: 3,
    subdivisions: 3,
    ambassadors: "Carla Siphron"
  },
  {
    id: 31,
    division: "CEO",
    divisionUp: "Dirección general",
    collaborators: 7,
    nivel: 3,
    subdivisions: 2,
    ambassadors: ""
  },
  {
    id: 32,
    division: "Strategy",
    divisionUp: "Strategy",
    collaborators: 11,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Jess Press"
  },
  {
    id: 33,
    division: "Producto",
    divisionUp: "Strategy",
    collaborators: 13,
    nivel: 3,
    subdivisions: 3,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 34,
    division: "Operaciones",
    divisionUp: "Strategy",
    collaborators: 10,
    nivel: 3,
    subdivisions: 2,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 35,
    division: "Dirección general",
    divisionUp: "Strategy",
    collaborators: 8,
    nivel: 4,
    subdivisions: 1,
    ambassadors: "Carla Siphron"
  },
  {
    id: 36,
    division: "Strategy",
    divisionUp: "Producto",
    collaborators: 9,
    nivel: 3,
    subdivisions: 2,
    ambassadors: "Jess Press"
  },
  {
    id: 37,
    division: "Producto",
    divisionUp: "Producto",
    collaborators: 14,
    nivel: 4,
    subdivisions: 3,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 38,
    division: "Operaciones",
    divisionUp: "Producto",
    collaborators: 12,
    nivel: 3,
    subdivisions: 2,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 39,
    division: "Dirección general",
    divisionUp: "Producto",
    collaborators: 10,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Carla Siphron"
  },
  {
    id: 40,
    division: "CEO",
    divisionUp: "Producto",
    collaborators: 5,
    nivel: 4,
    subdivisions: 1,
    ambassadors: ""
  },
  {
    id: 41,
    division: "Strategy",
    divisionUp: "Operaciones",
    collaborators: 11,
    nivel: 3,
    subdivisions: 2,
    ambassadors: "Jess Press"
  },
  {
    id: 42,
    division: "Producto",
    divisionUp: "Operaciones",
    collaborators: 15,
    nivel: 3,
    subdivisions: 3,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 43,
    division: "Operaciones",
    divisionUp: "Operaciones",
    collaborators: 13,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 44,
    division: "Dirección general",
    divisionUp: "Operaciones",
    collaborators: 9,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Carla Siphron"
  },
  {
    id: 45,
    division: "CEO",
    divisionUp: "Operaciones",
    collaborators: 6,
    nivel: 4,
    subdivisions: 1,
    ambassadors: "Jess Press"
  },
  {
    id: 46,
    division: "Strategy",
    divisionUp: "CEO",
    collaborators: 20,
    nivel: 2,
    subdivisions: 4,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 47,
    division: "Producto",
    divisionUp: "CEO",
    collaborators: 24,
    nivel: 2,
    subdivisions: 5,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 48,
    division: "Operaciones",
    divisionUp: "CEO",
    collaborators: 21,
    nivel: 2,
    subdivisions: 4,
    ambassadors: "Carla Siphron"
  },
  {
    id: 49,
    division: "Dirección general",
    divisionUp: "CEO",
    collaborators: 17,
    nivel: 2,
    subdivisions: 5,
    ambassadors: "Jess Press"
  },
  {
    id: 50,
    division: "Strategy",
    divisionUp: "Dirección general",
    collaborators: 15,
    nivel: 3,
    subdivisions: 3,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 51,
    division: "Producto",
    divisionUp: "Dirección general",
    collaborators: 13,
    nivel: 3,
    subdivisions: 3,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 52,
    division: "Operaciones",
    divisionUp: "Dirección general",
    collaborators: 11,
    nivel: 3,
    subdivisions: 2,
    ambassadors: "Carla Siphron"
  },
  {
    id: 53,
    division: "CEO",
    divisionUp: "Dirección general",
    collaborators: 8,
    nivel: 3,
    subdivisions: 2,
    ambassadors: "Jess Press"
  },
  {
    id: 54,
    division: "Strategy",
    divisionUp: "Strategy",
    collaborators: 10,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 55,
    division: "Producto",
    divisionUp: "Strategy",
    collaborators: 12,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 56,
    division: "Operaciones",
    divisionUp: "Strategy",
    collaborators: 9,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Carla Siphron"
  },
  {
    id: 57,
    division: "Dirección general",
    divisionUp: "Strategy",
    collaborators: 7,
    nivel: 4,
    subdivisions: 1,
    ambassadors: "Jess Press"
  },
  {
    id: 58,
    division: "CEO",
    divisionUp: "Strategy",
    collaborators: 6,
    nivel: 4,
    subdivisions: 1,
    ambassadors: ""
  },
  {
    id: 59,
    division: "Strategy",
    divisionUp: "Producto",
    collaborators: 11,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 60,
    division: "Producto",
    divisionUp: "Producto",
    collaborators: 14,
    nivel: 4,
    subdivisions: 3,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 61,
    division: "Operaciones",
    divisionUp: "Producto",
    collaborators: 10,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Carla Siphron"
  },
  {
    id: 62,
    division: "Dirección general",
    divisionUp: "Producto",
    collaborators: 8,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Jess Press"
  },
  {
    id: 63,
    division: "CEO",
    divisionUp: "Producto",
    collaborators: 5,
    nivel: 4,
    subdivisions: 1,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 64,
    division: "Strategy",
    divisionUp: "Operaciones",
    collaborators: 10,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 65,
    division: "Producto",
    divisionUp: "Operaciones",
    collaborators: 13,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Carla Siphron"
  },
  {
    id: 66,
    division: "Operaciones",
    divisionUp: "Operaciones",
    collaborators: 11,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Jess Press"
  },
  {
    id: 67,
    division: "Dirección general",
    divisionUp: "Operaciones",
    collaborators: 8,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 68,
    division: "CEO",
    divisionUp: "Operaciones",
    collaborators: 6,
    nivel: 4,
    subdivisions: 1,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 69,
    division: "Strategy",
    divisionUp: "CEO",
    collaborators: 17,
    nivel: 2,
    subdivisions: 4,
    ambassadors: "Carla Siphron"
  },
  {
    id: 70,
    division: "Producto",
    divisionUp: "CEO",
    collaborators: 21,
    nivel: 2,
    subdivisions: 5,
    ambassadors: "Jess Press"
  },
  {
    id: 71,
    division: "Operaciones",
    divisionUp: "CEO",
    collaborators: 19,
    nivel: 2,
    subdivisions: 4,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 72,
    division: "Dirección general",
    divisionUp: "CEO",
    collaborators: 15,
    nivel: 2,
    subdivisions: 3,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 73,
    division: "Strategy",
    divisionUp: "Dirección general",
    collaborators: 13,
    nivel: 3,
    subdivisions: 3,
    ambassadors: "Carla Siphron"
  },
  {
    id: 74,
    division: "Producto",
    divisionUp: "Dirección general",
    collaborators: 16,
    nivel: 3,
    subdivisions: 4,
    ambassadors: "Jess Press"
  },
  {
    id: 75,
    division: "Operaciones",
    divisionUp: "Dirección general",
    collaborators: 14,
    nivel: 3,
    subdivisions: 3,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 76,
    division: "CEO",
    divisionUp: "Dirección general",
    collaborators: 7,
    nivel: 3,
    subdivisions: 2,
    ambassadors: ""
  },
  {
    id: 77,
    division: "Strategy",
    divisionUp: "Strategy",
    collaborators: 9,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 78,
    division: "Producto",
    divisionUp: "Strategy",
    collaborators: 11,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Carla Siphron"
  },
  {
    id: 79,
    division: "Operaciones",
    divisionUp: "Strategy",
    collaborators: 10,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Jess Press"
  },
  {
    id: 80,
    division: "Dirección general",
    divisionUp: "Strategy",
    collaborators: 8,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 81,
    division: "CEO",
    divisionUp: "Strategy",
    collaborators: 5,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 82,
    division: "Strategy",
    divisionUp: "Producto",
    collaborators: 10,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Carla Siphron"
  },
  {
    id: 83,
    division: "Producto",
    divisionUp: "Producto",
    collaborators: 13,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Jess Press"
  },
  {
    id: 84,
    division: "Operaciones",
    divisionUp: "Producto",
    collaborators: 11,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 85,
    division: "Dirección general",
    divisionUp: "Producto",
    collaborators: 9,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 86,
    division: "CEO",
    divisionUp: "Producto",
    collaborators: 6,
    nivel: 5,
    subdivisions: 0,
    ambassadors: ""
  },
  {
    id: 87,
    division: "Strategy",
    divisionUp: "Operaciones",
    collaborators: 9,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Carla Siphron"
  },
  {
    id: 88,
    division: "Producto",
    divisionUp: "Operaciones",
    collaborators: 12,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Jess Press"
  },
  {
    id: 89,
    division: "Operaciones",
    divisionUp: "Operaciones",
    collaborators: 10,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 90,
    division: "Dirección general",
    divisionUp: "Operaciones",
    collaborators: 7,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 91,
    division: "CEO",
    divisionUp: "Operaciones",
    collaborators: 5,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Carla Siphron"
  },
  {
    id: 92,
    division: "Strategy",
    divisionUp: "CEO",
    collaborators: 18,
    nivel: 2,
    subdivisions: 4,
    ambassadors: "Jess Press"
  },
  {
    id: 93,
    division: "Producto",
    divisionUp: "CEO",
    collaborators: 23,
    nivel: 2,
    subdivisions: 5,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 94,
    division: "Operaciones",
    divisionUp: "CEO",
    collaborators: 20,
    nivel: 2,
    subdivisions: 4,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 95,
    division: "Dirección general",
    divisionUp: "CEO",
    collaborators: 16,
    nivel: 2,
    subdivisions: 4,
    ambassadors: "Carla Siphron"
  },
  {
    id: 96,
    division: "Strategy",
    divisionUp: "Dirección general",
    collaborators: 14,
    nivel: 3,
    subdivisions: 3,
    ambassadors: "Jess Press"
  },
  {
    id: 97,
    division: "Producto",
    divisionUp: "Dirección general",
    collaborators: 17,
    nivel: 3,
    subdivisions: 4,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 98,
    division: "Operaciones",
    divisionUp: "Dirección general",
    collaborators: 15,
    nivel: 3,
    subdivisions: 3,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 99,
    division: "CEO",
    divisionUp: "Dirección general",
    collaborators: 8,
    nivel: 3,
    subdivisions: 2,
    ambassadors: "Carla Siphron"
  },
  {
    id: 100,
    division: "Strategy",
    divisionUp: "Strategy",
    collaborators: 11,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Jess Press"
  },
  {
    id: 101,
    division: "Producto",
    divisionUp: "Strategy",
    collaborators: 13,
    nivel: 4,
    subdivisions: 3,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 102,
    division: "Operaciones",
    divisionUp: "Strategy",
    collaborators: 10,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 103,
    division: "Dirección general",
    divisionUp: "Strategy",
    collaborators: 7,
    nivel: 5,
    subdivisions: 0,
    ambassadors: ""
  },
  {
    id: 104,
    division: "CEO",
    divisionUp: "Strategy",
    collaborators: 4,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Carla Siphron"
  },
  {
    id: 105,
    division: "Strategy",
    divisionUp: "Producto",
    collaborators: 12,
    nivel: 4,
    subdivisions: 3,
    ambassadors: "Jess Press"
  },
  {
    id: 106,
    division: "Producto",
    divisionUp: "Producto",
    collaborators: 15,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 107,
    division: "Operaciones",
    divisionUp: "Producto",
    collaborators: 12,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 108,
    division: "Dirección general",
    divisionUp: "Producto",
    collaborators: 10,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Carla Siphron"
  },
  {
    id: 109,
    division: "CEO",
    divisionUp: "Producto",
    collaborators: 7,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Jess Press"
  },
  {
    id: 110,
    division: "Strategy",
    divisionUp: "Operaciones",
    collaborators: 10,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 111,
    division: "Producto",
    divisionUp: "Operaciones",
    collaborators: 14,
    nivel: 4,
    subdivisions: 3,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 112,
    division: "Operaciones",
    divisionUp: "Operaciones",
    collaborators: 12,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Carla Siphron"
  },
  {
    id: 113,
    division: "Dirección general",
    divisionUp: "Operaciones",
    collaborators: 9,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Jess Press"
  },
  {
    id: 114,
    division: "CEO",
    divisionUp: "Operaciones",
    collaborators: 6,
    nivel: 5,
    subdivisions: 0,
    ambassadors: ""
  },
  {
    id: 115,
    division: "Strategy",
    divisionUp: "CEO",
    collaborators: 19,
    nivel: 2,
    subdivisions: 4,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 116,
    division: "Producto",
    divisionUp: "CEO",
    collaborators: 22,
    nivel: 2,
    subdivisions: 5,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 117,
    division: "Operaciones",
    divisionUp: "CEO",
    collaborators: 20,
    nivel: 2,
    subdivisions: 4,
    ambassadors: "Carla Siphron"
  },
  {
    id: 118,
    division: "Dirección general",
    divisionUp: "CEO",
    collaborators: 17,
    nivel: 2,
    subdivisions: 4,
    ambassadors: "Jess Press"
  },
  {
    id: 119,
    division: "Strategy",
    divisionUp: "Dirección general",
    collaborators: 15,
    nivel: 3,
    subdivisions: 3,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 120,
    division: "Producto",
    divisionUp: "Dirección general",
    collaborators: 18,
    nivel: 3,
    subdivisions: 4,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 121,
    division: "Operaciones",
    divisionUp: "Dirección general",
    collaborators: 16,
    nivel: 3,
    subdivisions: 3,
    ambassadors: "Carla Siphron"
  },
  {
    id: 122,
    division: "CEO",
    divisionUp: "Dirección general",
    collaborators: 9,
    nivel: 3,
    subdivisions: 2,
    ambassadors: "Jess Press"
  },
  {
    id: 123,
    division: "Strategy",
    divisionUp: "Strategy",
    collaborators: 12,
    nivel: 4,
    subdivisions: 2,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 124,
    division: "Producto",
    divisionUp: "Strategy",
    collaborators: 14,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 125,
    division: "Operaciones",
    divisionUp: "Strategy",
    collaborators: 11,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Carla Siphron"
  },
  {
    id: 126,
    division: "Dirección general",
    divisionUp: "Strategy",
    collaborators: 8,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Jess Press"
  },
  {
    id: 127,
    division: "CEO",
    divisionUp: "Strategy",
    collaborators: 6,
    nivel: 5,
    subdivisions: 0,
    ambassadors: ""
  },
  {
    id: 128,
    division: "Strategy",
    divisionUp: "Producto",
    collaborators: 13,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 129,
    division: "Producto",
    divisionUp: "Producto",
    collaborators: 16,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 130,
    division: "Operaciones",
    divisionUp: "Producto",
    collaborators: 13,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Carla Siphron"
  },
  {
    id: 131,
    division: "Dirección general",
    divisionUp: "Producto",
    collaborators: 11,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Jess Press"
  },
  {
    id: 132,
    division: "CEO",
    divisionUp: "Producto",
    collaborators: 8,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Kierra Rosser"
  },
  {
    id: 133,
    division: "Strategy",
    divisionUp: "Operaciones",
    collaborators: 11,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Jordyn Herwitz"
  },
  {
    id: 134,
    division: "Producto",
    divisionUp: "Operaciones",
    collaborators: 15,
    nivel: 5,
    subdivisions: 0,
    ambassadors: "Carla Siphron"
  },
  {
    id: 135,
    division: "Operaciones",
    divisionUp: "Operaciones",
    collaborators: 13,
    nivel: 5,
    subdivisions: 0,
    ambassadors: ""
  }
];



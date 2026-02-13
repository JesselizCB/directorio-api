# API REST - Directorio Organizacional

API REST desarrollada con **Node.js**, **Express** y **TypeScript** para gestionar divisiones organizacionales. Proporciona datos mock (~135 registros) con estructura jerárquica de 5 niveles para consumo desde aplicaciones frontend (Angular, React, Vue, etc.).

---

## 🚀 Características

- ✅ **Express.js** como framework web
- ✅ **TypeScript** para type safety y mejor DX
- ✅ **ES Modules** (import/export)
- ✅ **CORS habilitado** para `http://localhost:4200`
- ✅ **135 registros mock** con datos coherentes
- ✅ **Estructura jerárquica** de 5 niveles
- ✅ **Delay simulado** de 300-500ms (simula latencia real)
- ✅ **Logger middleware** para todas las peticiones
- ✅ **Manejo de errores** global con tipado
- ✅ **Auto-reload** en desarrollo con `tsx watch`
- ✅ **Compilación TypeScript** a JavaScript

---

## 📋 Requisitos Previos

- **Node.js** v14.0.0 o superior (recomendado v18+)
- **npm** v6.0.0 o superior

Verificar versiones instaladas:
```bash
node --version
npm --version
```

---

## 📦 Instalación

### 1. Clonar o descargar el proyecto

```bash
cd directorio-api
```

### 2. Instalar dependencias

```bash
npm install
```

Esto instalará:

**Dependencias de producción:**
- `express` (v4.18.2) - Framework web
- `cors` (v2.8.5) - Middleware para CORS

**Dependencias de desarrollo:**
- `typescript` (v5.3.3) - Compilador TypeScript
- `tsx` (v4.7.0) - TypeScript ejecutor para desarrollo
- `@types/express` - Tipos para Express
- `@types/cors` - Tipos para CORS
- `@types/node` - Tipos para Node.js

---

## ⚙️ Uso

### Modo Desarrollo (Recomendado)

```bash
npm run dev
```

Inicia el servidor con hot-reload en `http://localhost:3000`. Los cambios en archivos `.ts` reiniciarán automáticamente el servidor.

### Compilar TypeScript

```bash
npm run build
```

Compila los archivos TypeScript de `src/` a JavaScript en `dist/`.

### Modo Producción

```bash
npm run build
npm start
```

Primero compila y luego ejecuta el servidor desde los archivos compilados.

### Puerto Personalizado

```bash
PORT=5000 npm run dev
```

---

## 🌐 Endpoints Disponibles

### 1. Información de la API

**GET** `/`

Retorna información general sobre la API y los endpoints disponibles.

**Ejemplo:**
```bash
curl http://localhost:3000/
```

**Respuesta:**
```json
{
  "name": "API REST - Directorio Organizacional",
  "version": "1.0.0",
  "description": "API para gestión de divisiones organizacionales",
  "endpoints": {
    "divisions": {
      "getAll": "GET /api/divisions",
      "getById": "GET /api/divisions/:id",
      "searchByName": "GET /api/divisions/search/:name (opcional)"
    }
  },
  "status": "online"
}
```

---

### 2. Obtener todas las divisiones

**GET** `/api/divisions`

Retorna el array completo de 135 divisiones.

**Ejemplo:**
```bash
curl http://localhost:3000/api/divisions
```

**Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "division": "Dirección General",
      "divisionUp": null,
      "collaborators": 8,
      "nivel": 1,
      "subdivisions": 6,
      "ambassadors": "Carlos Mendoza"
    },
    {
      "id": 2,
      "division": "Tecnología",
      "divisionUp": "Dirección General",
      "collaborators": 45,
      "nivel": 2,
      "subdivisions": 6,
      "ambassadors": "Ana García"
    }
    // ... 133 registros más
  ],
  "total": 135
}
```

---

### 3. Obtener división por ID

**GET** `/api/divisions/:id`

Obtiene una división específica por su ID.

**Parámetros:**
- `id` (number) - ID de la división

**Ejemplo:**
```bash
curl http://localhost:3000/api/divisions/1
```

**Respuesta exitosa (200):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "division": "Dirección General",
    "divisionUp": null,
    "collaborators": 8,
    "nivel": 1,
    "subdivisions": 6,
    "ambassadors": "Carlos Mendoza"
  }
}
```

**Respuesta error (404):**
```json
{
  "success": false,
  "message": "División con ID 999 no encontrada"
}
```

---

### 4. Buscar divisiones por nombre (Opcional)

**GET** `/api/divisions/search/:name`

Busca divisiones cuyo nombre contenga el término especificado (case-insensitive).

**Parámetros:**
- `name` (string) - Término de búsqueda

**Ejemplo:**
```bash
curl http://localhost:3000/api/divisions/search/tecnologia
```

**Respuesta:**
```json
{
  "success": true,
  "data": [
    {
      "id": 2,
      "division": "Tecnología",
      "divisionUp": "Dirección General",
      "collaborators": 45,
      "nivel": 2,
      "subdivisions": 6,
      "ambassadors": "Ana García"
    }
  ],
  "total": 1
}
```

**Nota:** Este endpoint es opcional. El frontend Angular realiza el filtrado localmente por performance.

---

## 📊 Estructura de Datos

### Interface Division (TypeScript)

```typescript
interface Division {
  id: number;                    // ID único (1-135)
  division: string;              // Nombre de la división
  divisionUp: string | null;     // División superior (null si es nivel 1)
  collaborators: number;         // Número de colaboradores (1-50)
  nivel: number;                 // Nivel jerárquico (1-5)
  subdivisions: number;          // Cantidad de subdivisiones (0-6)
  ambassadors: string;           // Nombre del embajador/responsable
}
```

### Datos Mock Utilizados

**Divisiones principales:**
- CEO
- Strategy
- Growth
- Producto
- Operaciones

**División Superior:**
- Dirección general
- Producto
- Operaciones

**Embajadores:**
- Jordyn Herwitz
- Carla Siphron
- Terry Press
- Kierra Rosser
- (vacío)

### Jerarquía de Datos

```
Nivel 1 (1 registro)
  └── CEO
      │
      ├── Nivel 2 (4 registros)
      │   ├── Strategy
      │   ├── Growth
      │   ├── Producto
      │   └── Operaciones
      │       │
      │       ├── Nivel 3 (~27 registros)
      │       │   ├── Strategy Planning
      │       │   ├── Growth Marketing
      │       │   ├── Producto Development
      │       │   ├── Operaciones Logistics
      │       │   └── ...
      │       │       │
      │       │       ├── Nivel 4 (~70 registros)
      │       │       │   ├── Strategy Planning Team A
      │       │       │   ├── Growth Marketing Digital
      │       │       │   ├── Producto Development Frontend
      │       │       │   └── ...
      │       │       │       │
      │       │       │       └── Nivel 5 (~33 registros)
      │       │       │           ├── Strategy Planning Team A1
      │       │       │           ├── Producto Development Frontend React
      │       │       │           └── ...
```

**Total:** 135 divisiones

---

## 🏗️ Estructura del Proyecto

```
directorio-api/
├── src/                       # Código fuente TypeScript
│   ├── server.ts             # Servidor Express principal
│   ├── routes/
│   │   └── divisions.ts      # Rutas de divisiones
│   ├── data/
│   │   └── divisions.ts      # Mock data (135 registros)
│   └── types/
│       └── division.ts       # Interfaces TypeScript
├── dist/                      # Código compilado (generado)
├── tsconfig.json             # Configuración TypeScript
├── package.json              # Configuración y dependencias
└── README.md                 # Este archivo
```

---

## 🔧 Testing Manual

### Con curl

```bash
# 1. Obtener todas las divisiones
curl http://localhost:3000/api/divisions

# 2. Obtener división con ID 1
curl http://localhost:3000/api/divisions/1

# 3. Buscar divisiones con "frontend"
curl http://localhost:3000/api/divisions/search/frontend

# 4. Probar error 404 (ID no existente)
curl http://localhost:3000/api/divisions/999

# 5. Probar ruta no encontrada
curl http://localhost:3000/api/no-existe
```

### Con Thunder Client / Postman

1. Importar colección con los endpoints:
   - GET `http://localhost:3000/api/divisions`
   - GET `http://localhost:3000/api/divisions/1`
   - GET `http://localhost:3000/api/divisions/search/tecnologia`

2. Verificar headers de respuesta (CORS)

---

## 🔗 Integración con Frontend Angular

### 1. Crear archivo de environments

```typescript
// src/environments/environment.development.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

### 2. Configurar HttpClient

```typescript
// app.config.ts
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    // ...
  ]
};
```

### 3. Crear servicio

```typescript
// organization.service.ts
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class OrganizationService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getDivisions(): Observable<Division[]> {
    return this.http.get<ApiResponse>(`${this.apiUrl}/divisions`)
      .pipe(
        map(response => response.data),
        catchError(this.handleError)
      );
  }
}

interface ApiResponse {
  success: boolean;
  data: Division[];
  total: number;
}
```

### 4. Ejecutar ambos proyectos

```bash
# Terminal 1 - API
cd directorio-api
npm run dev

# Terminal 2 - Frontend
cd directorio-app
ng serve
```

Navegar a `http://localhost:4200`

---

## 🛡️ CORS

El servidor permite peticiones desde:
- `http://localhost:4200` (Angular dev server)

Para agregar más orígenes, editar `server.js`:

```javascript
app.use(cors({
  origin: [
    'http://localhost:4200',
    'https://mi-app-produccion.com'
  ],
  credentials: true
}));
```

---

## ⏱️ Delay Simulado

Todas las respuestas tienen un delay simulado de **300-500ms** para:
- Simular latencia de red real
- Probar spinners/loaders en el frontend
- Detectar race conditions

Para modificar el delay, editar `routes/divisions.js`:

```javascript
const simulateDelay = () => {
  const delay = Math.floor(Math.random() * 200) + 300; // 300-500ms
  return new Promise(resolve => setTimeout(resolve, delay));
};
```

---

## 📝 Notas Importantes

1. **TypeScript**: El proyecto usa TypeScript con ES Modules. Los archivos fuente están en `src/` y se compilan a `dist/`.

2. **Mock Data**: Los datos son estáticos con nombres específicos (CEO, Strategy, Growth, Producto, Operaciones). Para persistencia real, integrar base de datos.

3. **Filtrado**: El frontend hace TODO el filtrado, ordenamiento y paginación localmente. La API solo envía el array completo.

4. **divisionUp coherente**: El campo `divisionUp` siempre hace referencia a una división existente o es `null` (nivel 1).

5. **IDs únicos**: Los IDs son secuenciales del 1 al 135.

6. **Endpoints opcionales**: El endpoint de búsqueda (`/search/:name`) es opcional ya que el frontend puede filtrar localmente.

7. **Node.js v14+**: Aunque funciona con v14, se recomienda v18+ para mejor soporte de TypeScript y ES Modules.

---

## 🚀 Próximos Pasos (Mejoras Futuras)

- [ ] Agregar endpoints POST/PUT/DELETE
- [ ] Integrar base de datos (MongoDB/PostgreSQL)
- [ ] Implementar autenticación JWT
- [ ] Agregar paginación en backend
- [ ] Implementar filtros avanzados
- [ ] Agregar validación con Zod
- [ ] Documentación con Swagger/OpenAPI
- [ ] Tests unitarios (Jest/Vitest)
- [ ] Dockerización
- [ ] CI/CD pipeline

---

## 🐛 Solución de Problemas

### Error de compilación TypeScript

```bash
# Limpiar y recompilar
rm -rf dist
npm run build
```

### El servidor no inicia

```bash
# Verificar que el puerto 3000 no esté en uso
lsof -i :3000

# Usar otro puerto
PORT=5000 npm run dev
```

### CORS Errors

Verificar que el frontend esté corriendo en `http://localhost:4200` o agregar el origen correcto en `src/server.ts`.

### Error de módulos

```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### Versión de Node.js incompatible

Si usas Node.js v14, algunas features de TypeScript pueden no funcionar. Actualiza a v18+:

```bash
# Con nvm
nvm install 18
nvm use 18
```

---

## 📚 Recursos

- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Express.js Documentation](https://expressjs.com/)
- [Node.js Docs](https://nodejs.org/)
- [CORS Package](https://www.npmjs.com/package/cors)
- [tsx - TypeScript Execute](https://github.com/esbuild-kit/tsx)

---

## 📄 Licencia

ISC

---

## 👥 Autor

Proyecto desarrollado para el **Directorio Organizacional** - Frontend Angular.

---

**Fecha**: Febrero 2026  
**Versión**: 1.0.0  
**Node.js**: v14+ (recomendado v18+)  
**TypeScript**: v5.3.3  
**Express**: v4.18.2

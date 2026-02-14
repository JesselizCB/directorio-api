# 🚀 Guía Rápida: Deploy en Vercel

## ✅ Checklist Pre-Deploy

Asegúrate de tener:
- [ ] Código compilado sin errores: `npm run build`
- [ ] Archivo `vercel.json` en el root del proyecto
- [ ] Repositorio en GitHub/GitLab/Bitbucket

## 📋 Pasos para Deploy

### Opción 1: Deploy desde Vercel Dashboard (Recomendado)

1. **Ve a [vercel.com](https://vercel.com)** e inicia sesión
2. **Click en "Add New..." → Project**
3. **Importa tu repositorio Git**
4. **Configura el proyecto:**
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
   - **Root Directory**: `./` (dejar vacío si el proyecto está en el root)

5. **Agrega Variables de Entorno:**
   - Click en **Environment Variables**
   - Agrega:
     ```
     FRONTEND_URL=https://tu-frontend.vercel.app
     NODE_ENV=production
     ```

6. **Click en "Deploy"** 🎉

### Opción 2: Deploy desde CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

## 🔧 Configurar Variables de Entorno

Después del primer deploy, agrega las variables de entorno:

```bash
# Desde CLI
vercel env add FRONTEND_URL

# O desde Dashboard: Settings → Environment Variables
```

### Variables requeridas:

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `FRONTEND_URL` | `https://tu-frontend.vercel.app` | URL de tu app Angular |
| `NODE_ENV` | `production` | Ambiente de ejecución |

## ✅ Verificar el Deploy

Después del deploy, tu API estará en: `https://tu-proyecto.vercel.app`

### Tests rápidos:

```bash
# Verificar que la API responde
curl https://tu-proyecto.vercel.app/

# Obtener divisiones
curl https://tu-proyecto.vercel.app/api/divisions

# Verificar CORS (desde tu frontend)
# Debería funcionar sin errores
```

## 🐛 Solución de Problemas

### Error: "Not allowed by CORS"

**Causa**: El frontend no está en la lista de orígenes permitidos

**Solución**:
1. Ve a Vercel Dashboard → tu proyecto → Settings → Environment Variables
2. Verifica que `FRONTEND_URL` esté configurada correctamente
3. Asegúrate de incluir el protocolo: `https://` no solo el dominio
4. Re-deploy después de cambiar variables de entorno

### Error: "Cannot find module"

**Causa**: TypeScript no se compiló correctamente

**Solución**:
1. Verifica que `npm run build` funcione localmente
2. Revisa que el `Build Command` en Vercel sea `npm run build`
3. Verifica que `dist/server.js` exista después del build

### Error: "Module parse failed"

**Causa**: Vercel está intentando ejecutar archivos TypeScript directamente

**Solución**:
1. Verifica que `vercel.json` apunte a `dist/server.js` no `src/server.ts`
2. Asegúrate de que el build command compile TypeScript

## 🔄 Re-Deploy y Actualizaciones

### Desde Git (Automático)

Cada push a la rama principal (main/master) hará un deploy automático.

```bash
git add .
git commit -m "Update API"
git push origin main
```

### Desde CLI

```bash
vercel --prod
```

## 📍 URLs Importantes

Después del deploy, recibirás:

- **Production URL**: `https://tu-proyecto.vercel.app`
- **Preview URLs**: `https://tu-proyecto-xxx.vercel.app` (cada branch/PR)

## 🌐 Configuración CORS Actual

La API acepta requests desde:
- ✅ `http://localhost:4200` (desarrollo local)
- ✅ Tu `FRONTEND_URL` (producción)
- ✅ Cualquier `*.vercel.app` (subdominios de Vercel)
- ✅ Requests sin origin (Postman, curl, mobile apps)

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs en Vercel Dashboard → tu proyecto → Deployments → click en el deployment → View Function Logs
2. Verifica las variables de entorno
3. Asegúrate de que el build local funcione: `npm run build && npm start`

---

**¡Listo!** Tu API debería estar funcionando en Vercel sin errores de CORS 🎉

# Prueba Frontend Inditex - Gestión de Categorías

Este proyecto es una aplicación full-stack para la gestión de categorías, desarrollada con un backend en Node.js y Express y un frontend en React con Vite. Ambos están organizados en un monorepo utilizando npm workspaces.

## Funcionalidades

- Añadir y eliminar filas de productos
- Añadir, eliminar y reordenar los productos tanto en la misma fila como en otras filas
- El límite de productos por fila es 3
- Implementación de la funcionalidad "Drag and Drop" tanto para productos como para filas
- Alineación de los productos dentro de la fila: Izquierda, derecha y centro. Por defecto, la alineación es centro
- Funcionalidad para acercar o alejar el editor por medio del zoom. Este zoom solo afecta a la sección editable.

## Mejoras a realizar

- Mejorar el estilo del componente ProductCard cuando se utiliza Drag & Drop
- Guardar la posición exacta de los productos dentro de la fila cuando se refresca la página
- Guardar la alineación de los productos al refrescar la página
- Agregar más pruebas unitarias

## 📁 Estructura del Proyecto

```
prueba-front-end-inditex-gestion-categorias/
├── backend/   # Servidor backend en Node.js con Express y PostgreSQL
├── frontend/  # Aplicación frontend en React con TypeScript y Vite
├── package.json  # Configuración del monorepo con npm workspaces
```

## 🚀 Instalación y Uso

### 1️⃣ Instalación de Dependencias

Antes de ejecutar el proyecto, asegúrate de tener Node.js instalado. Ejecuta el siguiente comando en la raíz del proyecto para instalar todas las dependencias tanto del frontend como del backend:

```sh
npm run install:all
```

### 2️⃣ Desarrollo

Para iniciar ambos entornos (backend y frontend) en modo desarrollo, usa:

```sh
npm run dev
```

Esto ejecutará:

- `npm run dev` en `backend/` (inicia un servidor con `nodemon` en `src/server.ts`)
- `npm run dev` en `frontend/` (inicia Vite para desarrollo)

### 3️⃣ Compilación

Para compilar ambos entornos, usa:

```sh
npm run build
```

### 4️⃣ Ejecución en Producción

Para iniciar solo el backend en producción:

```sh
npm run start
```

## 🛠 Tecnologías Utilizadas

### Backend

- **Node.js con Express**
- **TypeScript**
- **PostgreSQL**

### Frontend

### **Dependencias Principales**

- **zustand**: Gestión del estado global de la aplicación de manera sencilla.
- **tailwindcss**: Framework CSS que permite un desarrollo rápido de UI con un estilo mínimo personalizado.
- **@dnd-kit**: Implementación de la lógica del Drag & Drop
- **Supabase**: Gestión de base de datos con PostgresSQL.
- **react-icons**
- **axios**

### **Dependencias de Desarrollo**

- **vite**: Una herramienta de compilación rápida que mejora la velocidad de desarrollo.
- **typescript**: Añade tipados, mejorando la fiabilidad y el mantenimiento del código.
- **@vitejs/plugin-react**: Optimiza las aplicaciones de React dentro del ecosistema de Vite.
- **@eslint/js** & **typescript-eslint**: Mejora el soporte de ESLint para proyectos TypeScript.
- **@types/react & @types/react-dom**: Proporciona definiciones de tipos de TypeScript para React.
- **jest & Testing Library**: Pruebas unitarias

## 🧪 Pruebas

Para ejecutar las pruebas en el frontend:

```sh
npm test
```

Para pruebas en modo watch:

```sh
npm run test:watch
```

Para ver la cobertura de pruebas:

```sh
npm run test:coverage
```

---

Para poder probar este proyecto sin necesidad de clonar el repositorio, podés utilizar **[este enlace](https://prueba-front-end-inditex-gestion-categorias-frontend.vercel.app/)**.

---

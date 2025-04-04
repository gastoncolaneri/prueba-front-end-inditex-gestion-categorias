# Prueba Frontend Inditex - Gestión de Categorías

Este proyecto es la parte Frontend de la aplicación. Se utilizó React con Vite.

## 🚀 Instalación y Uso

### **1️⃣ Instalar Dependencias**

Antes de ejecutar el proyecto, asegúrate de tener **Node.js** instalado. Luego, instala las dependencias ejecutando el comando:

```sh
npm install
```

### **2️⃣ Ejecutar en Modo Desarrollo**

Para iniciar un servidor de desarrollo ejecuta el siguiente comando:

```sh
npm run dev
```

Esto iniciará la aplicación en `http://localhost:5173` (o en un puerto diferente si está configurado).

### **3️⃣ Compilar para Producción**

Para generar una compilación optimizada para producción:

```sh
npm run build
```

Esto creará una carpeta `dist/` que contiene la aplicación compilada.

### **4️⃣ Ejecutar la Versión de Producción Localmente**

Para previsualizar la compilación de producción:

```sh
npm run preview
```

Esto sirve los archivos compilados localmente para realizar pruebas antes del despliegue.

---

Para poder probar este proyecto sin necesidad de clonar el repositorio, podés utilizar **[este enlace](https://prueba-front-end-inditex.vercel.app/)**.

Para iniciar solo el backend en producción:

```sh
npm run start
```

## 🛠 Tecnologías Utilizadas

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

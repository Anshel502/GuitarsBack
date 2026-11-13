# Backend - GuitarsLA (API REST)

Este es el servidor principal para la plataforma GuitarsLA. Está construido utilizando **Node.js, Express y TypeScript**, e implementa **Sequelize** como ORM para gestionar una base de datos relacional en **PostgreSQL**. Su propósito es servir el catálogo de guitarras y permitir el registro de nuevos productos.

## Requisitos Previos

- Entorno de ejecución: **Node.js** (recomendado v18 o superior).
- Gestor de bases de datos: **PostgreSQL** (ya sea en un entorno local o alojado en servicios nube como Render).

## Instalación de Dependencias

Para instalar todos los módulos y herramientas necesarias definidos en el proyecto, ejecuta el gestor de paquetes en la raíz del backend:

```bash
npm install
```

*(Esto instalará de forma automática paquetes clave como `express`, `sequelize`, `pg`, `cors` y utilidades de desarrollo como `typescript` y `nodemon`).*

## Configuración del Entorno (.env)

Crea un archivo llamado `.env` en la raíz de tu proyecto basándote en la siguiente configuración. Estas credenciales permitirán levantar el puerto y conectar la base de datos:

```env
PORT=4005
DATABASE_URL=postgresql://guitarsla_user:49UvRpgpD4dgck5qo7jXrjFFZvOSwc3X@dpg-dbq8366c6qcc739fgp70-a.oregon-postgres.render.com/guitarsla?ssl=true
```

| Llave | Propósito | Valor Asignado |
| :--- | :--- | :--- |
| `PORT` | Define el puerto local donde el servidor escuchará peticiones. | `4005` |
| `DATABASE_URL` | String de conexión directo hacia la base de datos PostgreSQL alojada en Render. | *(Ver bloque de código superior)* |

## Puesta en Marcha

Para iniciar el servidor en modo desarrollador (con recarga automática de cambios gracias a Nodemon y TS-Node), utiliza:

```bash
npm run dev
```
Si la conexión es correcta, la consola mostrará que la base de datos se ha sincronizado y que el servidor está activo en `http://localhost:4005/api`.

### Poblar Base de Datos (Opcional)

Si tu base de datos está vacía y necesitas cargar el inventario inicial de guitarras, ejecuta el script de sembrado:

```bash
npm run seed
```

## Rutas de la API

La comunicación está protegida mediante políticas CORS y solo acepta métodos de lectura y escritura básicos:

- **Obtener Inventario:** `GET /api/guitars` 
  Retorna un arreglo JSON con todas las guitarras almacenadas.
- **Registrar Guitarra:** `POST /api/guitars` 
  Crea un nuevo registro. Requiere un payload JSON validado (precio mayor a cero, campos de texto obligatorios).
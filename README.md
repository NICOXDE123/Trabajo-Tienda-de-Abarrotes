# 🛒 ABARROTECH – API REST de Gestión de Inventario y Ventas

ABARROTECH es una API REST desarrollada con **Node.js, Express, MongoDB y Redis**, diseñada para gestionar productos, lotes de stock, ventas y reportes diarios.  
El sistema implementa autenticación mediante **JWT**, control de roles (**ADMIN** y **VENDEDOR**) y cacheo con Redis para optimizar consultas.

---

### Requerimientos del Sistema

## Requerimientos Funcionales
- El sistema debe permitir crear, editar y eliminar productos.
- El administrador debe poder agregar stock mediante lotes (LIFO).
- Los vendedores deben poder registrar ventas.
- El sistema debe descontar stock aplicando la metodología LIFO.
- Debe existir autenticación mediante JWT.
- Debe permitir consultar productos, ventas y reportes diarios.

## Requerimientos No Funcionales
- La API debe responder de forma rápida utilizando caché (Redis).
- La base de datos debe permitir almacenar documentos dinámicos (MongoDB).
- El sistema debe tener control de acceso por roles (admin y vendedor).
- Operaciones críticas deben validar datos antes de modificar el inventario.
- La arquitectura debe ser modular y fácil de mantener.

## Reglas del Negocio
- Cada entrada de stock se registra como un lote independiente.
- El lote más reciente debe ser el primero en consumirse (LIFO).
- Los vendedores solo pueden consultar productos y registrar ventas.
- Los administradores son los únicos que pueden gestionar inventario.

---

## 🚀 Tecnologías Utilizadas

- Node.js + Express
- MongoDB + Mongoose
- Redis (cache)
- JWT (autenticación)
- Docker / Docker Compose

---

## Pruebas
El proyecto incluye una prueba automatizada básica con Jest.
Para ejecutarla:
*npm test*

---

## 📁 Estructura del Proyecto


- **/config** → Conexión a MongoDB y Redis  
- **/controllers** → Lógica de autenticación, productos, ventas y reportes  
- **/middleware** → Validación de JWT y roles  
- **/models** → Modelos: User, Product, Sale  
- **/routes** → Rutas principales de la API  
- **/services** → Lógica LIFO y validación de stock  
- **Dockerfile** → Imagen para Node  
- **docker-compose.yml** → API + MongoDB + Redis  
- **server.js** → Inicio del servidor  

---

## 🐳 Ejecución con Docker

1. Clonar el repositorio:

git clone <https://github.com/NICOXDE123/Trabajo-de-Abarrotes.git>
cd <Trabajo-de-Abarrotes>


2. Levantar los servicios:

docker compose up --build


Esto levanta:

- API → http://localhost:3000  
- MongoDB → puerto 27017  
- Redis → puerto 6379  

---

## 🔐 Autenticación

La API utiliza **JWT**.  
Debes incluirlo en cada ruta privada:

Authorization: Bearer <token generado en /auth/login>

---

## 👥 Roles del Sistema

| Rol | Permisos |
|-----|----------|
| **ADMIN** | Crear usuarios, gestionar productos, ver reportes |
| **VENDEDOR** | Registrar ventas, consultar productos |

---

## 📌 Endpoints Principales

🟦 **Autenticación**

- `POST /api/auth/login`
- `POST /api/auth/register` (solo ADMIN)

🟩 **Productos**

- `GET /api/productos`
- `POST /api/productos`
- `PUT /api/productos/:id`
- `DELETE /api/productos/:id`
- `POST /api/productos/:id/agregar-stock`

🟧 **Ventas**

- `POST /api/ventas`

🟪 **Reportes**

- `GET /api/reportes/ventas-por-dia`

---

## 📝 Documentación Completa

La documentación detallada de cada endpoint se encuentra en:

/docs/api.md


---

## 👨‍💻 Integrantes y Desarrollo

Proyecto desarrollado por:

- **Nicolas Huenchual , Felipe Astete , Michael Flores , Roberto Villouta**
- Curso: Base de Datos II – ABARROTECH  
- Profesor: [ Michael Campos]

---

## ✔ Estado del Proyecto

✅ MVP funcional  
🚀 Docker implementado  
🔐 JWT operativo  
📦 Lotes + LIFO funcionando  
⚡ Redis con cache en reportes  

---
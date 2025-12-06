#  Documentación de Endpoints – ABARROTECH API

La siguiente documentación describe los endpoints disponibles en la API REST del sistema ABARROTECH.  
Todas las rutas privadas requieren autenticación mediante **JWT**.

---

## 1. Autenticación

# POST /api/auth/login
*Inicia sesión y retorna un token JWT válido.*

{
  "email": "admin@abarrotech.com",
  "password": "admin123"
}

Respuesta (200 OK)

{
  "token": "JWT_GENERADO"
}

# POST /api/auth/register (solo ADMIN)
*Registra un nuevo usuario en el sistema.*


{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "password": "vend2345",
  "rol": "VENDEDOR"
}

-Roles permitidos
-ADMIN

---

## 👥 2. Usuarios (Roles)
- Rol	Permisos
- ADMIN: Crear usuarios, gestionar productos, ver reportes.
- VENDEDOR: Registrar ventas, consultar productos.

---

## 🛒 3. Productos

# GET /api/productos.

*Obtiene todos los productos.*

- Requiere JWT Sí

- Respuesta

[
  {
    "_id": "123",
    "nombre": "Leche Entera",
    "precio": 1200,
    "categoria": "Lácteos",
    "lotes": [...]
  }
]

# POST /api/productos (solo ADMIN)
*Crea un producto nuevo.*


{
  "nombre": "Arroz 1kg",
  "precio": 950,
  "categoria": "Abarrotes",
  "descripcion": "Arroz grado 1"
}

# PUT /api/productos/:id (solo ADMIN)
*Actualiza un producto existente.*


{
  "precio": 1100
}

# DELETE /api/productos/:id (solo ADMIN)
-Elimina un producto del sistema.

# POST /api/productos/:id/agregar-stock
-Agrega un nuevo lote al producto.

{
  "cantidad": 20
}

Descripción
*Registra un lote con cantidad y fecha de ingreso.*
*Usado luego para LIFO en ventas.*

---
## 4. Ventas

# **POST /api/ventas
*Registra una venta aplicando el método LIFO.*


{
  "items": [
    { 
     "productoId": "ID_PRODUCTO"
     "cantidad": 3 
     }
  ]
}

-Respuesta

{
  "total": 3500,
  "items": [
    {
      "productoId": "ID",
      "cantidad": 3,
      "precioUnitario": 1200,
      "subtotal": 3600
    }
  ],
  "usuario": "ID_DEL_VENDEDOR"
}

-Errores posibles
-409: Stock insuficiente

-400: Datos incompletos

--- 

## 📊 5. Reportes

# GET /api/reportes/ventas-por-dia.

*Genera un resumen de ventas agrupado por fecha.*

Respuesta

[
  {
    "fecha": "2025-12-03",
    "totalVentas": 5200,
    "cantidadTransacciones": 3
  }
]

-Notas
*Puede responder desde Redis (caché) si la consulta es repetida.*

-Si aparece "fuente": "cache", significa que Redis funcionó correctamente.

---

## ❌ 6. Errores Comunes
 Código | Significado                  |
| ------ | ---------------------------- |
| 401    | Falta token o token inválido |
| 403    | Rol no autorizado            |
| 400    | Datos incompletos            |
| 409    | Stock insuficiente           |
| 500    | Error interno del servidor   |

---

## 📌 7. Notas Técnicas
Autenticación basada en JWT

Sistema de stock mediante lotes embebidos

Método LIFO para descontar stock en ventas

Cacheo con Redis

Base de datos MongoDB

API desplegable con Docker

--- 
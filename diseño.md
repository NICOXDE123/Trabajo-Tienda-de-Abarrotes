# Informe de Diseño Lógico y Técnico  
## Sistema de Gestión – ABARROTECH  


**Integrantes:** Felipe Astete, Michael Flores, Nicolas Huenchual, Roberto Villouta  
**Fecha:** 20/11/2025  
**Sección:** 01  
**Profesor:** Michael Campos  
**Asignatura:** Base de Datos II

#### 1.Introducción

### Objetivo
Desarrollar un sistema informático para tiendas de abarrotes que centralice la información, automatice la gestión de productos, ventas y stock, y mejore la toma de decisiones mediante reportes y control de usuarios.

### Alcance
- Registro y control de productos y stock  
- Registro de ventas (metodología LIFO)  
- Gestión de usuarios (administrador y vendedor)  
- Reportes simples de ventas

#### 2. DEFINICIONES Y ACRÓNIMOS

### Definiciones y Acrónimos
- **API RESTful:** Comunicación cliente-servidor vía HTTP  
- **JWT:** JSON Web Token  
- **CRUD:** Crear, Leer, Actualizar, Eliminar  
- **MVP:** Producto Mínimo Viable  

#### 3. DESCRIPCIÓN GENERAL

ABARROTECH es un sistema que utiliza Node.js, MongoDB y Redis para automatizar la gestión de tiendas de abarrotes.  
Opera bajo arquitectura REST y puede desplegarse localmente o con Docker.

### Usuarios y Roles
- Administrador  
- Vendedor  
- Cliente (futuro)

#### 5. REQUISITOS FUNCIONALES

## Gestión de productos
CRUD completo y control de stock.

## Registro de ventas
Actualiza stock usando metodología LIFO.

## Control de usuarios
Autenticación con roles.

## Reportes
Resumen de ventas por fecha y totales.

6. DIAGRAMAS FUNCIONALES

### Caso de uso
![Diagrama de Caso de Uso](./diagrams/caso-de-uso.png)

### Flujo de Registrar Venta
![Flujo Registrar Venta](./diagrams/diagrma%20-flujo-proceso.png)

### Diagrama de Secuencia
![Secuencia Registrar Venta](./diagrams/diagrama-secuencial.png)
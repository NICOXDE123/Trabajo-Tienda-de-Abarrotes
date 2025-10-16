<<<<<<< HEAD
===========================================================
                PROYECTO: ABARROTECH
==========================================================

## 1. Introducción

El proyecto **ABARROTECH** nace como una iniciativa orientada a mejorar la gestión de una pequeña tienda de abarrotes local que, como muchas otras, enfrenta dificultades al mantener sus registros de forma manual.  
Actualmente, la tienda utiliza cuadernos y planillas para anotar las ventas, los productos en stock y los pedidos a proveedores, lo que ha generado problemas como la pérdida de información, errores de cálculo, duplicación de datos y falta de control sobre el inventario disponible.  

Estas limitaciones no solo afectan la eficiencia del negocio, sino también la capacidad del dueño para tomar decisiones informadas sobre las compras o la reposición de productos. Frente a esta situación, surge la necesidad de contar con una herramienta tecnológica que centralice la información, automatice tareas repetitivas y ofrezca un control más preciso de las operaciones diarias.  

---

## 2. Problemática

El dueño de la tienda **ABARROTECH** no cuenta con una base de datos ni un sistema digital para registrar los productos adquiridos ni las ventas realizadas.  
Esta situación provoca diversas dificultades, entre ellas:

- Pérdida de información y duplicación de registros.  
- Dificultad para llevar un control del stock disponible.  
- Imposibilidad de ordenar los productos por categorías (por ejemplo: abarrotes secos, bebidas, aseo, etc.).  
- Falta de reportes confiables sobre ingresos y ventas.  
- Ausencia de control diferenciado de usuarios (el dueño y los empleados tienen el mismo nivel de acceso).  
- Carencia de alertas sobre productos próximos a agotarse o vencer.  

---

## 3. Objetivos del Sistema

### Objetivo general
Implementar un sistema de gestión para **ABARROTECH** que permita digitalizar el registro de productos, ventas y reportes, mejorando la eficiencia, el control del inventario y la toma de decisiones.  

### Objetivos específicos
- Automatizar el registro y control de productos.  
- Reducir la pérdida de información mediante una base de datos centralizada.  
- Generar reportes de ventas y stock en tiempo real.  
- Establecer roles de usuario con diferentes niveles de acceso.  
- Incorporar alertas automáticas para productos con bajo stock o próximos a vencer.  

---

### 2. Usuarios del sistema 


-- Administrador (El equipo de desarrollo)
Tiene acceso completo al sistema, pudiendo gestionar usuarios, productos, proveedores, categorías, y generar reportes.


-- Vendedor (Empleado de la tienda)
Registra ventas diarias, consulta el stock de productos, y genera boletas simples. No tiene permisos para editar productos, proveedores ni usuarios.


-- Cliente (Opcional a futuro)
Consultaría productos y precios desde una interfaz sencilla, revisaría promociones y realizaría pedidos en línea. Este perfil se implementará en versiones futuras.


### 3. Funciones necesarias (MVP) 


-- Para la primera versión del sistema se implementará lo mínimo indispensable:


-- Registrar productos con stock y categorías.


-- Registrar ventas y descontar automáticamente del inventario.


-- Consultar reportes simples de ventas del día.


-- Acceso diferenciado por rol: Administrador (completo) y Vendedor (limitado).


### 4. Datos a almacenar 


Producto:


-- Nombre del producto


-- Categoría


-- Precio de compra


-- Precio de venta


-- Stock disponible


-- Stock mínimo (alerta)


-- Proveedor asociado (opcional)


Venta :


-- ID de la venta


-- Fecha de la venta


-- Total de la venta


-- Vendedor responsable (usuario del sistema)


-- Detalle de los productos vendidos: Producto, Cantidad, Precio unitario


Proveedor:


-- Nombre del proveedor


-- Teléfono


-- Correo electrónico


-- Persona de contacto


-- Usuario (Administrador / Vendedor):


-- Nombre de usuario


-- Contraseña (encriptada)


-- Rol asignado (Administrador o Vendedor)


###  5. Reglas de negocio 


** Reserva de productos : Un producto reservado no puede ser vendido a terceros hasta que expire la reserva. **


** Actualización automática del stock: Al registrar una venta, el stock de los productos vendidos se actualiza automáticamente. **


** Permisos de usuario: Solo usuarios autorizados pueden eliminar productos o realizar bajas definitivas. **


Trazabilidad de productos: Debe existir trazabilidad para identificar de qué vehículo o lote proviene cada producto (en el futuro, si se agrega).


=======
>>>>>>> develop

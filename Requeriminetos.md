
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



Alta prioridad:


-- Registro de productos y ventas


-- Control de stock


-- Gestión de usuarios y roles


Media prioridad:


-- Reportes básicos (ventas diarias, inventario bajo)


-- Gestión de proveedores


-- Interfaz sencilla para vendedores


Baja prioridad:


-- Implementación del rol Cliente


-- Pedidos en línea


-- Promociones o descuentos


### 7. Flujos principales


Ingreso de productos


-- El administrador registra productos con detalles como nombre, categoría, precio y stock.


Registro de ventas


-- El vendedor registra las ventas y el sistema actualiza automáticamente el stock disponible.


Generación de reportes


-- El administrador puede generar reportes simples de ventas diarias.


Consultas de stock y productos


-- Los vendedores consultan el stock disponible y la categoría de los productos.


### 8. Requisitos no funcionales 


Accesos multiusuario: Gestión de usuarios con diferentes roles (Administrador, Vendedor).


Seguridad:


-- Contraseñas cifradas para todos los usuarios.


-- Control de acceso según el rol de usuario (Administrador o Vendedor).


Interfaz de usuario:


-- Interfaz de escritorio sencilla para los vendedores.


-- Acceso desde dispositivos móviles (opcional para futura implementación).


Rendimiento:


-- El sistema debe ser eficiente en consultas de productos, ventas y stock.


-- Debe soportar múltiples usuarios simultáneos sin caída de rendimiento.


### 9. Plazos 


La primera versión funcional del sistema (API REST) estará disponible en aproximadamente 4 semanas desde la aprobación del alcance y el pago inicial. La entrega está sujeta a ajustes de disponibilidad y revisiones durante el desarrollo.


### 10. Presupuesto Estimado para el Sistema ABARROTECH


1. Tiempo de desarrollo estimado


** Fase 1 ** : Requerimientos y Diseño Funcional: 1-2 semanas


** Fase 2 ** : Desarrollo del MVP (mínimo producto viable): 4-6 semanas


** Fase 3 ** : Pruebas y Ajustes Finales: 1-2 semanas


** Total estimado ** : 6-8 semanas de trabajo


# 2. Costos de desarrollo


Para este proyecto, el costo total estimado de desarrollo dependerá de las horas de trabajo y el alcance de las funcionalidades solicitadas. El precio propuesto se basa en las tarifas de desarrollo en Chile y el tiempo estimado de trabajo.


--- Desarrollo Backend (Node.js + MongoDB + Redis):
Costo estimado: $2,000,000 - $4,000,000 CLP (dependiendo de la complejidad de las funciones y de la integración de MongoDB y Redis).


--- Desarrollo Frontend (Interfaz para los vendedores):
Costo estimado: $800,000 - $2,000,000 CLP (si es necesario crear una interfaz de usuario para los vendedores).


--- Diseño UI/UX:
Costo estimado: $480,000 - $1,200,000 CLP (diseño de la interfaz, estructura y experiencia del usuario).


# 3. Infraestructura y Licencias


Concepto                                      | Detalle                                                                                         | Costo estimado mensual (CLP)
---------------------------------------------|--------------------------------------------------------------------------------------------------|-------------------------------
Infraestructura                               | Servidores, MongoDB, Redis, etc.                                                                | $60,000 - $200,000
Licencias y herramientas adicionales (si aplica) | GitHub Pro, servicios de integración continua, otras herramientas de desarrollo                 | $30,000 - $100,000



# 4. Costo Total Estimado del Proyecto


El costo total estimado para desarrollar el sistema ABARROTECH será de:


Concepto                         | Detalle                                                                                                     | Costo estimado (CLP)
--------------------------------|-------------------------------------------------------------------------------------------------------------|--------------------------
Presupuesto del proyecto        | Incluye desarrollo, diseño, pruebas y entrega del sistema. Puede ajustarse según cambios de alcance.        | $4.000.000 - $6.400.000



# 5. Mantenimiento Post-Lanzamiento (Opcional)


Si se requiere soporte técnico o mantenimiento mensual del sistema después de la entrega:


Concepto                             | Detalle                                                                                               | Costo estimado mensual (CLP)
------------------------------------|--------------------------------------------------------------------------------------------------------|-------------------------------
Mantenimiento y soporte             | Cubre corrección de errores, pequeñas mejoras y actualizaciones al sistema.                           | $240,000 - $600,000



### 11. Próximos pasos 


-- Confirmación de este documento con el alcance acordado (API-only).


-- Workshop técnico para definir endpoints, esquemas en MongoDB y reglas críticas.


-- Entrega del documento de alcance técnico y cotización formal.


-- Firma del contrato y orden de trabajo.


-- Inicio del desarrollo conforme al cronograma acordado.



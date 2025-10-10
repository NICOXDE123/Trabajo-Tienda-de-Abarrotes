## Introducción


El proyecto ABARROTECH consiste en el desarrollo de un sistema de gestión para una tienda de abarrotes, con el objetivo de mejorar la eficiencia en la gestión de productos, ventas y control de inventarios. Actualmente, la tienda opera de manera manual, utilizando registros en papel o hojas de cálculo, lo que ha generado problemas como duplicación de datos, pérdida de información, y dificultades para controlar el stock de productos.


Este sistema permitirá a los administradores y vendedores registrar productos, realizar ventas y gestionar el inventario de manera automática, asegurando una mayor precisión en los registros y mejorando la toma de decisiones a través de reportes de ventas. Además, se implementará un sistema de roles para controlar el acceso a las distintas funciones del sistema, diferenciando las tareas del administrador (quien tendrá acceso completo) y el vendedor (quien podrá registrar ventas y consultar stock).


El sistema también tiene en cuenta la escalabilidad, permitiendo futuras mejoras como la incorporación de pedidos en línea y gestión de clientes, lo cual se implementará en versiones posteriores del sistema.




### 1. Problema de negocio


El dueño de la tienda ABARROTECH no cuenta con una base de datos centralizada para registrar los productos adquiridos, las ventas realizadas ni el control de stock. Esto provoca:


-- Pérdida de información y duplicación de registros.


--Dificultad para llevar control del stock.


-- Imposibilidad de ordenar los productos por categorías (ejemplo: abarrotes secos, bebidas, aseo, etc.).


-- Falta de reportes confiables sobre ingresos y ventas, lo que afecta la toma de decisiones.


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


## 4. Datos a almacenar


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


--Rol asignado (Administrador o Vendedor)


## 5. Reglas de negocio


** Reserva de productos: Un producto reservado no puede ser vendido a terceros hasta que expire la reserva. **


** Actualización automática del stock: Al registrar una venta, el stock de los productos vendidos se actualiza automáticamente. **


** Permisos de usuario: Solo usuarios autorizados pueden eliminar productos o realizar bajas definitivas.


Trazabilidad de productos: Debe existir trazabilidad para identificar de qué vehículo o lote proviene cada producto (en el futuro, si se agrega).


## 6. Prioridades


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


## 7. Flujos principales


Ingreso de productos


-- El administrador registra productos con detalles como nombre, categoría, precio y stock.


Registro de ventas


-- El vendedor registra las ventas y el sistema actualiza automáticamente el stock disponible.


Generación de reportes


-- El administrador puede generar reportes simples de ventas diarias.


Consultas de stock y productos


-- Los vendedores consultan el stock disponible y la categoría de los productos.


## 8. Requisitos no funcionales


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


## 9. Plazos


La primera versión funcional del sistema (API REST) estará disponible en aproximadamente 4 semanas desde la aprobación del alcance y el pago inicial. La entrega está sujeta a ajustes de disponibilidad y revisiones durante el desarrollo.


## 10. Presupuesto Estimado para el Sistema ABARROTECH


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


Infraestructura (servidores, MongoDB, Redis, etc.):
Costo mensual: $60,000 - $200,000 CLP (dependiendo del servicio de hosting y la configuración de la infraestructura).


Licencias y herramientas adicionales (si aplica):
Costo estimado: $30,000 - $100,000 CLP (dependiendo de herramientas como GitHub Pro, servicios de integración continua, etc.).


# 4. Costo Total Estimado del Proyecto


El costo total estimado para desarrollar el sistema ABARROTECH será de:


$4,000,000 CLP - $6,400,000 CLP
Este presupuesto incluye las fases de desarrollo, diseño, pruebas, y entrega del sistema.
El precio final puede ajustarse en función de nuevas funcionalidades o cambios de alcance.


# 5. Mantenimiento Post-Lanzamiento (Opcional)


Si se requiere soporte técnico o mantenimiento mensual del sistema después de la entrega:


Costo mensual de mantenimiento y soporte:
$240,000 - $600,000 CLP
Este costo cubre la corrección de errores, pequeñas mejoras y actualizaciones al sistema.


### 11. Próximos pasos


-- Confirmación de este documento con el alcance acordado (API-only).


-- Workshop técnico para definir endpoints, esquemas en MongoDB y reglas críticas.


-- Entrega del documento de alcance técnico y cotización formal.


-- Firma del contrato y orden de trabajo.


-- Inicio del desarrollo conforme al cronograma acordado.


### 12. Criterios de aceptación y garantías


-- Entrega de documentación completa de la API (endpoints, esquemas de MongoDB).


-- Garantía de corrección de errores críticos dentro de las primeras 4 semanas post entrega.

-- Soporte opcional de mantenimiento mensual (corrección de errores, pequeñas mejoras).

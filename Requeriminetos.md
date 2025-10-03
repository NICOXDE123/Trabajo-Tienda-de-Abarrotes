# Sistema de Gestión – Tienda de Abarrotes-”ABARROTECH” #

# 1. Introducción

La tienda de abarrotes ABARROTECH busca mejorar su gestión de productos y ventas mediante la implementación de un sistema digital. Actualmente, los registros se realizan de forma manual en papel o planillas de cálculo, lo cual genera errores y dificulta la administración del negocio.

Este documento detalla los requerimientos levantados, que servirán como base para el desarrollo del sistema de gestión.



# 2.-Problemática:

El dueño de la tienda ABARROTECH no cuenta con una base de datos para registrar los productos adquiridos ni las ventas realizadas. Esto provoca:
Pérdida de información y duplicación de registros.


-Dificultad para llevar control del stock.

-Imposibilidad de ordenar los productos por categorías (ejemplo: abarrotes secos, bebidas, aseo, etc.).

-Falta de reportes confiables sobre ingresos y ventas.

-Sin control diferenciado de usuarios (dueño y empleados con el mismo nivel de acceso).

-Carencia de alertas sobre productos próximos a agotarse o vencer.


# 3. Objetivos del sistema

Objetivo general:
Implementar un sistema de gestión para ABARROTECH que permita digitalizar el registro de productos, ventas y reportes, mejorando la eficiencia y la toma de decisiones.

Objetivos específicos:

Controlar el stock de productos en tiempo real.

Registrar las ventas diarias de forma rápida y segura.

Generar reportes de ventas confiables.

Clasificar productos en categorías.

Definir roles con diferentes niveles de acceso (administrador y vendedor).

# 4.-Usuarios del sistemas

Administrador (Dueño de la tienda)

Vendedor (Empleado)

Cliente (opcional a futuro)

# 5.-Tipos de usuarios y perfiles

🛠️ Administrador (Dueño de la tienda)
Registrar, editar y eliminar productos.


Organizar productos en categorías (ej. abarrotes secos, bebidas, aseo).


Registrar y gestionar proveedores.


Registrar, editar y eliminar usuarios (ej. vendedores).


Consultar y generar reportes de ventas (diario, semanal, mensual).


Revisar stock y alertas de productos bajo mínimo.


🧾 Vendedor (Empleado)
Registrar ventas diarias en el sistema.


Consultar stock y categorías de productos disponibles.


Emitir boleta simple al cliente con total de la venta.


Consultar historial de ventas propias.


No puede modificar productos, proveedores ni usuarios.



🛍️ Cliente (Opcional / Futuro)
Consultar catálogo de productos y categorías.


Revisar promociones o descuentos disponibles.


Realizar pedidos en línea (para versiones futuras).




# 6.-Funciones indispensable en cada perfil

Administrador (Dueño de la tienda)

Registrar, editar y eliminar productos.


Clasificar productos en categorías.


Registrar y administrar proveedores.


Crear, editar y eliminar usuarios del sistema.


Consultar reportes de ventas (diario, semanal, mensual).


Revisar el stock disponible y recibir alertas cuando un producto esté bajo mínimo.




🧾 Vendedor (Empleado)
Registrar ventas en el sistema.


Consultar productos y su stock.


Emitir boleta simple al cliente.


Revisar historial de ventas propias.




🛍️ Cliente (Opcional / Futuro)

Consultar catálogo de productos y categorías.


Revisar promociones o descuentos.


Realizar pedidos en línea.


# 7.-Datos básicos a registrar

Producto: Nombre del producto, Categoría (ej.: abarrotes secos, bebidas, aseo, etc.), Precio de compra, Precio de venta, Stock disponible, Stock mínimo (alerta), Proveedor asociado (opcional).

Venta: ID de la venta, Fecha de la venta, Total de la venta, Vendedor responsable (usuario del sistema), Detalle de los productos vendidos (Producto, Cantidad, Precio unitario).

Proveedor: Nombre del proveedor, Teléfono, Correo electrónico, Persona de contacto.

Usuario (Administrador / Vendedor): Nombre de usuario, Contraseña (encriptada para seguridad), Rol asignado (Administrador o Vendedor).


# 8.-MVP – ABARROTECH
Para la primera versión del sistema se implementará lo mínimo indispensable:
Registrar productos con stock y categorías.


Registrar ventas y descontar automáticamente del inventario.


Consultar un reporte simple de ventas del día.


Acceso diferenciado por rol: Administrador y Vendedor

# 9.- Conclusión

En base al levantamiento de requerimientos, se determinó que el sistema para ABARROTECH se implementará como una API REST utilizando Express.js en conjunto con Mongoose para manejar la persistencia en MongoDB. Además, se incorporará Redis como motor de caché para optimizar consultas frecuentes. El proyecto será gestionado bajo la metodología de GitFlow y se desplegará en contenedores mediante Docker Compose, dejando la API disponible en http://localhost:3000.
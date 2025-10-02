-Sistema de Gestión – Tienda de Abarrotes-”ABARROTECH”

Problemática:
El dueño de la tienda ABARROTECH no cuenta con una base de datos para registrar los productos adquiridos ni las ventas realizadas. Esto provoca:
Pérdida de información y duplicación de registros.


-Dificultad para llevar control del stock.

-Imposibilidad de ordenar los productos por categorías (ejemplo: abarrotes secos, bebidas, aseo, etc.).

-Falta de reportes confiables sobre ingresos y ventas.

Usuarios del sistemas
Administrador (dueño de la tienda)


Tiene acceso total al sistema.


Registra y gestiona productos, categorías y proveedores.


Consulta y genera reportes de ventas.


Administra a los vendedores (crea cuentas, asigna roles).


Vendedor (empleado de la tienda)


Registra las ventas realizadas en caja.


Consulta el stock y categorías de productos.


Genera boletas simples al cliente.,
No puede modificar productos ni reportes.


(Opcional a futuro)
Cliente


Podría consultar productos y precios desde una interfaz sencilla.


Podría revisar promociones y realizar pedidos en línea.


Este perfil queda fuera del MVP inicial, pero se considera para versiones posteriores.


Tipos de usuarios y perfiles
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





Funciones indispensable en cada perfil
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








 Datos básicos a registrar

Producto:


Nombre


Categoría


Precio de compra


Precio de venta


Stock disponible


Stock mínimo


Proveedor (opcional)







Venta:


Fecha


Total de la venta


Vendedor responsable


Detalle de los productos vendidos (producto, cantidad, precio unitario)





Proveedor:


Nombre


Teléfono


Correo electrónico


Persona de contacto


Usuario:


Nombre de usuario


Contraseña (encriptada)


Rol (Administrador / Vendedor)






MVP – ABARROTECH
Para la primera versión del sistema se implementará lo mínimo indispensable:
Registrar productos con stock y categorías.


Registrar ventas y descontar automáticamente del inventario.


Consultar un reporte simple de ventas del día.


Acceso diferenciado por rol: Administrador y Vendedor

## 6. Reglas de Negocio
Actualización automática del stock al registrar ventas.


Solo administradores pueden eliminar registros críticos.


Las contraseñas deben almacenarse encriptadas.


Se registrará la trazabilidad de cada venta (usuario y fecha).
Todas las operaciones críticas (eliminación de productos o usuarios) requieren permisos de administrador y validación previa.


### 7. Priorización de Funcionalidades
Alta: registro de productos y ventas, gestión de usuarios, control de stock.
Media: reportes básicos y gestión de proveedores.
Baja: módulo cliente, pedidos en línea y promociones.

### 8. Flujos Principales del Sistema
Ingreso de productos por el administrador.


Registro de ventas por el vendedor.


Descuento automático del stock.


Generación de reportes de ventas diarias.


## 9. Requisitos Funcionales

RF1: Registrar, modificar y eliminar productos.

RF2: Actualizar el inventario automáticamente al vender.

RF3: Registrar ventas con detalle de productos y totales

RF4: Crear y administrar usuarios con roles.

RF5: Autenticación con JWT y control de sesiones.

RF6: Generar reportes básicos de ventas.

RF7: Registrar proveedores asociados.

RF8: Exportar listados a Excel

## 10. Requisitos No Funcionales
Seguridad: cifrado de contraseñas y control de acceso por roles.


Rendimiento: búsquedas rápidas (<3 segundos).


Disponibilidad: ejecución continua mediante Docker.


Usabilidad: interfaz clara y adaptable.


Multiusuario: soporte de conexiones simultáneas.

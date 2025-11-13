

  PROYECTO: ABARROTECH


## Introduccion:


El proyecto ABARROTECH nace como una iniciativa orientada a mejorar la gestión de una pequeña tienda de abarrotes local que, como muchas otras, enfrenta dificultades al mantener sus registros de forma manual.
Actualmente, la tienda utiliza cuadernos y planillas para anotar las ventas, los productos en stock y los pedidos a proveedores, lo que ha generado pérdida de información, errores de cálculo, duplicación de datos y falta de control sobre el inventario disponible.
Estas limitaciones afectan directamente la eficiencia del negocio y la capacidad del dueño para tomar decisiones informadas.


Frente a esta situación, se propone el desarrollo de ABARROTECH, un sistema informático basado en una API RESTful construida con Node.js, Express y MongoDB Community Edition , complementada con Redis para el manejo de sesiones y cache, y Docker para la contenerización del entorno.
El propósito principal del sistema es centralizar la información, automatizar los procesos de control de inventario y ventas, y ofrecer una herramienta moderna, segura y escalable para la gestión diaria de tiendas de abarrotes.


## 2. Problemática del negocio
El dueño de la tienda ABARROTECH no cuenta con un sistema digital ni base de datos para registrar sus productos ni las ventas realizadas, lo que genera diversas dificultades:
Pérdida de información y duplicación de registros.

### 7. Priorización de Funcionalidades
Alta: registro de productos y ventas, gestión de usuarios, control de stock.
Media: reportes básicos y gestión de proveedores.
Baja: módulo cliente, pedidos en línea y promociones.


* Dificultad para llevar un control del stock disponible.


* Imposibilidad de organizar productos por categorías.


* Falta de reportes confiables sobre ingresos y ventas.


* Ausencia de control diferenciado de usuarios.


* Carencia de alertas sobre productos próximos a agotarse o vencer.


Por estas razones, resulta fundamental contar con un sistema digital que centralice la información, automatice el control de stock y brinde soporte confiable para la toma de decisiones del negocio.


## 3. Roles de Usuario
El sistema contará con distintos perfiles, definidos según sus permisos y funciones:

 *Administrador:
Tiene acceso completo al sistema. Puede gestionar usuarios, productos, stock, proveedores y generar reportes de ventas.  [Tiene acceso total al sistema. crea, edita y elimina, supervisa todas las operaciones y configuraciones, controla los permisos y roles del resto de usuarios.]  

=
## 4. Funciones del MVP (Versión Mínima Viable)


* RF1:Registro de productos con stock y categorías.


* RF2:Registro de ventas con actualización automática del inventario.


* RF3:Consulta de reportes simples de ventas diarias.


* RF4:Control de acceso diferenciado por rol (Administrador y Vendedor).



## 5. Datos a Almacenar

# Producto

-- ID_Producto

-- Nombre

--Categoría

-- Precio

-- Stock

-- ID_Proveedor


# Venta

-- ID_Venta

-- Fecha

-- ID_Vendedor

-- Total

-- Productos (puede ir como lista o descripción si no manejas detalle separado)


# Proveedor

-- ID_Proveedor

-- Nombre

-- Contacto

-- Correo


# Usuario

-- ID_Usuario

--Nombre

--Contraseña (encriptada)

--Rol asignado (Administrador o Vendedor)

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


* Dificultad para llevar un control del stock disponible.


* Imposibilidad de organizar productos por categorías.


* Falta de reportes confiables sobre ingresos y ventas.


* Ausencia de control diferenciado de usuarios.


* Carencia de alertas sobre productos próximos a agotarse o vencer.


Por estas razones, resulta fundamental contar con un sistema digital que centralice la información, automatice el control de stock y brinde soporte confiable para la toma de decisiones del negocio.


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





# 2. Costos de desarrollo


El costo total estimado para el desarrollo del proyecto dependerá 
del número de horas de trabajo y del alcance de las funcionalidades 
solicitadas. Los valores propuestos se basan en las tarifas de 
desarrollo actuales en Chile y en el tiempo aproximado de trabajo.

1. Desarrollo Backend (Node.js + MongoDB + Redis):
   - Costo estimado: $2,000,000 - $4,000,000 CLP
   - Incluye: Implementación de la lógica del sistema, integración 
     con bases de datos MongoDB y Redis, y funcionalidades de control 
     de inventario, alertas de vencimiento y organización de productos.
   - Nota: El costo varía según la complejidad de las funciones 
     requeridas y la integración con los sistemas existentes.

2. Desarrollo Frontend (Interfaz para vendedores):
   - Costo estimado: $800,000 - $2,000,000 CLP
   - Incluye: Creación de una interfaz intuitiva para que los vendedores 
     puedan consultar stock, registrar ventas y gestionar productos.
   - Nota: El rango de precio depende de la complejidad del diseño 
     y las funcionalidades requeridas.

3. Diseño UI/UX:
   - Costo estimado: $480,000 - $1,200,000 CLP
   - Incluye: Diseño de la interfaz, estructura visual, experiencia 
     de usuario y adaptación a futuras mejoras, como la aplicación de ventas.
   - Nota: Este costo asegura que el sistema sea fácil de usar, 
     atractivo y funcional para todos los roles de usuario.



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

### 12. Criterios de aceptación y garantías 


-- Entrega de documentación completa de la API (endpoints, esquemas de MongoDB).

-- Garantía de corrección de errores críticos dentro de las primeras 4 semanas post entrega.

-- Soporte opcional de mantenimiento mensual (corrección de errores, pequeñas mejoras)

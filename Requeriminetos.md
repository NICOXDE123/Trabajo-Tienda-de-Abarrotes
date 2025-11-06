=============================
  PROYECTO: ABARROTECH
=============================


## Introduccion:

El proyecto ABARROTECH nace como una iniciativa orientada a mejorar la gestión de una pequeña tienda de abarrotes local que, como muchas otras, enfrenta dificultades al mantener sus registros de forma manual.
Actualmente, la tienda utiliza cuadernos y planillas para anotar las ventas, los productos en stock y los pedidos a proveedores, lo que ha generado pérdida de información, errores de cálculo, duplicación de datos y falta de control sobre el inventario disponible.
Estas limitaciones afectan directamente la eficiencia del negocio y la capacidad del dueño para tomar decisiones informadas.

Frente a esta situación, se propone el desarrollo de ABARROTECH, un sistema informático basado en una API RESTful construida con Node.js, Express y MongoDB Community Edition , complementada con Redis para el manejo de sesiones y cache, y Docker para la contenerización del entorno.
El propósito principal del sistema es centralizar la información, automatizar los procesos de control de inventario y ventas, y ofrecer una herramienta moderna, segura y escalable para la gestión diaria de tiendas de abarrotes.



## 2. Problemática del negocio
El dueño de la tienda ABARROTECH no cuenta con un sistema digital ni base de datos para registrar sus productos ni las ventas realizadas, lo que genera diversas dificultades:
Pérdida de información y duplicación de registros.


* Dificultad para llevar un control del stock disponible.


* Imposibilidad de organizar productos por categorías.


* Falta de reportes confiables sobre ingresos y ventas.


* Ausencia de control diferenciado de usuarios.


* Carencia de alertas sobre productos próximos a agotarse o vencer.


Por estas razones, resulta fundamental contar con un sistema digital que centralice la información, automatice el control de stock y brinde soporte confiable para la toma de decisiones del negocio.


## 3. Roles de Usuario
El sistema contará con distintos perfiles, definidos según sus permisos y funciones:

# Administrador:
Tiene acceso completo al sistema. Puede gestionar usuarios, productos, stock, proveedores y generar reportes de ventas.  [Tiene acceso total al sistema. crea, edita y elimina, supervisa todas las operaciones y configuraciones, controla los permisos y roles del resto de usuarios.]  


# Vendedor:
Posee permisos limitados. Puede registrar ventas, consultar el stock y emitir boletas simples. No puede eliminar ni modificar información crítica.


# Cliente (versión futura):
En versiones posteriores, se incluirá un rol de cliente que podrá consultar productos, revisar precios y realizar pedidos en línea.



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

--Rol



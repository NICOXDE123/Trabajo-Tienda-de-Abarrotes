<<<<<<< HEAD
=======
### 10. Requisitos no Funcionales
>>>>>>> feature/criterio_de_aceptacion

-- Seguridad: cifrado de contraseñas y control de acceso por roles.

<<<<<<< HEAD
  PROYECTO: ABARROTECH


## Introduccion:


El proyecto ABARROTECH nace como una iniciativa orientada a mejorar la gestión de una pequeña tienda de abarrotes local que, como muchas otras, enfrenta dificultades al mantener sus registros de forma manual.
Actualmente, la tienda utiliza cuadernos y planillas para anotar las ventas, los productos en stock y los pedidos a proveedores, lo que ha generado pérdida de información, errores de cálculo, duplicación de datos y falta de control sobre el inventario disponible.
Estas limitaciones afectan directamente la eficiencia del negocio y la capacidad del dueño para tomar decisiones informadas.


Frente a esta situación, se propone el desarrollo de ABARROTECH, un sistema informático basado en una API RESTful construida con Node.js, Express y MongoDB Community Edition , complementada con Redis para el manejo de sesiones y cache, y Docker para la contenerización del entorno.
El propósito principal del sistema es centralizar la información, automatizar los procesos de control de inventario y ventas, y ofrecer una herramienta moderna, segura y escalable para la gestión diaria de tiendas de abarrotes.

=======
--Rendimiento: búsqueda rápida (<3 segundos).

-- Disponibilidad: ejecución continua mediante Doker.

-- Usabilidad: interfaz clara y adaptable.

-- Multiusuario: soporte de conexiones simultaneas.

# 11. Plazos de Desarrollo

| **Fase** | **Descripción** | **Duración estimada** |
|-----------|----------------|-----------------------|
| Fase 1 | Requerimientos y diseño funcional | 2 semanas |
| Fase 2 | Desarrollo del MVP (mínimo producto viable) | 6 semanas |
| Fase 3 | Pruebas y ajustes finales | 2 semanas |

**Duración total estimada:** 10 semanas de trabajo.
>>>>>>> feature/criterio_de_aceptacion

## 2. Problemática del negocio
El dueño de la tienda ABARROTECH no cuenta con un sistema digital ni base de datos para registrar sus productos ni las ventas realizadas, lo que genera diversas dificultades:
Pérdida de información y duplicación de registros.

<<<<<<< HEAD


## 3. Roles de Usuario
El sistema contará con distintos perfiles, definidos según sus permisos y funciones:
=======
# 12. Presupuesto Estimado

| **Área / Componente** | **Descripción** | **Costo Fijo (CLP)** |
|------------------------|----------------|----------------------|
| Desarrollo Backend | Implementación API REST, MongoDB, Redis, Docker | $3.000.000 |
| Desarrollo Frontend (futuro) | Interfaz web para vendedores | $1.000.000 |
| Diseño UI/UX | Estructura visual y experiencia de usuario | $600.000 |
| Infraestructura (mensual) | Hosting, bases de datos y contenedores | $150.000 |
| Licencias y herramientas | Software e integración continua | $50.000 |

**Costo total estimado:** $4.800.000 CLP  
**Nota:** Presupuesto académico fijo, orientado a estimar esfuerzo técnico y recursos utilizados.
>>>>>>> feature/criterio_de_aceptacion

 *Administrador:
Tiene acceso completo al sistema. Puede gestionar usuarios, productos, stock, proveedores y generar reportes de ventas.  [Tiene acceso total al sistema. crea, edita y elimina, supervisa todas las operaciones y configuraciones, controla los permisos y roles del resto de usuarios.]  

<<<<<<< HEAD

## 4. Funciones del MVP (Versión Mínima Viable)

=======
## 12.1 Costos de Infraestructura

| **Componente** | **Descripción** | **Costo Estimado (CLP / mensual)** |
|----------------|----------------|------------------------------------|
| Hosting (Render / AWS) | Servidor para la API y contenedores Docker | $60.000 |
| MongoDB Community (local / Docker) | Almacenamiento NoSQL local con respaldo manual | $45.000 |
| Redis Cloud / Dockerizado | Cache y sesiones JWT | $25.000 |
| Dominio y DNS (opcional) | Registro y configuración web | $15.000 |
| Certificados SSL | Seguridad HTTPS | $5.000 |

**Costo mensual total:** $150.000 CLP  
En modo local (Docker), los costos de infraestructura son prácticamente nulos.
>>>>>>> feature/criterio_de_aceptacion

* RF1:Registro de productos con stock y categorías.

<<<<<<< HEAD

* RF2:Registro de ventas con actualización automática del inventario.


* RF3:Consulta de reportes simples de ventas diarias.


* RF4:Control de acceso diferenciado por rol (Administrador y Vendedor).

=======
## 12.2 Infraestructura y Licencias

La infraestructura técnica y las licencias utilizadas en ABARROTECH fueron seleccionadas considerando portabilidad, escalabilidad, bajo costo y facilidad de mantenimiento.  
Todos los componentes empleados cuentan con versiones open source o gratuitas para uso académico, lo que permite desarrollar y desplegar el sistema sin incurrir en gastos adicionales de licenciamiento.

### Infraestructura y Licencias del Sistema

| **Concepto** | **Detalle** | **Costo estimado mensual (CLP)** |
|---------------|-------------|----------------------------------|
| Infraestructura | Servidores, base de datos MongoDB Community Edition, servicio Redis y contenedores Docker para la ejecución del sistema. | $120.000 |
| Licencias y herramientas adicionales (si aplica) | GitHub Pro, Postman, Visual Studio Code, servicios de integración continua y herramientas de colaboración del equipo. | $30.000 |
| **Total estimado mensual** | Costo total de la infraestructura técnica y herramientas de soporte. | **$150.000** |

**Nota:** Los valores presentados son estimaciones académicas fijas, calculadas en base al uso estándar de servicios en la nube y herramientas de desarrollo.  
En ejecución local mediante Docker, los costos serían prácticamente nulos.

### Beneficios de la Infraestructura Seleccionada

- Escalabilidad: permite ampliar el sistema según el crecimiento del negocio.  
- Portabilidad: gracias a Docker, puede ejecutarse en cualquier entorno sin configuraciones adicionales.  
- Rendimiento: Redis mejora la velocidad de respuesta de la API y reduce la carga sobre MongoDB.  
- Seguridad: uso de HTTPS, JWT y conexión cifrada con MongoDB.  
- Mantenibilidad: la arquitectura modular facilita actualizaciones, pruebas y despliegues.
>>>>>>> feature/criterio_de_aceptacion

---

<<<<<<< HEAD
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
=======
# Costo Total Estimado del Proyecto

| **Concepto** | **Detalle** | **Costo fijo (CLP)** |
|---------------|-------------|----------------------|
| Desarrollo completo (API + Diseño + Testing) | Implementación de la API REST con Node.js, MongoDB, Redis, Docker y documentación técnica. | $4.800.000 |
| Infraestructura mensual estimada | Hosting, base de datos, Redis y herramientas de desarrollo colaborativo. | $150.000 |
| **Costo total inicial estimado del proyecto** | Suma del desarrollo y el primer mes de operación en la nube. | **$4.950.000 CLP** |

**Nota:** El monto total estimado corresponde a una valoración académica fija, sin fines comerciales, que refleja el esfuerzo técnico y los recursos requeridos para implementar el sistema completo en su versión mínima viable (MVP).

---

# 13. Propuesta Formal y Cronograma de Trabajo

## Objetivo General

Desarrollar un sistema de gestión integral para tiendas de abarrotes, denominado ABARROTECH, que permita administrar productos, ventas, stock y usuarios mediante una API RESTful, optimizando los procesos administrativos y reduciendo errores en el control de inventario.

## Objetivos Específicos

- Implementar operaciones CRUD para productos, ventas y usuarios.  
- Incorporar autenticación mediante JWT y manejo de sesiones con Redis.  
- Utilizar MongoDB Community servel para la persistencia de datos.  
- Implementar Docker para contenerización y despliegue.  
- Generar reportes básicos y documentar pruebas en Postman y GitHub.

---

## Cronograma de Trabajo

| **Semana** | **Etapa** | **Actividades Principales** | **Responsable(s)** |
|-------------|-----------|-----------------------------|--------------------|
| 1 | Análisis | Levantamiento de requerimientos y definición de datos. | Todo el equipo |
| 2 | Diseño | Modelado de base de datos y definición de endpoints. | Nicolás / Michael |
| 3–4 | Desarrollo | Implementación del CRUD de productos, usuarios y ventas. | Michael / Roberto |
| 5 | Testing | Pruebas unitarias e integración con Postman. | Roberto / Nicolás |
| 6 | Documentación | Elaboración del informe técnico y anexos. | Felipe / Nicolás |
| 7 | Presentación | Exposición final y revisión del sistema. | Todo el equipo |

**Duración total estimada:** 7 semanas  
**Entregables:** API funcional + informe PDF + repositorio GitHub documentado.

---

# 14. Criterios de Aceptación y Garantías
>>>>>>> feature/criterio_de_aceptacion

- Endpoints CRUD funcionales y verificados.  
- Autenticación JWT y contraseñas encriptadas.  
- API documentada y probada en Postman.  
- Corrección de errores durante 4 semanas posteriores a la entrega.  
- Las contraseñas deben almacenarse cifradas con bcrypt.  
- Todos los endpoints deben responder con códigos HTTP correctos (200, 201, 404, 500).

<<<<<<< HEAD
# Proveedor

-- ID_Proveedor

-- Nombre

-- Contacto

-- Correo
=======
---

# 15. Próximos Pasos

- Confirmación del alcance del proyecto: revisión del documento y validación de requerimientos funcionales.  
- Configuración del entorno de desarrollo: preparación del entorno con Docker y conexión a MongoDB Community y Redis.  
- Definición técnica de endpoints: diseño de los endpoints y esquemas de datos para la API.  
- Inicio del desarrollo de la API REST: implementación de los módulos CRUD, autenticación y manejo de sesiones.  
- Pruebas unitarias e integración: validación en Postman y registro de evidencias.  
- Entrega del documento técnico final: documentación y carga en GitHub.  
- Presentación final: exposición del sistema en ejecución y validación de criterios de aceptación.

---

# 15. Conclusión
>>>>>>> feature/criterio_de_aceptacion

El sistema ABARROTECH representa una solución integral para la digitalización de tiendas de abarrotes.  
Gracias a su arquitectura basada en Node.js, MongoDB, Redis y Docker, ofrece una plataforma confiable, escalable y adaptable a futuras ampliaciones, como una interfaz web o integración con servicios externos del SII.  
Con su desarrollo, se busca modernizar la gestión comercial, optimizar recursos y mejorar la toma de decisiones mediante información precisa y actualizada.  

<<<<<<< HEAD
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

=======
En el futuro, ABARROTECH podrá ampliarse con una interfaz web o móvil y una integración con el Servicio de Impuestos Internos (SII) para emisión de boletas electrónicas.
>>>>>>> feature/criterio_de_aceptacion

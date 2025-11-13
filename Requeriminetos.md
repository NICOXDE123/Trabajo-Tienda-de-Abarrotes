### 10. Requisitos no Funcionales

-- Seguridad: cifrado de contraseñas y control de acceso por roles.

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

---

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

---

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

---

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

---

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

- Endpoints CRUD funcionales y verificados.  
- Autenticación JWT y contraseñas encriptadas.  
- API documentada y probada en Postman.  
- Corrección de errores durante 4 semanas posteriores a la entrega.  
- Las contraseñas deben almacenarse cifradas con bcrypt.  
- Todos los endpoints deben responder con códigos HTTP correctos (200, 201, 404, 500).

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

El sistema ABARROTECH representa una solución integral para la digitalización de tiendas de abarrotes.  
Gracias a su arquitectura basada en Node.js, MongoDB, Redis y Docker, ofrece una plataforma confiable, escalable y adaptable a futuras ampliaciones, como una interfaz web o integración con servicios externos del SII.  
Con su desarrollo, se busca modernizar la gestión comercial, optimizar recursos y mejorar la toma de decisiones mediante información precisa y actualizada.  

En el futuro, ABARROTECH podrá ampliarse con una interfaz web o móvil y una integración con el Servicio de Impuestos Internos (SII) para emisión de boletas electrónicas.

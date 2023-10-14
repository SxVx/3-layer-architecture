# Arquitectura de 3 capas

La arquitectura de tres capas es un patrón de diseño de software utilizado para organizar una aplicación en tres componentes distintos o capas, cada uno con una función específica. 

- **Capa de Presentación (Interfaz de Usuario):**
  - Su función principal es la presentación de datos y la captura de interacciones del usuario.
  - No contiene lógica de negocio significativa; en su lugar, se comunica con la capa de lógica de negocio para procesar solicitudes y presentar resultados.
- **Capa de Lógica de Negocio (Capa de Aplicación o Capa de Servicios):**
  - Puede incluir servicios, controladores o componentes que gestionan la lógica de la aplicación.
  - Comunica con la capa de acceso a datos para recuperar o almacenar información en la base de datos.
  - Actúa como un intermediario entre la capa de presentación y la capa de acceso a datos.
- **Capa de Acceso a Datos (Capa de Persistencia):**
  - Proporciona funciones para acceder y modificar datos almacenados.
  - A menudo utiliza un ORM (Object-Relational Mapping) o un sistema de conexión a bases de datos para simplificar las operaciones de acceso a datos.
  - La capa de lógica de negocio se comunica con esta capa para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la base de datos.

---

# Esquema de directorios

Para usar la arquitectura de 3 capas se usa:
- **routes:** como capa de presentación
  - v1/routes - es para el versionado de la api, su implementación se encuentra en src/index.js
- **controllers y services:** como capa lógica de negocio
  - los controllers hacen uso de los services
  - los services hacen uso de los modelos definidos en database e implementan la lógica para su uso por los controllers
- **database:** como Capa de Acceso a Datos
  - database/db.json - la base de datos representada por el archivo json
  - database/workout - simula ser el orm para la bd
  - database/utils - Solo es de apoyo para la escritura en el json
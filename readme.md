# Backend de Gestión de Actores

Este proyecto es la parte backend de una aplicación web para la administración de actores, desarrollado con Node.js y PostgreSQL como base de datos.

---

## Instalación de Dependencias

Ejecuta el siguiente comando en la raíz del proyecto para instalar todas las dependencias necesarias:

```
npm install
```

---

## Inicio del Servidor

Para iniciar el servidor en modo desarrollo, utiliza el siguiente comando:

```
npm run dev
```

Por defecto, el servidor ejecutará en el puerto 4200.

---

## Configuración del Archivo (.env)

El archivo `.env` define las variables de entorno necesarias para que la aplicación funcione correctamente. A continuación, se detallan las configuraciones clave:

```
PORT=<puerto>

DB_URL_PG=postgresql://<usuario>:<contraseña>@localhost:5432/<nombre_de_la_base_de_datos>

SECRET_KEY=<clave_secreta>
```

---

## Rutas para Postman

A continuación se muestran algunas de las principales rutas que puedes utilizar para probar la API en Postman:

- **Autenticación (GET)**: `http://localhost:4200/auth?usuario=<usuario>&contrasena=<contrasena>`
  - _Nota_: Reemplaza `<usuario>` y `<contrasena>` con los valores correspondientes.
  
- **Crear nuevo actor (POST)**: `http://localhost:4200/api/actores`
  - _Nota_: Envía los campos necesarios en el cuerpo de la solicitud para crear un actor.

- **Obtener información de un actor (GET)**: `http://localhost:4200/api/actores/<id>`
  - _Nota_: Reemplaza `<id>` con el ID del actor que deseas consultar.

- **Listar todos los actores (GET)**: `http://localhost:4200/api/actores?page=<page>&pageSize=<pageSize>`
  - _Nota_: Utiliza `<page>` y `<pageSize>` para paginar los resultados.

- **Actualizar un actor (PUT)**: `http://localhost:4200/api/actores/<id>`
  - _Nota_: Reemplaza `<id>` con el ID del actor que deseas actualizar.

- **Eliminar un actor (DELETE)**: `http://localhost:4200/api/actores/<id>`
  - _Nota_: Reemplaza `<id>` con el ID del actor que deseas eliminar.

---

## Base de Datos

Este proyecto utiliza una base de datos PostgreSQL llamada `prueba`. Para replicar esta base de datos en tu entorno local, puedes utilizar el archivo `db.sql` ubicado en la raíz del proyecto.
# Mi-Proyecto
Proyecto Final: Desarrollo de REST APIs en Node.js con PostgreSQL e integración en React

# Gestión de Items - Proyecto React + Node.js + PostgreSQL

## Descripción

Esta aplicación permite gestionar una lista de ítems con funcionalidades completas de CRUD (Crear, Leer, Actualizar y Eliminar). Está desarrollada con un backend en Node.js y Express que se conecta a una base de datos PostgreSQL, y un frontend en React que consume los endpoints RESTful para mostrar y modificar datos en tiempo real.

---

## Funcionalidades principales

- Visualizar todos los ítems almacenados en la base de datos.
- Crear nuevos ítems con nombre, descripción y precio.
- Editar y actualizar ítems existentes.
- Eliminar ítems.
- Visualizar estadísticas generales: total de ítems y precio promedio.
- Manejo de errores con mensajes claros tanto en backend como en frontend.

---

## Tecnologías usadas

- **Backend:** Node.js, Express, PostgreSQL, pg, dotenv, cors
- **Frontend:** React, axios
- **Herramientas:** GitHub para control de versiones

---

## Requisitos previos

- Node.js instalado (https://nodejs.org/)
- PostgreSQL instalado y configurado (https://www.postgresql.org/)
- Cliente Git para clonar el repositorio

---

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/MomazosElMonte/Mi-Proyecto.git
cd mi-proyecto

##Crea una base de datos en PostgreSQL con los siguientes valores:
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  descripcion TEXT,
  precio NUMERIC(10,2)
);


##Configura tu archivo .env
DB_HOST=localhost
DB_PORT=5432
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=mi_proyecto
PORT=5000

/* por obvias razones mi archivo .env no esta incluido en el repositorio

##Instalar dependencias backend y ejecutar servidor
bash
cd backend
npm install
node index.js

##Instalar dependencias frontend y ejecutar React
En otra terminal:
bash
cd frontend
npm install
npm start

##Autor
160808252+MomazosElMonte@users.noreply.github.com

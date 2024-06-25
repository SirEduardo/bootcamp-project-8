# API de Videojuegos 

Esta API permite gestionar las plataformas, juegos y usuarios proporcionando endpoints para crear, leer, actualizar y eliminar. Está construida con Node.js, Express y MongoDB.

## Instalación


1. Instala las dependencias:
    ```sh
    npm install
    ```

2. Instala las dependencias de desarrollo:
    ```sh
    npm install -D
    ```

3. Inicia el servidor:
    ```sh
    npm run dev
    ```
    
El servidor estará disponible en `http://localhost:3000`.

4. Se conecta a la BBDD

## Endpoints

### Usuarios

#### Obtener todos los Usuarios
- **URL:** `/api/v1/user`
- **Método:** `GET`
- **Descripción:** Obtiene una lista de todos los usuarios en la base de datos siempre y cuando seas el admin.

#### Crear un nuevo usuario
- **URL:** `/api/v1/user`
- **Método:** `POST`
- **Descripción:** Crea un nuevo usuario en la base de datos.
- **Cuerpo de la solicitud:**
    ```json
    {
        "userName": "Nombre del usuario",
        "password": "Contraseña del usuario",
        "rol": "Rol del usuario"
    }
    ```

#### Actualizar un usuario
- **URL:** `/api/v1/user/:id`
- **Método:** `PUT`
- **Descripción:** Actualiza la información de un usuario existente en la base de datos siempre y cuando seas el admin.
- **Parámetros de la URL:**
    - `id`: ID del usuario a actualizar.
- **Cuerpo de la solicitud:**
    ```json
    {
        "rol": "Nuevo rol del usuario"
    }
    ```

#### Eliminar un usuario
- **URL:** `/api/v1/user/delete/:id`
- **Método:** `DELETE`
- **Descripción:** Elimina cualquier usuario existente de la base de datos si eres el admin.
- **Parámetros de la URL:**
    - `id`: ID del Usuario a eliminar.
- **Autentificación:** Se requiere el token del administrador para su validación.


### Plataformas

#### Obtener todas las Plataformas
- **URL:** `/api/v1/platforms`
- **Método:** `GET`
- **Descripción:** Obtiene una lista de todas las Plataformas en la base de datos.

#### Crear una nueva Plataforma
- **URL:** `/api/v1/platforms`
- **Método:** `POST`
- **Descripción:** Crea una nueva Plataforma en la base de datos siempre y cuando seas el admin.
- **Cuerpo de la solicitud:**
    ```json
    {
        "platform": "Nombre de la Plataforma",
        "img": "Imagen de la Plataforma"
    }
    ```

#### Actualizar una Plataforma
- **URL:** `/api/v1/platforms/:id`
- **Método:** `PUT`
- **Descripción:** Actualiza la información de una Plataforma existente en la base de datos siempre y cuando seas el admin.
- **Parámetros de la URL:**
    - `id`: ID de la Plataforma a actualizar.
- **Cuerpo de la solicitud:**
    ```json
    {
        "platforms": "Nuevo nombre de la Plataforma",
        "img": "Nueva imagen a añadir o actualizar"
    }
    ```

#### Eliminar una Plataforma
- **URL:** `/api/v1/platforms/:id`
- **Método:** `DELETE`
- **Descripción:** Elimina una Plataforma existente de la base de datos siempre y cuando seas el admin.
- **Parámetros de la URL:**
    - `id`: ID de la Plataforma a eliminar.

### Videojuegos

#### Obtener todos los Videojuegos
- **URL:** `/api/v1/videogames`
- **Método:** `GET`
- **Descripción:** Obtiene una lista de todos los Videojuegos en la base de datos.

#### Crear un nuevo Videojuego
- **URL:** `/api/v1/videogames`
- **Método:** `POST`
- **Descripción:** Crea un nuevo Videojuego en la base de datos siempre y cuando seas el admin.
- **Cuerpo de la solicitud:**
    ```json
    {
        "gameName": "Nombre del Videojuego",
        "img": "imagen del Videojuego",
        "price": "Precio del Videojuego",
        "category": "categoria a la que pertenece el Videojuego"
    }
    ```

#### Actualizar un Videojuego
- **URL:** `/api/v1/videogames/:id`
- **Método:** `PUT`
- **Descripción:** Actualiza la información de un Videojuego existente en la base de datos siempre y cuando seas el admin.
- **Parámetros de la URL:**
    - `id`: ID del Videojuego a actualizar.
- **Cuerpo de la solicitud:**
    ```json
    {
        "gameName": "Nuevo nombre del Videojuego",
        "img": "Nuev imagen del Videojuego",
        "price": "Nuevo precio del Videojuego",
        "category": "Nueva categoria del Videojuego"
    }
    ```

#### Eliminar un Videojuego
- **URL:** `/api/v1/videogames/:id`
- **Método:** `DELETE`
- **Descripción:** Elimina un Videojuego existente de la base de datos siempre y cuando seas el admin.
- **Parámetros de la URL:**
    - `id`: ID del viVideojuego a eliminar.

## Manejo de Errores

- **Ruta no encontrada:**
    - **URL:** `*`
    - **Método:** `ALL`
    - **Descripción:** Cualquier ruta no definida devolverá un error 404 con el mensaje "Route not found".

- **Manejador de errores genérico:**
    Cualquier error inesperado devolverá un error 500 con el mensaje "Unexpected error".

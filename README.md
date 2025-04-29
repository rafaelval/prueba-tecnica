## Desarrollo de la prueba

Herramientas y librerías usadas.

1. **Redux** para administrar el estado global.
2. **React Router Dom** para las rutas.
3. **MaterialUI** Para los estilos y componentes de interfaz.

---

## Por qué Redux?

Porque me resulta muy amigable a la hora de almacenar, actualizar y manejar los datos en la aplicación y ofrece un estructura de datos rápida, limpia y organizada para acceder desde cualquier lugar a ellos, tambien ofrece escalabilidad.

---

## Arquitectura
React naturalmente se presta para usar una arquitectura basada en componentes, donde cada uno de ellos tenga una tarea especifica y pueda ser reutilizable en distintas partes del proyecto, de esta manera mantener la base del proyecto limpia, entendible y escalable.

---

## Información del proyecto
La aplicacion  básicamente comienza con un formulario, en el cual aparecen los campos a llenar con su respectivo control, tanto de tipos, como de campos vacíos, tambien se controla que no hayan codigo de producto repetidos.

En el listado de los productos, se eligió una vista de tabla, mas cómoda a la vista, cada elemento con su respectivo botón para borrar, en la parte superior, está tanto la barra de búsqueda como los filtros para ordenar los elementos, los cuales estan guardados en el localStorage.

Además, la interfaz tiene un encabezado dinámico que cambia según el componente mostrado, y un botón de navegación para cambiar de vista.

Los tests unitarios fueron desarrollados con Jest y Testing Library, cubriendo aproximadamente el 70% del código de la aplicación.

---

## Estructura del proyecto

- App
  - ProductList
      - ProductTableRow
  - CreateProduct

- CustomHooks
- Utilities
- Redux      

---

## Rutas

- `/` Página de inicio
- `/create-product` Página de registro de producto    

---

### Otros

Instalar con `npm i`

Correr con `npm start` 

El proyecto no posee variables de entorno

Desplegado en vercel en la direccion: `https://prueba-tecnica-olive-one.vercel.app/`

---
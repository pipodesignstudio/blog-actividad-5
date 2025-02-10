# Entrega de la actividad 5: Blog En Angular

## Pasos para ejecutar:

1. Reconstruir la carpeta node_modules

```bash
npm i
```

2. Ejecutar el servidor

```bash
ng serve
```

## Estructura del proyecto

1. La única ruta del proyecto está ubicado en src/app/app-component.ts que contiene el layout base y se encarga de hacer el fecth de la data base del blog
2. Todos los componentes con funcionalidades están ubicados en src/app/components
3. Los servicios relativos al blog y a la gestión del tema del usuario están en src/app/services e indexa los servicios con un archivo de barril
4. La carpeta interfaces busca tipar el objeto BlogPost
5. La carpeta data finge contener el initialdata que podría venir de un servidor. Se opta por tiparla en TS para aplicar funcionalidades extra
6. La carpeta utils contiene algunas funciones reutilizables para rellenar más rápido el formulario o crear el cuerpo del contenido.

## Paquetes de terceros y estilos

A fin de una iteración más rápida y con mejor resultado de UI para el usuario, el aplicativo consume [primeng](https://primeng.org/installation) en combinación con [tailwindcss](https://tailwindcss.com/). El objetivo de ambas dependencias no es ahorrar ni simplificar la práctica (ninguna validación o función requerida ha sido ejecutada fuera de los paquetes propios de Angular) sino la de poder potenciar el resultado final del entregable.

## Persistencia de datos

La manipulación el Array que contiene los posts se hace instrumentalizando el localstorage del usuario. Para reestablecer bastará con eliminar la caché o usar la navegación en incógnito. Se incluye validación de peso de imágenes en el form para evitar llenar el localstorage y recibir errores del API.

## Rúbrica pretendida

1. Creación del proyecto

```bash
ng new blog-actividad-5
cd blog-actividad-5
code .
ng serve
```

2. Creación del componente blog y cargarlo dentro de la aplicación principal

```
src/app/components/blog-list
```

3. Maquetar las áreas dentro del componente con html y css.

Si bien en esta parte se ha empleado Tailwindcss principalmente todo ha sido diseñado apoyándonos en un diseño mobile first y usando clases de flexbox

4. Creación del array de datos e inicialización dos noticias dentro de propio array siguiendo el interfaz de datos.

```ts
    // src/app/services/blog.service.ts

    private seedAndStoreData() {
        if (!localStorage.getItem(this._sk)) {
            const posts:BlogPost[] = initialData; // 4 Posts para un layout más nutrido
            localStorage.setItem(this._sk, JSON.stringify(posts));
        }
    }

```

5. Pintar los datos del array dentro de la zona del componente correspondiente.

```
src/app/components/blog-list
```

Se recibe con el decorador @Input el array de posts ya sean desde el componente padre en la primera generación o al actualizarse desde el form.

6. Recoger los datos de una noticia dentro del formulario y hacer la validación de campos vacíos.

Lógica aplicada en el componente

```
src/app/components/new-post-form
```

7. Insertar los datos dentro del array y comprobar que se pintan en el listado.

```ts
    // src/app/services/blog.service.ts

    addPost(post: BlogPost): void {
        const posts = this.getPosts();
        posts.unshift(post);
        localStorage.setItem(this._sk, JSON.stringify(posts));
    }

```
Se recibe el post validado del formulario y se añade al principio del array con unshift refrescando el localstorage. Todos los componentes son redibujados. 
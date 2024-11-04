# 🚀 React Native 404 Challenge

¡Bienvenido al repositorio del Challenge React Native 404! 🎉 Este proyecto fue desarrollado para demostrar el manejo de tecnologías modernas y la construcción de código mantenible utilizando **React Native** y **TypeScript**.

## 🎯 Objetivo

- Desarrollar una aplicación React Native para demostrar el manejo de las tecnologías involucradas y construcción de código mantenible.
- Compartir un repositorio Git para evaluar las prácticas de uso del sistema de versionado y acceder al código fuente.
- Proporcionar el APK de release.

## 📝 Requerimientos

- Uso de **TypeScript**.
- Implementación de **tests** para garantizar la calidad del código.

## 🖥️ Ejercicio

La aplicación cuenta con las siguientes características:

- Una pantalla principal con un **input de texto** y resultados de búsqueda.
- Validación de que si el usuario ingresa menos de 3 caracteres, se muestra un **error** en el input de texto.
- Consulta a la **API de repositorios de GitHub** mientras el usuario escribe (mínimo 3 caracteres):
  - [API de GitHub](https://docs.github.com/en/rest/search?apiVersion=2022-11-28)
- Mientras se obtienen resultados, se muestra un **loader**.
- Se muestran un máximo de **20 resultados**.
- Cada resultado incluye:
  - Avatar del dueño del repositorio.
  - Nombre del repositorio.
  - Total de **estrellas** del repositorio.
- Resultados ordenados por cantidad de estrellas.
- En la parte inferior, se muestra la **cantidad total de estrellas** de todos los resultados.
- Los usuarios pueden **seleccionar** y **deseleccionar** items.
- Cada item permite abrir la **URL** del repositorio en el navegador.
- Botón para **eliminar** los items seleccionados.
- Botón para navegar a otra pantalla donde se ven solo los items seleccionados.

## 📦 Instalación

Para instalar y ejecutar este proyecto, sigue estos pasos:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu_usuario/react-app-404.git

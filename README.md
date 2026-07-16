# Pronóstico del Clima APP

Aplicación web interactiva para la consulta del clima en tiempo real, desarrollada con un enfoque en escalabilidad, tipado estático y principios de arquitectura limpia.

## Arquitectura 
Para esta aplicación he utilizado una arquitectura basada en **MVVM** adaptada para el ecosistema moderno de React con **Redux Toolkit** y **TypeScript**:

* **Model:** Se implementaron interfaces estrictas de TypeScript para tipar la respuesta de la API y asegurar el cumplimiento del Principio de Responsabilidad SRP.
* **ViewModel Redux Toolkit:** `redux/weatherSlice.ts` centraliza el estado global de la aplicación idioma, ciudad y datos climáticos, gestionando la lógica  de forma segura mediante Thunks (`createAsyncThunk`).
* **View (Componentes React + TSX):** Componentes presentacionales desarrollados en `App.tsx` que accionan y consumen el estado global de forma completamente reactiva y tipada.


##  Buenas Prácticas  (SOLID)
* **SRP:**  Separación entre la interfaz visual (TSX), la gestión de estado global (Redux) y las peticiones HTTP (Axios).
* **Open/Closed Principle (OCP):** El diccionario de traducciones centralizado y tipado en `utils/dictionary.ts`. para agregar idiomas 

## Tecnologías y Herramientas
* **ReactJS (Vite)**
* **TypeScript** Tipado 
* **Redux Toolkit & React-Redux** Manejo de estado global
* **Axios** Cliente HTTP basado en promesas
* **OpenWeatherMap API** Consumo de datos meteorológicos
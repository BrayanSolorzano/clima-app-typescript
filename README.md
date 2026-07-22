# Pronóstico del Clima APP

Aplicación web interactiva para la consulta del clima en tiempo real, desarrollada con un enfoque en escalabilidad, tipado y principios de arquitectura limpia.

## Arquitectura MVVM

Para esta aplicación se utilizó una arquitectura basada en **MVVM (Model-View-ViewModel)** adaptada al ecosistema de React con **Redux Toolkit** y **TypeScript**:

### Model Capa de Datos

- **`src/services/weatherService.ts`**: Cliente HTTP encargado exclusivamente de la comunicación con la API de OpenWeatherMap. Define interfaces TypeScript estrictas `ForecastItem`, `WeatherForecastResponse`, `ForecastCity` que mapean la respuesta del endpoint `/forecast` (previsión de 5 días con intervalos de 3 horas). Cumple con el Principio de Responsabilidad Única SRP: solo se ocupa de la petición HTTP y el tipado de datos.

- **`src/utils/dictionary.ts`**: Diccionario de traducciones (español e inglés) completamente tipado con la interfaz `DictionaryItem`

### ViewModel Gestión de Estado

- **`src/redux/weatherSlice.ts`**: Centraliza el estado global de la aplicación (idioma, ciudad seleccionada, datos meteorológicos, estado de carga y errores). Utiliza `createAsyncThunk` con genéricos tipados para las operaciones asíncronas, y extrae mensajes de error de Axios de forma segura mediante `axios.isAxiosError()`.

- **`src/redux/store.ts`**: Configuración del store de Redux con tipos exportados (`RootState`, `AppDispatch`) para garantizar seguridad de tipos en toda la aplicación.

### View Componentes React

- **`src/components/`**: Componentes presentacionales modulares, cada uno en su propia carpeta y con interfaces de Props tipadas:
  - `SearchBar`: Gestiona su propio estado local del input 
  - `WeatherCard`: Muestra los datos climáticos actuales, calcula temperaturas mínima/máxima del día y renderiza la previsión por horas.
  - `LanguageSelector`: Permite cambiar entre inglés y español con resaltado visual del idioma activo.
  - `DefaultCities`: Muestra las 3 ciudades predeterminadas con indicador visual de la ciudad seleccionada.

- **`src/components/index.ts`**: Archivo barrel para centralizar las exportaciones de componentes.

- **`src/App.tsx`**: Componente raíz que orquesta la comunicación entre los componentes y el store de Redux.

## Buenas Prácticas (SOLID)

 **SRP**  Separación clara entre la interfaz visual (componentes TSX), la gestión de estado (Redux Toolkit) y las peticiones HTTP Axios en `weatherService.ts`
 **OCP**  El diccionario de traducciones y la lista de ciudades son extensibles sin modificar los componentes existentes. 
 **ISP**  Las interfaces de Props de cada componente exponen solo las propiedades que el componente necesita. 
 **DIP**  Los componentes dependen de abstracciones interfaces TypeScript y del store de Redux, no de implementaciones concretas de servicios. 

## Decisiones Técnicas

- **se utiliza `/forecast`, que proporciona intervalos de 3 horas para los próximos 5 días.

- **Cálculo de temperaturas mínima y máxima del día**:

- **Tema Material-UI**: Se creó un tema centralizado `src/theme/theme.ts`  aplicado globalmente mediante `ThemeProvider`.

## Tecnologías y Herramientas

- **ReactJS Vite**
- **TypeScript** — Tipado estático estricto
- **Redux Toolkit & React-Redux** — Manejo de estado global predecible
- **Axios** — Cliente HTTP basado en promesas
- **Material-UI (MUI)** — Sistema de diseño con componentes estilizados
- **OpenWeatherMap API** — Consumo de datos meteorológicos

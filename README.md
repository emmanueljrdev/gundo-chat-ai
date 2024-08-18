<h1 align="center">GUNDO: Desafío 3 - Chat con IA</h1>

## Tabla de contenidos:
---

- [Descripción y contexto](#descripción-y-contexto)
- [Guía de instalación](#guía-de-instalación)
- [Guía de uso](#guía-de-uso)
- [Información adicional](#información-adicional)


## Descripción y contexto
---
Para la realización de mi prueba técnica decidí elegir como primer desafío el "Desafío 3", que consistía en la creación de un Chat de Nutrición Basado en AI. Fue un largo camino pues nunca trabajé en ningún tipo de proyectos relacionados pero logré cumplir los objetivos con exito.

El chat es básico, tiene un historial guardado en un archivo JSON que podremos encontrar en la ruta "/src/data". El mismo consta de una fecha para poder organizarlos cronologicamente seguido de el mensaje realizado por el usuario y la respuesta de la IA.
 	
## Guía de instalación
---
Comenzamos realizando con la terminal de nuestro gusto lo siguiente:
    ``` cd .\back-end\ ``` y hacemos ```npm i ``` para la instalación de las dependencias utilizadas.

En el siguiente paso, deberemos hacer lo mismo con el front-end: ``` cd .\front-end\ ``` y hacemos ``` npm i ``` para la instalación de todas las dependencias utilizadas.

En el back-end será NECESARIO crear un archivo ".env" en el cuál agreguemos una variable con el siguiente nombre: ``` GROQ_API_KEY ```. 

- Para la obtención de la API_KEY será necesario crear una cuenta en www.console.groq.com.
- Una vez creado el usuario, se tendrán que dirigir al apartado "ÄPI Keys"
- Ya allí, clicaremos sobre el botón "Create API Key", les pedirá que le asignen un nombre de máximo 50 caracteres y una vez asignado, les dará su API_KEY.
- Una vez con el API_KEY copiado al portapapeles, lo pegaremos tal cual en el ".env" que creamos: ``` GROQ_API_KEY=YOUR_API_KEY ```

## Guía de uso
---
Con la terminal de nuestro gusto, realizaremos lo siguiente:
    ``` npm run dev ``` para iniciar el servidor del back-end una vez nos encontremos dentro de su carpeta raíz. Cuando nos aparezca el mensaje "El servidor está corriendo en el puerto 3001" ya podremos realizar peticiones.

En el siguiente paso, deberemos hacer lo mismo con el front-end: ``` npm run dev ``` y posteriormente en el navegador de su preferencia abrir la URL "localhost/5173". 

Una vez completados estos pasos, ya habremos realizado todo lo necesario para hacer uso de la aplicación.

### Dependencias
Las dependencias que utilicé fueron las siguientes: 

Back-end: 
- Axios
- Body-parser
- Cors
- Dotenv
- Express
- Groq-sdk
- Nodemon

Front-End:
- ChakraUI Icons
- ChakraUI
- Emotion
- Axios
- Framer-Motion
- React
- React-Icons
- React-Router-Dom

## Información adicional
---
Para explicar más a fondo el desarrollo de la aplicación, he de acotar las decisiones en diseño que decidí utilizar. La estructuración de los diferentes componentes que conforman el Front-End fue inspirado en la de www.poe.com, basándome en su diseño simple de los chats de uso.

A su vez, la paleta de colores utilizada fue extraída de la misma aplicación de Gundo 💚.

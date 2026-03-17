# akioia

Un módulo NO OFICIAL para el uso de la API de AkioIA.

Puedes ver la documentación de la API [aquí](https://akiomae.xyz/api/AI/AkioIA/Doc//).

## Instalación

```bash
npm i akioia
```

## Uso

Simplemente usa la funcion: `create()` para obtener la respuesta de la API. [`Ver Docs.`](https://akiomae.xyz/api/AI/AkioIA/Doc/)


### Un ejemplo básico:

```ts
// .ts

// Importar
import * as AkioIA from "akioia";
// import { AkioGlobal } from "akioia";

// Crear instancia
const Chat = new AkioIA.AkioGlobal();
// const Chat = new AkioGlobal();


// Para evitar problemas de peticion, no dejes el prompt en blanco.
async function sendChat(prompt: string) {
    let response = await Chat.create({
        // Ejemplo de ID:
        id: `guild_123_username_456`,
        username: "user_name",
        context:     "Eres un asistente amable que ayuda con preguntas técnicas",
        personality: "Amable, profesional y entusiasta",
        name:        "Asistente",
        prompt:      "¿Cuál es la capital de Japón?",
        genero:      "MASCULINO",
        nsfw:        false,
        tokens:      1500
    });

    console.log(response);
}

sendChat("¿Cuál es la capital de Japón?");
/* Respuesta: 
{
  status: 200,
  error: undefined,
  data: {
    id: 'guild_123_username_456',
    response: "¡La capital de Japón es Tokio! Es una de las ciudades más grandes del mundo...",
    modelo_usado: 'AK-v3.5-BETA'
  }
}
*/

```

## Utilidades

Actualmente, contiene un generador de UID.

En general, solo recomiendo usarlo para proyectos de prueba, ya que puede generar IDs repetidos.

Un ejemplo de este:

```ts
// .ts

import { UID } from "akioia";

let options = {
    includeBrackets: true,
    includeSymbols: false,
    length: 40,
}

let uid = UID(options);
console.log(uid) // {N7UKNYnHcsJkLG1Q7PAajRWkNKse2gaNNEspU0Nq}
```

## Licencia

MIT License
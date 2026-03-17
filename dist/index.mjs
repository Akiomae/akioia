// src/Classes/AkioIAModule.ts
var AkioGlobal = class {
  /**
   * Crea/Continua una conversación con AkioIA.
   * 
   * @param endpoint Datos necesarios para la conversación.
   * @returns AkioIAPromise
   */
  async create(endpoint) {
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify(endpoint);
    let APIResponse = await fetch("https://akiomae.xyz/api/AI/AkioIA/", {
      method: "POST",
      headers,
      body
    });
    let JSONResponse = await APIResponse.json();
    let AkioChatBotResponse = { status: 200 };
    if (APIResponse.status === 200) {
      AkioChatBotResponse.data = JSONResponse;
      AkioChatBotResponse.status = 200;
    } else {
      AkioChatBotResponse.error = `${APIResponse.statusText}: ${JSONResponse.error}`;
      AkioChatBotResponse.status = APIResponse.status;
    }
    return AkioChatBotResponse;
  }
};
var AkioChatBot = class {
  /**
   * Crea/Continua una conversación con AkioIA.
   * 
   * @param endpoint Datos necesarios para la conversación.
   * @returns AkioIAPromise
   */
  async create(endpoint) {
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify(endpoint);
    let APIResponse = await fetch("https://akiomae.xyz/api/AI/AkioIA/", {
      method: "POST",
      headers,
      body
    });
    let JSONResponse = await APIResponse.json();
    let AkioChatBotResponse = { status: 200 };
    if (APIResponse.status === 200) {
      AkioChatBotResponse.data = JSONResponse;
      AkioChatBotResponse.status = 200;
    } else {
      AkioChatBotResponse.error = `${APIResponse.statusText}: ${JSONResponse.error}`;
      AkioChatBotResponse.status = APIResponse.status;
    }
    return AkioChatBotResponse;
  }
};
export {
  AkioChatBot,
  AkioGlobal
};

// src/Utils/UID.ts
var defaultValue = {
  includeBrackets: false,
  includeSymbols: false,
  length: 20
};
function UID(options = defaultValue) {
  const randLetters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randSymbols = `!@#$%^&*-_=+()[]<>:;'",./?~|\\`;
  const randAll = randLetters + randSymbols;
  let randCount = randLetters.length;
  let UID2 = "";
  if (options.includeSymbols) {
    randCount += randSymbols.length;
  }
  for (let i = 0; i < options.length; i++) {
    UID2 += randAll.charAt(Math.floor(Math.random() * randCount));
  }
  if (options.includeBrackets) {
    UID2 = `{${UID2}}`;
  }
  return UID2;
}

// src/Classes/AkioIAModule.ts
var AkioGlobal = class {
  /**
   * Crea/Continua una conversación con AkioIA.
   * 
   * @param endpoint - [Endpoint.](https://akiomae.xyz/api/AI/AkioIA/Doc/#endpoint) Datos necesarios para la conversación. 
   * @returns Promise<GlobalResponse>
   */
  async create(endpoint) {
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify(endpoint);
    let APIResponse = await fetch("https://akiomae.xyz/api/AI/AkioIA/", {
      method: "POST",
      headers,
      body
    });
    if (APIResponse.status !== 200) {
      return {
        status: APIResponse.status,
        error: `${APIResponse.statusText}: ${APIResponse.body}`
      };
    }
    let JSONResponse = await APIResponse.json();
    let akioGlobalResponse = {
      status: APIResponse.status,
      error: APIResponse.status !== 200 ? `${APIResponse.statusText}: ${JSONResponse.error}` : void 0,
      data: APIResponse.status === 200 ? JSONResponse : void 0
    };
    return akioGlobalResponse;
  }
};
export {
  AkioGlobal,
  UID
};

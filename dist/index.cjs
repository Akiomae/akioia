var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AkioGlobal: () => AkioGlobal,
  UID: () => UID
});
module.exports = __toCommonJS(index_exports);

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
   * @param endpoint - [Endpoint.](https://akiomae.xyz/api/AI/AkioIA/Doc//#endpoint) Datos necesarios para la conversación. 
   * @returns Promise<GlobalResponse>
   */
  async create(endpoint) {
    let headers = { "Content-Type": "application/json" };
    let body = JSON.stringify(endpoint);
    let APIResponse = await fetch("https://akiomae.xyz/api/AI//", {
      method: "POST",
      headers,
      body
    });
    let JSONResponse = await APIResponse.json();
    let akioGlobalResponse = {
      status: APIResponse.status,
      error: APIResponse.status !== 200 ? `${APIResponse.statusText}: ${JSONResponse.error}` : void 0,
      data: APIResponse.status === 200 ? JSONResponse : void 0
    };
    return akioGlobalResponse;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AkioGlobal,
  UID
});

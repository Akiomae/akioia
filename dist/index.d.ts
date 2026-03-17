/**
 * `Endpoint` para la petición a la IA para la generación de respuestas.
 */
type EndpointContext = {
    /**
     * Identificador único del chat/sesión. Determina qué historial de memoria se carga.
     *
     * Usa un ID único por conversación (ej: `user_123_chat_1`).
     */
    id: string;
    /**
     * Nombre del usuario que interactúa. Se usa en el contexto de la IA.
     */
    username: string;
    /**
     * 	Instrucciones del sistema para la IA. Define el rol, comportamiento y limitaciones del asistente. Equivale al "system prompt".
     */
    context: string;
    /**
     * Descripción de la personalidad del asistente. Ej: _"Amable, profesional y entusiasta"._
     */
    personality: string;
    /**
     * Nombre del asistente IA. La IA responderá como este personaje.
     */
    name: string;
    /**
     * El mensaje o pregunta del usuario en esta vuelta del chat.
     */
    prompt: string;
    /**
     * Género del asistente para coherencia gramatical.
     *
     * Valores: `MASCULINO` · `FEMENINO` · `ALEATORIO`
     */
    genero: "MASCULINO" | "FEMENINO" | "ALEATORIO";
    /**
     * `[Opcional]` Activa/desactiva filtros de contenido para adultos.
     *
     * Default: `false`. Si es `true`, la IA procesa cualquier tipo de contenido.
     */
    nsfw?: boolean;
    /**
     * `[Opcional]` Límite máximo de tokens en la respuesta. 1 token ≈ 4 caracteres.
     *
     * __Ej: `1500` ≈ 6,000 caracteres máximos de respuesta.__
     */
    tokens?: number;
    /**
     * `[Opcional]` Idioma principal del asistente. Default: `"Español"`. La IA se adapta automáticamente al idioma del usuario.
     */
    lang?: string;
    /**
     * `[Solo Discord]` Token del bot de Discord. Activa el modo Discord-Bot, donde la IA envía mensajes y archivos directamente al canal.
     */
    tokenBot?: string;
    /**
     * `[Solo Discord]` ID del canal de Discord donde el bot publicará los mensajes de estado y respuestas.
     */
    channelID?: string;
};
/**
 * Tipado [`Chat`](https://akiomae.xyz/api/AI/AkioIA/Doc//#responses) - Conversación normal, preguntas y respuestas.
 */
type ChatResponse = {
    id: string;
    response: string;
    modelo_usado: string;
};
/**
 * Tipado [`Image`](https://akiomae.xyz/api/AI/AkioIA/Doc//#responses) - Devuelve hasta 4 URLs de imágenes encontradas.
 */
type ImageResponse = {
    id: string;
    response: string;
    modelo_usado: string;
    media_urls: {
        [imageX: string]: string;
    };
};
/**
 * Tipado [`Image IA`](https://akiomae.xyz/api/AI/AkioIA/Doc//#responses) - Pollinations AI genera la imagen con el prompt mejorado.
 */
type ImageIAResponse = {
    id: string;
    response: string;
    modelo_usado: string;
    media_urls: {
        [imageX: string]: string;
    };
};
/**
 * Tipado [`Code`](https://akiomae.xyz/api/AI/AkioIA/Doc//#responses) - Bloques de código en archivos separados por lenguaje.
 */
type CodeResponse = {
    id: string;
    response: string;
    modelo_usado: string;
    code_files: {
        [codeX: string]: {
            filename: string;
            language: string;
            conent: string;
        };
    };
};
/**
 * Tipado [`TTS`](https://akiomae.xyz/api/AI/AkioIA/Doc//#responses) - Archivo de voz generado y URL de acceso.
 */
type TTSResponse = {
    id: string;
    response: string;
    modelo_usado: string;
    audio_url: string;
};
/**
 * Tipado [`Music`](https://akiomae.xyz/api/AI/AkioIA/Doc//#responses) - Pista de música generada con IA vía Pollinations.
 */
type MusicResponse = {
    id: string;
    response: string;
    modelo_usado: string;
    audio_url: string;
};
/**
 * Tipado [`Video`](https://akiomae.xyz/api/AI/AkioIA/Doc//#responses)- Video MP4 generado con IA vía Pollinations.
 */
type VideoResponse = {
    id: string;
    response: string;
    modelo_usado: string;
    video_url: string;
};
/**
 * Tipado [`Global`](https://akiomae.xyz/api/AI/AkioIA/Doc//#responses) basado en cualquier tipo de contexto.
 */
type GlobalResponse = Partial<ChatResponse> & Partial<ImageResponse> & Partial<ImageIAResponse> & Partial<CodeResponse> & Partial<TTSResponse> & Partial<MusicResponse> & Partial<VideoResponse>;
/**
 * Tipado `Status` para el estado de la respuesta.
 */
type Status = 200 | 400 | 405 | 500 | 503;
/**
 * Estructuramiento de respuesta de la API de AkioIA.
 */
type Promise$1<T> = {
    /**
     *
     */
    status: Status;
    error?: string;
    data?: T;
};
/**
 * Opciones para la generación de IDs únicos.
 */
type UIDOptions = {
    /**
     * Agrega los `{}` al inicio y al final del ID.
     *
     * Por defecto: `false`.
     */
    includeBrackets?: boolean;
    /**
     * Agrega símbolos al string.
     * Incluidos: `!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `-`, `_`, `+`, `=`, `{`, `}`, `[`, `]`, `;`, `:`, `'`, `"`, `,`, `<`, `.`, `>`, `/`, `?`, `~`, `|`, `\`
     *
     * Por defecto: `false`.
    */
    includeSymbols?: boolean;
    /**
     * Longitud máxima del ID.
     *
     * Por defecto: `20`.
     */
    length?: number;
};

/**
 * Genera un ID único para la API de AkioIA.
 *
 * @param options Opciones de generación de IDs únicos.
 * @returns string
 */
declare function UID(options?: UIDOptions): string;

/**
 * Crea un chat con AkioIA de cualquier tipo de contexto. [`Docs`](https://akiomae.xyz/api/AI/AkioIA/Doc/)
 */
declare class AkioGlobal {
    /**
     * Crea/Continua una conversación con AkioIA.
     *
     * @param endpoint - [Endpoint.](https://akiomae.xyz/api/AI/AkioIA/Doc//#endpoint) Datos necesarios para la conversación.
     * @returns Promise<GlobalResponse>
     */
    create(endpoint: EndpointContext): Promise<Promise$1<GlobalResponse>>;
}

export { AkioGlobal, type ChatResponse, type CodeResponse, type EndpointContext, type GlobalResponse, type ImageIAResponse, type ImageResponse, type MusicResponse, type Promise$1 as Promise, type Status, type TTSResponse, UID, type UIDOptions, type VideoResponse };

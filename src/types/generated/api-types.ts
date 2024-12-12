export interface paths {
    "/api/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getApiHealth"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/price/{symbol}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get price of a cryptocurrency
         * @description Returns the price of a cryptocurrency in USD
         */
        get: operations["getApiPriceBySymbol"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/secure-endpoint": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["getApiSecure-endpoint"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: never;
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getApiHealth: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default 200 */
                        status: number;
                        message: string;
                        data: {
                            wallet_id: string;
                            wallet_name: string;
                        };
                    };
                    "multipart/form-data": {
                        /** @default 200 */
                        status: number;
                        message: string;
                        data: {
                            wallet_id: string;
                            wallet_name: string;
                        };
                    };
                    "text/plain": {
                        /** @default 200 */
                        status: number;
                        message: string;
                        data: {
                            wallet_id: string;
                            wallet_name: string;
                        };
                    };
                };
            };
        };
    };
    getApiPriceBySymbol: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                symbol: "ltc" | "sol";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success response - Cost: 1 token */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default 200 */
                        status: number;
                        data: {
                            currency: string;
                            price: number;
                        };
                        tokens: {
                            consumed: number;
                            remaining: number;
                        };
                    };
                    "multipart/form-data": {
                        /** @default 200 */
                        status: number;
                        data: {
                            currency: string;
                            price: number;
                        };
                        tokens: {
                            consumed: number;
                            remaining: number;
                        };
                    };
                    "text/plain": {
                        /** @default 200 */
                        status: number;
                        data: {
                            currency: string;
                            price: number;
                        };
                        tokens: {
                            consumed: number;
                            remaining: number;
                        };
                    };
                };
            };
            /** @description Invalid symbol - Cost: 0 tokens */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default 422 */
                        status: number;
                        message: string;
                    };
                    "multipart/form-data": {
                        /** @default 422 */
                        status: number;
                        message: string;
                    };
                    "text/plain": {
                        /** @default 422 */
                        status: number;
                        message: string;
                    };
                };
            };
        };
    };
    "getApiSecure-endpoint": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}

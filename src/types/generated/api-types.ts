export interface paths {
    "/api/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check API health
         * @description Check if the API service is running and if you have access to the API
         */
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
    "/api/validate-address/{symbol}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Validate an address
         * @description Validate an address
         */
        post: operations["postApiValidate-addressBySymbol"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/balance/{symbol}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get balance of a cryptocurrency
         * @description Returns the balance of a cryptocurrency and its value in USD
         */
        get: operations["getApiBalanceBySymbol"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/send-transaction/{symbol}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send a transaction
         * @description Send a transaction to the network
         */
        post: operations["postApiSend-transactionBySymbol"];
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
            header: {
                "x-api-key": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success response - Cost: 0 tokens */
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
            header: {
                "x-api-key": string;
            };
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
    "postApiValidate-addressBySymbol": {
        parameters: {
            query?: never;
            header: {
                "x-api-key": string;
            };
            path: {
                symbol: "ltc" | "sol";
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    address: string;
                };
                "multipart/form-data": {
                    address: string;
                };
                "text/plain": {
                    address: string;
                };
            };
        };
        responses: {
            /** @description Success response - Cost: 1 tokens */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default 200 */
                        status: number;
                        data: {
                            address_valid: boolean;
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
                            address_valid: boolean;
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
                            address_valid: boolean;
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
    getApiBalanceBySymbol: {
        parameters: {
            query?: never;
            header: {
                "x-api-key": string;
            };
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
                            balance: number;
                            balance_usd: number;
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
                            balance: number;
                            balance_usd: number;
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
                            balance: number;
                            balance_usd: number;
                        };
                        tokens: {
                            consumed: number;
                            remaining: number;
                        };
                    };
                };
            };
            /** @description Coin not active - Cost: 0 tokens */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default 404 */
                        status: number;
                        message: string;
                    };
                    "multipart/form-data": {
                        /** @default 404 */
                        status: number;
                        message: string;
                    };
                    "text/plain": {
                        /** @default 404 */
                        status: number;
                        message: string;
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
    "postApiSend-transactionBySymbol": {
        parameters: {
            query?: never;
            header: {
                "x-api-key": string;
                "x-secret-key": string;
            };
            path: {
                symbol: "ltc" | "sol";
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    recipients: {
                        [key: string]: number;
                    };
                };
                "multipart/form-data": {
                    recipients: {
                        [key: string]: number;
                    };
                };
                "text/plain": {
                    recipients: {
                        [key: string]: number;
                    };
                };
            };
        };
        responses: {
            /** @description Success response - Cost: 2 tokens */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default 200 */
                        status: number;
                        data: {
                            txid: string;
                            amount: number;
                            fee: number;
                            amount_total: number;
                            destinations: {
                                [key: string]: number;
                            };
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
                            txid: string;
                            amount: number;
                            fee: number;
                            amount_total: number;
                            destinations: {
                                [key: string]: number;
                            };
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
                            txid: string;
                            amount: number;
                            fee: number;
                            amount_total: number;
                            destinations: {
                                [key: string]: number;
                            };
                        };
                        tokens: {
                            consumed: number;
                            remaining: number;
                        };
                    };
                };
            };
            /** @description Invalid recipients - Cost: 1 tokens */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default 400 */
                        status: number;
                        message: string;
                        tokens: {
                            consumed: number;
                            remaining: number;
                        };
                    };
                    "multipart/form-data": {
                        /** @default 400 */
                        status: number;
                        message: string;
                        tokens: {
                            consumed: number;
                            remaining: number;
                        };
                    };
                    "text/plain": {
                        /** @default 400 */
                        status: number;
                        message: string;
                        tokens: {
                            consumed: number;
                            remaining: number;
                        };
                    };
                };
            };
            /** @description Coin not active - Cost: 0 tokens */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default 404 */
                        status: number;
                        message: string;
                    };
                    "multipart/form-data": {
                        /** @default 404 */
                        status: number;
                        message: string;
                    };
                    "text/plain": {
                        /** @default 404 */
                        status: number;
                        message: string;
                    };
                };
            };
            /** @description Internal server error - Cost: 0 tokens */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @default 500 */
                        status: number;
                        message: string;
                    };
                    "multipart/form-data": {
                        /** @default 500 */
                        status: number;
                        message: string;
                    };
                    "text/plain": {
                        /** @default 500 */
                        status: number;
                        message: string;
                    };
                };
            };
        };
    };
}

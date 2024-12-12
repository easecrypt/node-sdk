import createClient from 'openapi-fetch';
import type { paths } from './types/generated/api-types';
import { PriceSymbol } from './types/wallet-api';

/**
 * API client for wallet-related operations
 */
export class WalletAPI {
    private client;

    constructor(
        private readonly apiKey: string,
        private readonly secretKey: string
    ) {
        this.client = createClient<paths>({
            baseUrl: 'http://localhost:3001/',
            headers: {
                'X-API-Key': this.apiKey,
                'X-Secret-Key': this.secretKey,
            },
        });
    }

    /**
     * Checks the health status of the API service
     * @returns A response indicating the API service status
     * @throws {Error} When the API request fails or returns a non-200 status
     */
    public async healthCheck() {
        const { data, error, response } = await this.client.GET('/api/health');

        if (error || response.status !== 200) {
            console.error('API Error:', error);
            throw new Error(`Unknown error occurred.`);
        }

        return data;
    }

    /**
     * Retrieves the current price for a given symbol
     * @param symbol - The trading pair symbol to get the price for
     * @returns The current price value for the specified symbol
     * @throws {Error} When the API request fails or returns a non-200 status
     */
    public async getPriceBySymbol(symbol: PriceSymbol) {
        const { data, error, response } = await this.client.GET('/api/price/{symbol}', {
            params: {
                path: { symbol },
            },
        });

        if (error || response.status !== 200) {
            console.error('API Error:', error);
            throw new Error(`Unknown error occurred.`);
        }

        return data.data.price;
    }
}

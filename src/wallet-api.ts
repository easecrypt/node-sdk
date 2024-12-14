import createClient from 'openapi-fetch';
import type { paths } from './types/generated/api-types';
import { PriceResponse, PriceSymbol, ValidateAddressSymbol } from './types/wallet-api';

/**
 * API client for wallet-related operations
 */
export class WalletAPI {
    private client;

    constructor(
        private readonly apiKey: string,
        private readonly secretKey: string
    ) {
        const baseUrl = process.env.GITHUB_ACTIONS ? 'https://easecrypt.com/' : 'http://localhost:3001/';

        this.client = createClient<paths>({
            baseUrl,
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
     * Retrieves the current price for a given cryptocurrency symbol
     * @param symbol - The cryptocurrency symbol (e.g., 'BTC', 'ETH', 'LTC')
     * @returns A Promise that resolves to a PriceResponse containing the current price data
     * @throws {Error} When the API request fails, returns a non-200 status, or when the response data is invalid
     * @example
     * ```ts
     * const api = new WalletAPI(apiKey, secretKey);
     * const price = await api.getPriceBySymbol('LTC');
     * ```
     */
    public async getPriceBySymbol(symbol: PriceSymbol): Promise<PriceResponse> {
        const { data, error, response } = await this.client.GET('/api/price/{symbol}', {
            params: {
                path: { symbol },
            },
        });

        if (error || response.status !== 200) {
            console.error('API Error:', error);
            throw new Error(`Unknown error occurred.`);
        }

        return data.data;
    }

    /**
     * Validates a cryptocurrency address for a specific symbol
     * @param address - The cryptocurrency address to validate
     * @param symbol - The cryptocurrency symbol (e.g., 'BTC', 'ETH', 'LTC')
     * @returns A Promise that resolves to a boolean indicating if the address is valid
     * @throws {Error} When the API request fails or returns a non-200 status
     * @example
     * ```ts
     * const api = new WalletAPI(apiKey, secretKey);
     * const isValid = await api.validateAddress('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'BTC');
     * // Returns: true
     * ```
     */
    public async validateAddress(address: string, symbol: ValidateAddressSymbol): Promise<boolean> {
        const { data, error, response } = await this.client.POST('/api/validate-address/{symbol}', {
            params: {
                path: { symbol },
            },
            body: { address },
        });

        if (error || response.status !== 200) {
            console.error('API Error:', error);
            throw new Error(`Unknown error occurred.`);
        }

        return data.data.address_valid;
    }
}

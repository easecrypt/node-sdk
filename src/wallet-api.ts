import createClient from 'openapi-fetch';
import type { paths } from './types/generated/api-types';
import {
    BalanceResponse,
    BalanceSymbol,
    PriceResponse,
    PriceSymbol,
    SendTransactionRecipients,
    SendTransactionResponse,
    SendTransactionSymbol,
    ValidateAddressSymbol,
} from './types/wallet-api';

/**
 * API client for wallet-related operations
 */
export class WalletAPI {
    private client;

    constructor(
        private readonly apiKey: string,
        private readonly secretKey: string
    ) {
        const baseUrl = process.env.EASECRYPT_API_URL || 'https://easecrypt.com/';

        this.client = createClient<paths>({
            baseUrl,
        });
    }

    private createApiKeyParams<T extends Record<string, any>>(params: T) {
        return {
            ...params,
            header: {
                'x-api-key': this.apiKey,
            },
        };
    }

    private createSecretKeyParams<T extends Record<string, any>>(params: T) {
        return {
            ...params,
            header: {
                'x-api-key': this.apiKey,
                'x-secret-key': this.secretKey,
            },
        };
    }

    /**
     * Checks the health status of the API service
     * @returns A response indicating the API service status
     * @throws {Error} When the API request fails or returns a non-200 status
     */
    public async healthCheck() {
        const { data, error, response } = await this.client.GET('/api/health', {
            params: this.createApiKeyParams({}),
        });

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
            params: this.createApiKeyParams({ path: { symbol } }),
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
            params: this.createSecretKeyParams({
                path: { symbol },
            }),
            body: { address },
        });

        if (error || response.status !== 200) {
            console.error('API Error:', error);
            throw new Error(`Unknown error occurred.`);
        }

        return data.data.address_valid;
    }

    /**
     * Returns the balance of a cryptocurrency and its value in USD
     * @param symbol - The cryptocurrency symbol (e.g., 'BTC', 'ETH', 'LTC')
     * @returns A Promise that resolves to a BalanceResponse containing the balance and USD value
     * @throws {Error} When the API request fails or returns a non-200 status
     * @example
     * ```ts
     * const api = new WalletAPI(apiKey, secretKey);
     * const balance = await api.getBalance('BTC');
     * // Returns: { balance: 0.250, balance_usd: 120 }
     * ```
     */
    public async getBalance(symbol: BalanceSymbol): Promise<BalanceResponse> {
        const { data, error, response } = await this.client.GET('/api/balance/{symbol}', {
            params: this.createSecretKeyParams({
                path: { symbol },
            }),
        });

        if (error || response.status !== 200) {
            console.error('API Error:', error);
            throw new Error(`Unknown error occurred.`);
        }

        return data.data;
    }

    /**
     * Sends a cryptocurrency transaction to specified recipients
     * @param recipients - An object mapping recipient addresses to amounts
     * @param symbol - The cryptocurrency symbol (e.g., 'BTC', 'ETH', 'LTC')
     * @returns A Promise that resolves to a SendTransactionResponse containing transaction details
     * @throws {Error} When the API request fails or returns a non-200 status
     * @example
     * ```ts
     * const api = new WalletAPI(apiKey, secretKey);
     * const recipients = {
     *   "ltc1q4pluxq9wgtmjn3kce03jutla93gu4vgp447fvu": 0.00031
     * };
     * const transaction = await api.sendTransaction(recipients, 'LTC');
     * // Returns: {
     * //   txid: "...",
     * //   amount: 0.00031,
     * //   fee: 0.0001,
     * //   amount_total: 0.00041,
     * //   destinations: {...}
     * // }
     * ```
     */
    public async sendTransaction(recipients: SendTransactionRecipients, symbol: SendTransactionSymbol): Promise<SendTransactionResponse> {
        const { data, error, response } = await this.client.POST('/api/send-transaction/{symbol}', {
            params: this.createSecretKeyParams({
                path: { symbol },
            }),
            body: { recipients },
        });

        if (error || response.status !== 200) {
            console.error('API Error:', error);
            throw new Error(`Unknown error occurred.`);
        }

        return data.data;
    }
}

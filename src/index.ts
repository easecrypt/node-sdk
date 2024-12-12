import fetch from 'node-fetch';
import { ApiResponse } from './types';

/**
 * API client for wallet-related operations
 */
export class WalletAPI {
    /**
     * Tests the API connection by making a GET request to the test endpoint
     * @returns Promise containing the API status
     * @throws Error if the API request fails
     */
    public async testApi(): Promise<string> {
        try {
            const response = await fetch('https://dummyjson.com/test');
            const data = (await response.json()) as ApiResponse;
            return data.status;
        } catch (error) {
            throw new Error(`API test failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
}

export default WalletAPI;

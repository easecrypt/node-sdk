import { beforeEach, describe, expect, it, vi } from 'vitest';
import { WalletAPI } from '../src/index';

// Mock the openapi-fetch module
vi.mock('openapi-fetch', () => ({
    default: vi.fn(() => ({
        GET: vi.fn(),
    })),
}));

describe('WalletAPI', () => {
    let wallet: WalletAPI;
    const mockApiKey = 'test-api-key';
    const mockSecretKey = 'test-secret-key';

    // Get the mocked client
    let mockGet: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        vi.clearAllMocks();
        wallet = new WalletAPI(mockApiKey, mockSecretKey);
        mockGet = (wallet as any).client.GET;
    });

    describe('healthCheck', () => {
        it('should return data when API call is successful', async () => {
            const mockResponse = { status: 'healthy' };
            mockGet.mockResolvedValueOnce({
                data: mockResponse,
                error: null,
            });

            const result = await wallet.healthCheck();

            expect(result).toEqual(mockResponse);
            expect(mockGet).toHaveBeenCalledWith('/api/health');
            expect(mockGet).toHaveBeenCalledTimes(1);
        });

        it('should throw error when API call fails', async () => {
            mockGet.mockResolvedValueOnce({
                data: null,
                error: { message: 'API Error' },
            });

            await expect(async () => {
                await wallet.healthCheck();
            }).rejects.toThrow('Unknown error occurred.');

            expect(mockGet).toHaveBeenCalledWith('/api/health');
            expect(mockGet).toHaveBeenCalledTimes(1);
        });
    });
});

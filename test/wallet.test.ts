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
    const mockApiKey = process.env.X_API_KEY || 'test-api-key';
    const mockSecretKey = process.env.X_SECRET_KEY || 'test-secret-key';

    // Get the mocked client
    let mockGet: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        vi.clearAllMocks();
        wallet = new WalletAPI(mockApiKey, mockSecretKey);
        mockGet = (wallet as any).client.GET;
    });

    describe('healthCheck', () => {
        it('should return data when API call is successful', async () => {
            mockGet.mockResolvedValueOnce({
                response: { status: 200 },
                data: {
                    status: 200,
                    message: "ok"
                },
                error: null,
            });

            const result = await wallet.healthCheck();

            // Only check status and message
            expect(result.status).toBe(200);
            expect(result.message).toBe("ok");
            expect(mockGet).toHaveBeenCalledWith('/api/health');
            expect(mockGet).toHaveBeenCalledTimes(1);
        });

        it('should throw error when API call fails', async () => {
            mockGet.mockResolvedValueOnce({
                response: { status: 400 },
                data: null,
                error: { message: 'API Error' }
            });

            await expect(wallet.healthCheck()).rejects.toThrow('Unknown error occurred.');

            expect(mockGet).toHaveBeenCalledWith('/api/health');
            expect(mockGet).toHaveBeenCalledTimes(1);
        });
    });
});

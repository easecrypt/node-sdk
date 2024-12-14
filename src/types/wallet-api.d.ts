import { paths } from './generated/api-types';

export type PriceSymbol = paths['/api/price/{symbol}']['get']['parameters']['path']['symbol'];
export type PriceResponse = paths['/api/price/{symbol}']['get']['responses']['200']['content']['application/json']['data'];

export type ValidateAddressSymbol = paths['/api/validate-address/{symbol}']['post']['parameters']['path']['symbol'];

export type BalanceSymbol = paths['/api/balance/{symbol}']['get']['parameters']['path']['symbol'];
export type BalanceResponse = paths['/api/balance/{symbol}']['get']['responses']['200']['content']['application/json']['data'];
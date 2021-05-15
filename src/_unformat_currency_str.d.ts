import type { currency_str_default_params_I } from './currency_str_default_params_I';
/**
 * Remove currency delimiter & commas from string representing amount.
 */
export declare function _unformat_currency_str(amount: string | number, params?: currency_str_default_params_I): string;
export { _unformat_currency_str as unformat__currency };

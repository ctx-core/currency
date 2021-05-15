import type { currency_str_default_params_I } from './currency_str_default_params_I';
/**
 * Formats currency to USD ($) with commas
 * @example
 * format__currency(1000000) // $1,000,000.00
 * @example
 * format__currency(1000000, {digits: 0}) // $1,000,000
 */
export declare function _currency_str(amount: string | number, params?: currency_str_default_params_I | string): string;
export { _currency_str as format__currency };

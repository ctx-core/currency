import type { currency_str_default_params_I } from './currency_str_default_params_I';
/**
 * Formats currency to USD ($) with commas
 * @example
 * currency_str_(1000000) // $1,000,000.00
 * @example
 * currency_str_(1000000, {digits: 0}) // $1,000,000
 */
export declare function currency_str_(amount: string | number, params?: currency_str_default_params_I | string): string;
export { currency_str_ as _currency_str, currency_str_ as format__currency, };

import { currency_str_default_opts_type } from './currency_str_default_opts_type';
/**
 * Formats currency to USD ($) with commas
 * @param {string|number} amount - The currency amount to be outputted
 * @param {*} opts
 * @param {*} opts.default
 * @param {string=} opts.currency_code
 * @param {string=} opts.currency
 * @param {Int=} opts.digits
 * @returns {string} The formatted currency with as USD
 * @example
 * format__currency(1000000) // $1,000,000.00
 * @example
 * format__currency(1000000, {digits: 0}) // $1,000,000
 */
export declare function _currency_str(amount: any, opts?: currency_str_default_opts_type | string): string;
export declare const format__currency: typeof _currency_str;

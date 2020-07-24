import { currency_str_default_opts_type } from './currency_str_default_opts_type';
/**
 * Remove currency delimiter & commas from string representing amount.
 * @param {string|number} amount
 * @param opts
 * @returns {string}
 */
export declare function _unformat_currency_str(amount: string | number, opts?: currency_str_default_opts_type): any;
export declare const unformat__currency: typeof _unformat_currency_str;

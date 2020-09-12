import type { money_str_opts_type } from './money_str_opts_type';
/**
 * Formats money value with commas (no currency type)
 * @param {string|number} amount - The currency amount to be outputted
 * @param opts
 * @returns {string} The formatted money without currency type
 */
export declare function _money_str(amount: any, opts?: money_str_opts_type): any;
export declare const format__money: typeof _money_str;

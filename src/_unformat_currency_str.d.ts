import type { currency_str_default_opts_type } from './currency_str_default_opts_type';
/**
 * Remove currency delimiter & commas from string representing amount.
 */
export declare function _unformat_currency_str(amount: string | number, opts?: currency_str_default_opts_type): string;
export { _unformat_currency_str as unformat__currency };

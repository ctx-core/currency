import type { nullish } from '@ctx-core/function';
import type { currency_str_default_params_I } from './currency_str_default_params_I';
/**
 * Remove currency delimiter & commas from string representing amount.
 */
export declare function unformat_currency_str_(amount: string | number | nullish, params?: currency_str_default_params_I | string): string | nullish;
export { unformat_currency_str_ as _unformat_currency_str, unformat_currency_str_ as unformat__currency, };

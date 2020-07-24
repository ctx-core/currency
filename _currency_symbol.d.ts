/**
 * Returns the symbol for the given `currency_code_.currency`. Defaults to `$`
 * @param {*|string}currency_code_
 * @param {string=}currency_code_.currency_code
 * @param {string=}currency_code_.currency
 * @returns {string} The currency symbol
 * @See {@link https://github.com/bengourley/currency-symbol-map}
 * @See {@link https://raw.githubusercontent.com/bengourley/currency-symbol-map/master/map.js}
 */
import { currency_code_ctx_type } from './currency_code_ctx_type';
export declare function _currency_symbol(currency_code_?: currency_code_ctx_type | string): any;
export declare const _symbol__currency: typeof _currency_symbol;

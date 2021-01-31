/**
 * Returns the symbol for the given `currency_code_.currency`. Defaults to `$`
 * @See {@link https://github.com/bengourley/currency-symbol-map}
 * @See {@link https://raw.githubusercontent.com/bengourley/currency-symbol-map/master/map.js}
 */
import type { currency_code_ctx_type } from './currency_code_ctx_type';
export declare function _currency_symbol(currency_code_?: currency_code_ctx_type | string): string;
export { _currency_symbol as _symbol__currency };

import type { currency_code_ctx_T } from './currency_code_ctx_T';
/**
 * Returns the symbol for the given `currency_code_.currency`. Defaults to `$`
 * @See {@link https://github.com/bengourley/currency-symbol-map}
 * @See {@link https://raw.githubusercontent.com/bengourley/currency-symbol-map/master/map.js}
 */
export declare function currency_symbol_(currency_code_?: currency_code_ctx_T | string): string;
export { currency_symbol_ as _currency_symbol, currency_symbol_ as _symbol__currency, };

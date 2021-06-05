import type { currency_code_ctx_T } from './currency_code_ctx_T'
import { currencies } from './currencies'
/**
 * Returns the symbol for the given `currency_code_.currency`. Defaults to `$`
 * @See {@link https://github.com/bengourley/currency-symbol-map}
 * @See {@link https://raw.githubusercontent.com/bengourley/currency-symbol-map/master/map.js}
 */
export function currency_symbol_(currency_code_?:currency_code_ctx_T|string):string {
	const currency_code =
		(
			currency_code_
			&& (
				(currency_code_ as currency_code_ctx_T).currency_code
				|| (currency_code_ as currency_code_ctx_T).currency)
		)
		|| currency_code_
	const currency_symbol =
		currencies[currency_code as string]
		|| '$'
	return currency_symbol
}
export {
	currency_symbol_ as _currency_symbol,
	currency_symbol_ as _symbol__currency,
}

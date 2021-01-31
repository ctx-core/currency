/**
 * Returns the symbol for the given `currency_code_.currency`. Defaults to `$`
 * @See {@link https://github.com/bengourley/currency-symbol-map}
 * @See {@link https://raw.githubusercontent.com/bengourley/currency-symbol-map/master/map.js}
 */
import type { currency_code_ctx_type } from './currency_code_ctx_type'
import { currencies } from './currencies'
export function _currency_symbol(currency_code_?:currency_code_ctx_type|string) {
	const currency_code =
		(
			currency_code_
			&& (
				(currency_code_ as currency_code_ctx_type).currency_code
				|| (currency_code_ as currency_code_ctx_type).currency)
		)
		|| currency_code_
	const currency_symbol =
		currencies[currency_code as string]
		|| '$'
	return currency_symbol
}
export {
	_currency_symbol as _symbol__currency
}

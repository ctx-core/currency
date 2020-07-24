/**
 * Returns the symbol for the given `currency_code_.currency`. Defaults to `$`
 * @param {*|string}currency_code_
 * @param {string=}currency_code_.currency_code
 * @param {string=}currency_code_.currency
 * @returns {string} The currency symbol
 * @See {@link https://github.com/bengourley/currency-symbol-map}
 * @See {@link https://raw.githubusercontent.com/bengourley/currency-symbol-map/master/map.js}
 */
import { currency_code_ctx_type } from './currency_code_ctx_type'
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
export const _symbol__currency = _currency_symbol

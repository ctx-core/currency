import { unformat__commas } from '@ctx-core/number'
import { currency_symbol_ } from './currency_symbol_'
import type { currency_str_default_params_I } from './currency_str_default_params_I'
/**
 * Remove currency delimiter & commas from string representing amount.
 */
export function unformat_currency_str_(amount:string|number, params?:currency_str_default_params_I) {
	return (
		amount == null
		? ((params && params.default) || amount)
		: (
			unformat__commas(
				amount
					.toString()
					.replace(currency_symbol_(params), ''))
		)
	)
}
export {
	unformat_currency_str_ as _unformat_currency_str,
	unformat_currency_str_ as unformat__currency,
}

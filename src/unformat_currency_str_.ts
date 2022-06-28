import { type nullish } from '@ctx-core/function'
import { no_comma_str_ } from '@ctx-core/number'
import { currency_symbol_ } from './currency_symbol_.js'
import type { currency_str_default_params_I } from './currency_str_default_params_I.js'
/**
 * Remove currency delimiter & commas from string representing amount.
 */
export function unformat_currency_str_(
	amount:string|number|nullish, params?:currency_str_default_params_I|string
):string|nullish {
	return (
		amount == null
		? (
			(params as currency_str_default_params_I)?.default || null)
		: (
			no_comma_str_(
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

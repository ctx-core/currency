import { unformat__commas } from '@ctx-core/number'
import { _currency_symbol } from './_currency_symbol'
import type { currency_str_default_params_I } from './currency_str_default_params_I'
/**
 * Remove currency delimiter & commas from string representing amount.
 */
export function _unformat_currency_str(amount:string|number, params?:currency_str_default_params_I) {
	return (
		amount == null
		? ((params && params.default) || amount)
		: (
			unformat__commas(
				amount
					.toString()
					.replace(_currency_symbol(params), ''))
		)
	)
}
export {
	_unformat_currency_str as unformat__currency
}

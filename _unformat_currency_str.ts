import { unformat__commas } from '@ctx-core/number'
import { _currency_symbol } from './_currency_symbol'
import { currency_str_default_opts_type } from './currency_str_default_opts_type'
/**
 * Remove currency delimiter & commas from string representing amount.
 * @param {string|number} amount
 * @param opts
 * @returns {string}
 */
export function _unformat_currency_str(amount:string|number, opts?:currency_str_default_opts_type) {
	return (
		amount == null
		? ((opts && opts.default) || amount)
		: (
			unformat__commas(
				amount
					.toString()
					.replace(_currency_symbol(opts), ''))
		)
	)
}
export const unformat__currency = _unformat_currency_str

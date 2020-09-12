import { _currency_symbol } from './_currency_symbol'
import { _money_str } from './_money_str'
import type { currency_str_default_opts_type } from './currency_str_default_opts_type'
/**
 * Formats currency to USD ($) with commas
 * @param {string|number} amount - The currency amount to be outputted
 * @param {*} opts
 * @param {*} opts.default
 * @param {string=} opts.currency_code
 * @param {string=} opts.currency
 * @param {Int=} opts.digits
 * @returns {string} The formatted currency with as USD
 * @example
 * format__currency(1000000) // $1,000,000.00
 * @example
 * format__currency(1000000, {digits: 0}) // $1,000,000
 */
export function _currency_str(amount, opts?:currency_str_default_opts_type|string) {
	const num__amount = parseFloat(amount)
	return (
		Number.isNaN(num__amount)
		? ((opts && (opts as currency_str_default_opts_type).default) || '')
		: `${_currency_symbol(opts)}${_money_str(num__amount, opts as currency_str_default_opts_type)}`
	)
}
export const format__currency = _currency_str

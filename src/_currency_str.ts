import { _currency_symbol } from './_currency_symbol'
import { _money_str } from './_money_str'
import type { currency_str_default_opts_type } from './currency_str_default_opts_type'
/**
 * Formats currency to USD ($) with commas
 * @example
 * format__currency(1000000) // $1,000,000.00
 * @example
 * format__currency(1000000, {digits: 0}) // $1,000,000
 */
export function _currency_str(amount:string|number, opts?:currency_str_default_opts_type|string) {
	const amount_num = parseFloat(amount as string)
	return (
		Number.isNaN(amount_num)
		? ((opts && (opts as currency_str_default_opts_type).default) || '')
		: `${_currency_symbol(opts)}${_money_str(amount_num, opts as currency_str_default_opts_type)}`
	)
}
export {
	_currency_str as format__currency
}

import { _currency_symbol } from './_currency_symbol'
import { _money_str } from './_money_str'
import type { currency_str_default_params_I } from './currency_str_default_params_I'
/**
 * Formats currency to USD ($) with commas
 * @example
 * format__currency(1000000) // $1,000,000.00
 * @example
 * format__currency(1000000, {digits: 0}) // $1,000,000
 */
export function _currency_str(amount:string|number, params?:currency_str_default_params_I|string) {
	const amount_num = parseFloat(amount as string)
	return (
		Number.isNaN(amount_num)
		? ((params && (params as currency_str_default_params_I).default) || '')
		: `${_currency_symbol(params)}${_money_str(amount_num, params as currency_str_default_params_I)}`
	)
}
export {
	_currency_str as format__currency
}

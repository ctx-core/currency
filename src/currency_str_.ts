import { currency_symbol_ } from './currency_symbol_'
import { money_str_ } from './money_str_'
import type { currency_str_default_params_I } from './currency_str_default_params_I'
/**
 * Formats currency to USD ($) with commas
 * @example
 * currency_str_(1000000) // $1,000,000.00
 * @example
 * currency_str_(1000000, {digits: 0}) // $1,000,000
 */
export function currency_str_(amount:string|number, params?:currency_str_default_params_I|string) {
	const amount_num = parseFloat(amount as string)
	return (
		Number.isNaN(amount_num)
		? ((params && (params as currency_str_default_params_I).default) || '')
		: `${currency_symbol_(params)}${money_str_(amount_num, params as currency_str_default_params_I)}`
	)
}
export {
	currency_str_ as _currency_str,
	currency_str_ as format__currency,
}

import { currency_symbol_ } from '../currency_symbol_/index.js'
import { money_str_ } from '../money_str_/index.js'
/**
 * Formats currency to USD ($) with commas
 * @param amount{string|number}
 * @param params{import('../_types').currency_str__default_params_T|string}
 * @returns {string} * @example
 * currency_str_(1000000) // $1,000,000.00
 * @example
 * currency_str_(1000000, {digits: 0}) // $1,000,000
 */
export function currency_str_(
	amount, params
) {
	const amount_num = parseFloat(amount)
	return (
		Number.isNaN(amount_num)
		? params && params.default || ''
		: `${currency_symbol_(params)}${money_str_(amount_num, params)}`
	)
}
export {
	currency_str_ as _currency_str,
	currency_str_ as format__currency,
}

import { no_comma_str_ } from '@ctx-core/number'
import { currency_symbol_ } from '../currency_symbol_/index.js'
/**
 * Remove currency delimiter & commas from string representing amount.
 */
/**
 * @param amount{string|number|import('@ctx-core/function').nullish}
 * @param params{import('../_types').currency_str__default_params_T|string}
 * @returns {string|null}
 */
export function unformat_currency_str_(
	amount,
	params
) {
	return (
		amount == null
		? params?.default || null
		: no_comma_str_(
			amount.toString().replace(
				currency_symbol_(params), '')))
}
export {
	unformat_currency_str_ as _unformat_currency_str,
	unformat_currency_str_ as unformat__currency,
}

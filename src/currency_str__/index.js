import { currency_str_ } from '../currency_str_/index.js'
/**
 * @param {import('../_types').currency_str__default_params_T|string}params
 * @returns {(amount:number)=>string}
 */
export function currency_str__(params) {
	return amount=>currency_str_(amount, params)
}
export {
	currency_str__ as currency_str_2,
	currency_str__ as _currency_str_fn,
	currency_str__ as _format__currency,
}

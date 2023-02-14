import { comma_number_str_, isNumber_ } from '@ctx-core/number'
/**
 * Formats money value with commas (no currency type)
 * @param amount{number}
 * @param params{import('../_types').money_str__params_T}
 * @returns {string|import('@ctx-core/function').nullish}
 */
export function money_str_(amount, params) {
	const digits = isNumber_(params && params.digits) ? params && params.digits : 2
	return amount == undefined ? undefined : comma_number_str_(amount.toFixed(digits))
}
export {
	money_str_ as _money_str,
	money_str_ as format__money,
}

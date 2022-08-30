import type { nullish } from '@ctx-core/function'
import { comma_number_str_, isNumber_ } from '@ctx-core/number'
import type { money_str_params_I } from './money_str_params_I.js'
/**
 * Formats money value with commas (no currency type)
 */
export function money_str_(amount:number, params?:money_str_params_I):string|nullish {
	const digits =
		isNumber_(params && params.digits)
		? (params && params.digits)
		: 2
	return (
		amount == undefined
		? undefined
		: comma_number_str_(amount.toFixed(digits))
	)
}
export {
	money_str_ as _money_str,
	money_str_ as format__money,
}

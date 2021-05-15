import { _comma_number_str, isNumber } from '@ctx-core/number'
import type { money_str_params_I } from './money_str_params_I'
/**
 * Formats money value with commas (no currency type)
 */
export function _money_str(amount:number, params?:money_str_params_I) {
	const digits =
		isNumber(params && params.digits)
		? (params && params.digits)
		: 2
	return (
		amount
		&& _comma_number_str(amount.toFixed(digits))
	)
}
export {
	_money_str as format__money
}

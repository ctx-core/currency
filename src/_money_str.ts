import { format__commas, isNumber } from '@ctx-core/number'
import type { money_str_opts_type } from './money_str_opts_type'
/**
 * Formats money value with commas (no currency type)
 */
export function _money_str(amount, opts?:money_str_opts_type) {
	const digits =
		isNumber(opts && opts.digits)
		? (opts && opts.digits)
		: 2
	return (
		amount
		&& format__commas(amount.toFixed(digits))
	)
}
export {
	_money_str as format__money
}

import { _currency_str } from './_currency_str'
export function __curency_str(opts = {}) {
	return amount=>_currency_str(amount, opts)
}
export const _format__currency = __curency_str

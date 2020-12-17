import { _currency_str } from './_currency_str'
export function _currency_str_fn(opts = {}) {
	return amount=>_currency_str(amount, opts)
}
export {
	_currency_str_fn as _format__currency
}

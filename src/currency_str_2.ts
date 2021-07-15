import { currency_str_ } from './currency_str_.js'
import type { currency_str_default_params_I } from './currency_str_default_params_I.js'
export function currency_str_2(
	params?:currency_str_default_params_I|string
):(amount:number)=>string {
	return (amount:number)=>currency_str_(amount, params)
}
export {
	currency_str_2 as _currency_str_fn,
	currency_str_2 as _format__currency,
}

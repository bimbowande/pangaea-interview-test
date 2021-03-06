export interface CurrencyListProps {
	currencySymbol: string;
	currencyCode: string;
};

export const numberWithCommas  = (x:any) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export const currencySymbols: Array<CurrencyListProps> = [
	{ currencySymbol: '$', currencyCode: 'USD' },
	{ currencySymbol: 'CA$', currencyCode: 'CAD' },
	{ currencySymbol: '€', currencyCode: 'EUR' },
	{ currencySymbol: 'AED', currencyCode: 'AED' },
	{ currencySymbol: 'Af', currencyCode: 'AFN' },
	{ currencySymbol: 'ALL', currencyCode: 'ALL' },
	{ currencySymbol: 'AMD', currencyCode: 'AMD' },
	{ currencySymbol: 'AR$', currencyCode: 'ARS' },
	{ currencySymbol: 'AU$', currencyCode: 'AUD' },
	{ currencySymbol: 'man.', currencyCode: 'AZN' },
	{ currencySymbol: 'KM', currencyCode: 'BAM' },
	{ currencySymbol: 'Tk', currencyCode: 'BDT' },
	{ currencySymbol: 'BGN', currencyCode: 'BGN' },
	{ currencySymbol: 'BD', currencyCode: 'BHD' },
	{ currencySymbol: 'FBu', currencyCode: 'BIF' },
	{ currencySymbol: 'BN$', currencyCode: 'BND' },
	{ currencySymbol: 'Bs', currencyCode: 'BOB' },
	{ currencySymbol: 'R$', currencyCode: 'BRL' },
	{ currencySymbol: 'BWP', currencyCode: 'BWP' },
	{ currencySymbol: 'BYR', currencyCode: 'BYR' },
	{ currencySymbol: 'BZ$', currencyCode: 'BZD' },
	{ currencySymbol: 'CDF', currencyCode: 'CDF' },
	{ currencySymbol: 'CHF', currencyCode: 'CHF' },
	{ currencySymbol: 'CL$', currencyCode: 'CLP' },
	{ currencySymbol: 'CN¥', currencyCode: 'CNY' },
	{ currencySymbol: 'CO$', currencyCode: 'COP' },
	{ currencySymbol: '₡', currencyCode: 'CRC' },
	{ currencySymbol: 'CV$', currencyCode: 'CVE' },
	{ currencySymbol: 'Kč', currencyCode: 'CZK' },
	{ currencySymbol: 'Fdj', currencyCode: 'DJF' },
	{ currencySymbol: 'Dkr', currencyCode: 'DKK' },
	{ currencySymbol: 'RD$', currencyCode: 'DOP' },
	{ currencySymbol: 'DA', currencyCode: 'DZD' },
	{ currencySymbol: 'Ekr', currencyCode: 'EEK' },
	{ currencySymbol: 'EGP', currencyCode: 'EGP' },
	{ currencySymbol: 'Nfk', currencyCode: 'ERN' },
	{ currencySymbol: 'Br', currencyCode: 'ETB' },
	{ currencySymbol: '£', currencyCode: 'GBP' },
	{ currencySymbol: 'GEL', currencyCode: 'GEL' },
	{ currencySymbol: 'GH₵', currencyCode: 'GHS' },
	{ currencySymbol: 'FG', currencyCode: 'GNF' },
	{ currencySymbol: 'GTQ', currencyCode: 'GTQ' },
	{ currencySymbol: 'HK$', currencyCode: 'HKD' },
	{ currencySymbol: 'HNL', currencyCode: 'HNL' },
	{ currencySymbol: 'kn', currencyCode: 'HRK' },
	{ currencySymbol: 'Ft', currencyCode: 'HUF' },
	{ currencySymbol: 'Rp', currencyCode: 'IDR' },
	{ currencySymbol: '₪', currencyCode: 'ILS' },
	{ currencySymbol: 'Rs', currencyCode: 'INR' },
	{ currencySymbol: 'IQD', currencyCode: 'IQD' },
	{ currencySymbol: 'IRR', currencyCode: 'IRR' },
	{ currencySymbol: 'Ikr', currencyCode: 'ISK' },
	{ currencySymbol: 'J$', currencyCode: 'JMD' },
	{ currencySymbol: 'JD', currencyCode: 'JOD' },
	{ currencySymbol: '¥', currencyCode: 'JPY' },
	{ currencySymbol: 'Ksh', currencyCode: 'KES' },
	{ currencySymbol: 'Ksh', currencyCode: 'KES' },
	{ currencySymbol: 'KHR', currencyCode: 'KHR' },
	{ currencySymbol: 'CF', currencyCode: 'KMF' },
	{ currencySymbol: '₩', currencyCode: 'KRW' },
	{ currencySymbol: 'KD', currencyCode: 'KWD' },
	{ currencySymbol: 'KZT', currencyCode: 'KZT' },
	{ currencySymbol: 'LB£', currencyCode: 'LBP' },
	{ currencySymbol: 'SLRs', currencyCode: 'LKR' },
	{ currencySymbol: 'Lt', currencyCode: 'LTL' },
	{ currencySymbol: 'Ls', currencyCode: 'LVL' },
	{ currencySymbol: 'LD', currencyCode: 'LYD' },
	{ currencySymbol: 'MAD', currencyCode: 'MAD' },
	{ currencySymbol: 'MDL', currencyCode: 'MDL' },
	{ currencySymbol: 'MGA', currencyCode: 'MGA' },
	{ currencySymbol: 'MKD', currencyCode: 'MKD' },
	{ currencySymbol: 'MMK', currencyCode: 'MMK' },
	{ currencySymbol: 'MOP$', currencyCode: 'MOP' },
	{ currencySymbol: 'MURs', currencyCode: 'MUR' },
	{ currencySymbol: 'MX$', currencyCode: 'MXN' },
	{ currencySymbol: 'RM', currencyCode: 'MYR' },
	{ currencySymbol: 'MTn', currencyCode: 'MZN' },
	{ currencySymbol: 'N$', currencyCode: 'NAD' },
	{ currencySymbol: '₦', currencyCode: 'NGN' },
	{ currencySymbol: 'C$', currencyCode: 'NIO' },
	{ currencySymbol: 'Nkr', currencyCode: 'NOK' },
	{ currencySymbol: 'NPRs', currencyCode: 'NPR' },
	{ currencySymbol: 'NZ$', currencyCode: 'NZD' },
	{ currencySymbol: 'OMR', currencyCode: 'OMR' },
	{ currencySymbol: 'B/.', currencyCode: 'PAB' },
	{ currencySymbol: 'S/.', currencyCode: 'PEN' },
	{ currencySymbol: '₱', currencyCode: 'PHP' },
	{ currencySymbol: 'PKRs', currencyCode: 'PKR' },
	{ currencySymbol: 'zł', currencyCode: 'PLN' },
	{ currencySymbol: '₲', currencyCode: 'PYG' },
	{ currencySymbol: 'QR', currencyCode: 'QAR' },
	{ currencySymbol: 'RON', currencyCode: 'RON' },
	{ currencySymbol: 'din.', currencyCode: 'RSD' },
	{ currencySymbol: 'RUB', currencyCode: 'RUB' },
	{ currencySymbol: 'RWF', currencyCode: 'RWF' },
	{ currencySymbol: 'SR', currencyCode: 'SAR' },
	{ currencySymbol: 'SDG', currencyCode: 'SDG' },
	{ currencySymbol: 'Skr', currencyCode: 'SEK' },
	{ currencySymbol: 'S$', currencyCode: 'SGD' },
	{ currencySymbol: 'Ssh', currencyCode: 'SOS' },
	{ currencySymbol: 'SY£', currencyCode: 'SYP' },
	{ currencySymbol: '฿', currencyCode: 'THB' },
	{ currencySymbol: 'DT', currencyCode: 'TND' },
	{ currencySymbol: 'T$', currencyCode: 'TOP' },
	{ currencySymbol: 'TL', currencyCode: 'TRY' },
	{ currencySymbol: 'TT$', currencyCode: 'TTD' },
	{ currencySymbol: 'NT$', currencyCode: 'TWD' },
	{ currencySymbol: 'TSh', currencyCode: 'TZS' },
	{ currencySymbol: '₴', currencyCode: 'UAH' },
	{ currencySymbol: 'USh', currencyCode: 'UGX' },
	{ currencySymbol: '$U', currencyCode: 'UYU' },
	{ currencySymbol: 'UZS', currencyCode: 'UZS' },
	{ currencySymbol: 'Bs.F.', currencyCode: 'VEF' },
	{ currencySymbol: '₫', currencyCode: 'VND' },
	{ currencySymbol: 'FCFA', currencyCode: 'XAF' },
	{ currencySymbol: 'CFA', currencyCode: 'XOF' },
	{ currencySymbol: 'YR', currencyCode: 'YER' },
	{ currencySymbol: 'R', currencyCode: 'ZAR' },
	{ currencySymbol: 'ZK', currencyCode: 'ZMW' }
];


export const getCurrencySymbol = (currency:string)=>{
   const symbol = currencySymbols.find(symbol=>symbol.currencyCode === currency)
   return symbol?.currencySymbol
}

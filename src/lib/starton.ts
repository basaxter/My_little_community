/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

const startonHttp = axios.create({
	baseURL: 'https://api.starton.io/v2',
	headers: {
		'x-api-key': 'NbgHCH0KXqJYI8hPY5vfE4zD541USbkL',
	},
})

export const sendCoins = async (address: string): Promise<any> => {
	const result = await startonHttp.post(
		'/smart-contract/polygon-mumbai/0xC100c6365fD8cA6A1dD702ce3064A2CBcEAB955e/call',
		{
			functionName: 'mint',
			signerWallet: '0xD7C53956a0A3F99088Acf97C2be44C73064F493C',
			speed: 'low',
			params: [address, '100000000000000000000'],
		},
	)
	return result.data
}

export const getCoins = async (address: string): Promise<number> => {
	const result = await startonHttp.post(
		'/smart-contract/polygon-mumbai/0xC100c6365fD8cA6A1dD702ce3064A2CBcEAB955e/read',
		{
			functionName: 'balanceOf',
			params: [address],
		},
	)
	if (result.data?.response?.raw) {
		const rawResult: string = result.data.response.raw
		return parseInt(rawResult.slice(0, rawResult.length - 18))
	}
	return 0
}

// removeCoins() => {}

// getNFT() => {}

// buyNFT() => {}

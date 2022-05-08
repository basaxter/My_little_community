/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

const startonHttp = axios.create({
	baseURL: 'https://api.starton.io/v2',
	headers: {
		'x-api-key': 'NbgHCH0KXqJYI8hPY5vfE4zD541USbkL',
	},
})

export enum NFTMetadataURI {
	NikePartner = 'QmWVuRp6YU9uhpqeB32QcbH8mBrxntD6CYG4wojv1KsjWU',
	EventProgram = 'Qmf2bNjkh8tEDGtTL9aQdzLrXE4UGuSkSQLHau7R1zXe5G',
	ImpactProgram = 'QmaT8sxZNgsQ7hhaHeCwmccfMsXQxC3zBTTcHWEsVyqQXe',
}

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

export const burnCoins = async (address: string, amount: number): Promise<any> => {
	const result = await startonHttp.post(
		'/smart-contract/polygon-mumbai/0xC100c6365fD8cA6A1dD702ce3064A2CBcEAB955e/call',
		{
			functionName: 'burn',
			signerWallet: address,
			speed: 'low',
			params: [address, amount + '000000000000000000'],
		},
	)
	console.log(result)
	return 0
}

export const createNFT = async (address: string, metadata: NFTMetadataURI): Promise<any> => {
	console.log(address, metadata)
	const result = await startonHttp.post(
		'/smart-contract/polygon-mumbai/0x41f8e93B2F888d55EBa005C8289266609CfAfFD3/call',
		{
			functionName: 'safeMint',
			signerWallet: '0xD7C53956a0A3F99088Acf97C2be44C73064F493C',
			speed: 'low',
			params: [address, metadata],
		},
	)
	console.log(result)
	return 0
}

// getNFT() => {}

// buyNFT() => {}

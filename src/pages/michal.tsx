import React, { useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { Header, Footer } from '@components'
import { User } from '@types'
import { GetServerSidePropsResult } from 'next'
import { sendCoins, getCoins, burnCoins, NFTMetadataURI, createNFT } from '@lib/starton'

interface Props {
	currentUser: User
}

const EarnPage: React.FC<Props> = ({ currentUser }) => {
	const [result, setResult] = useState('')

	// const handleCoinsClaim = async () => {
	// 	const result = await sendCoins('0xD7C53956a0A3F99088Acf97C2be44C73064F493C')
	// 	console.log('result = ', result)
	// 	setResult('titototoot')
	// }

	const test = async () => {
		const result = await burnCoins('0xD7C53956a0A3F99088Acf97C2be44C73064F493C', 80)
		console.log('result = ', result)
		setResult('titototoot')
	}

	test()
	return (
		<React.Fragment>
			<Header currentUser={currentUser} />
			<div className="w-screen h-full flex flex-col justify-center items-center flex-nowrap bg-white py-8 px-9 w">
				{JSON.stringify(result)}
			</div>
			<Footer />
		</React.Fragment>
	)
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<Props>> {
	// Call API get current User
	const userMoneyAmount = await getCoins('0xD7C53956a0A3F99088Acf97C2be44C73064F493C')

	return {
		props: {
			currentUser: {
				fullName: 'Jean Sardou',
				email: 'jean@mail.com',
				moneyAmount: userMoneyAmount,
			},
		},
	}
}

export default EarnPage

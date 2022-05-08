import React, { useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { Header, Footer } from '@components'
import { Typography, Button } from '@material-ui/core'
import { User } from '@types'
import { GetServerSidePropsResult } from 'next'
import { sendCoins, getCoins } from '@lib/starton'

interface Props {
	currentUser: User
}

const EarnPage: React.FC<Props> = ({ currentUser }) => {
	const [error, setError] = useState('')

	const handleCoinsClaim = async () => {
		const result = await sendCoins('0xD7C53956a0A3F99088Acf97C2be44C73064F493C')
		if (result.status === 'PUBLISHED') {
			Router.push('/')
		} else setError('Something went wrong.')
	}

	return (
		<React.Fragment>
			<Header currentUser={currentUser} />
			<div className="w-screen h-full flex flex-col justify-center items-center flex-nowrap bg-white py-8 px-9 w">
				<Typography variant="h2" className="my-9">
					Congratulations! You earns some coins!
				</Typography>
				<Image src="/images/nike_quote.jpg" alt="nextjs" width="1044" height="500" />
				<Button
					onClick={async () => await handleCoinsClaim()}
					variant="contained"
					color="primary"
					className="mt-16 mb-10"
					disableRipple
				>
					Claim your coins
				</Button>
				{error && <span>{error}</span>}
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

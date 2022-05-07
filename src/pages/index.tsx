import * as React from 'react'
import Image from 'next/image'
import { Header, CaptionedImage, PricedImage, Footer } from '@components';
import { Typography, Link, Button } from '@material-ui/core'
// import Link from '@mui/material/Link';

const HomePage: React.FC = () => {
	return (
		<React.Fragment>
			<Header />
			<div className="w-screen h-full flex flex-col justify-center items-center flex-nowrap bg-white pt-8 px-9 w">
				<Image src="/images/nike_quote.jpg" alt="nextjs" width="1344" height="700" />
				<Typography variant="h2" className="my-9">
					Nike our vision of Community
				</Typography>
				<Link href="#" underline="always" color="textPrimary" variant="h6">
					{'Go to our community eshop'}
				</Link>
				<div className="flex flex-row justify-between mt-8 w-full my">
					<CaptionedImage
						width={675}
						height={700}
						src="/images/nike_shoes.jpg"
						caption="Sport with Lebron James"
					/>
					<CaptionedImage
						width={675}
						height={700}
						src="/images/nike_nba_shoot.jpg"
						caption="New look with our Designer"
					/>
				</div>
				<Button variant="contained" color="primary" className="mt-16 mb-10" disableRipple>
					How to participate
				</Button>
				<Typography variant="h4" className="my-9">
					Our Next Event
				</Typography>
				<div className="flex flex-row justify-between mt-8 w-full my">
					<CaptionedImage
						width={440}
						height={293}
						src="/images/nike_atelier.jpg"
						caption="Visit the Nike Gallery"
					/>
					<CaptionedImage
						width={440}
						height={293}
						src="/images/nike_white_shoes.jpg"
						caption="Win the Sneaker of your 16 Birthday"
					/>
					<CaptionedImage
						width={440}
						height={293}
						src="/images/nike_happy_birthday.jpg"
						caption="Take your invitation for the 60th Birthday"
					/>
				</div>
				<Typography variant="h2" className="my-9 px-64 text-center">
					Take part to the important decision
				</Typography>
				<Image src="/images/nike_yoga.jpg" alt="nextjs" width="1344" height="700" />
				<Button variant="contained" color="primary" className="mt-16 mb-10" disableRipple>
					Choose your cause
				</Button>
				<Typography variant="h2" className="px-64 text-center">
					Be Loyal
				</Typography>
				<Typography variant="h2" className="px-64 text-center">
					Be Rewarded
				</Typography>
				<Typography variant="h6" className="pt-14">
					Our New Community Eshop
				</Typography>
				<Image src="/images/nike_sneakers.jpg" alt="nextjs" width="1344" height="700" />
				<Typography variant="h6" className="pt-14 place-self-start">
					Popular Right Now
				</Typography>
				<div className="flex flex-row justify-between mt-4 w-full my">
					<PricedImage width={440} height={440} src="/images/nike_purple_sportfit.jpg" price="10.00" />
					<PricedImage width={440} height={440} src="/images/nike_yellow_outfit.jpg" price="70.00" />
					<PricedImage width={440} height={440} src="/images/nike_orange_shirt.jpg" price="190.00" />
				</div>
			</div>
			<Footer />
		</React.Fragment>
	)
}
/*
		width: '100%',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'nowrap',
*/

export default HomePage

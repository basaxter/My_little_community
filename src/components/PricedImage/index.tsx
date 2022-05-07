import * as React from 'react'
import Image from 'next/image'

interface Props {
	src: string
	price: string
	width: number
	height: number
}

export const PricedImage: React.FC<Props> = ({ src, price, width, height }) => {
	return (
		<div className="relative">
			<Image src={src} alt="nextjs" width={width} height={height} />
			<div className="absolute bottom-2 right-2 flex justify-center items-center">
				<span>{price}</span>
				<Image src="/images/logoNike.svg" alt="nextjs" width="18" height="18" className="mx-1" />
				<span className="font-medium mx-1">SDR</span>
			</div>
		</div>
	)
}

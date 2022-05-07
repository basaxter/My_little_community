import * as React from 'react'
import Image from 'next/image'
import { Typography } from '@material-ui/core'

interface Props {
	src: string
	caption: string
	width: number
	height: number
}

export const CaptionedImage: React.FC<Props> = ({ src, caption, width, height }) => {
	return (
		<div className="flex flex-col justify-center items-center flex-nowrap">
			<Image src={src} alt="nextjs" width={width} height={height} />
			<Typography variant="body2" className="my-2 text-base">
				{caption}
			</Typography>
		</div>
	)
}

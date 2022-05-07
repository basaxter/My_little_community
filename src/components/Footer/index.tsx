import React from 'react'
import { Typography } from '@material-ui/core'

export const Footer: React.FC = () => {
	return (
		<div className="md:flex md:items-center md:justify-between px-16 py-3 border-gray-200 border-b bg-black">
			<Typography variant="body1" color="secondary">
				GIFT CARDS
			</Typography>
		</div>
	)
}

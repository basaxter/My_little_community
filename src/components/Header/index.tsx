import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Avatar from '@mui/material/Avatar'
import { Typography } from '@material-ui/core'
import { User } from 'pages/api/user'

interface Props {
	user?: User
}

export const Header: React.FC<Props> = (props: Props) => {
	return (
		<div className="md:flex md:items-center md:justify-between px-16 py-3 border-gray-200 border-b bg-white">
			<div className="w-full">
				<Link href="/" passHref>
					<Image src="/images/logoNike.svg" alt="nextjs" width="140" height="18" />
				</Link>
			</div>
			<div className="w-full flex justify-end">
				<Avatar alt="Remy Sharp" src="/images/avatar.png" />
				<div className="flex flex-col justify-center ml-3">
					<Typography variant="body1">
						{props.user?.firstname} {props.user?.lastname}
					</Typography>
					<Typography variant="body2" className="font-grey-600">
						{props.user?.login}
					</Typography>
				</div>
			</div>
		</div>
	)
}

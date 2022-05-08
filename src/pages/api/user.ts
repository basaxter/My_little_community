import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../database/dbModule'

export interface User {
	firstname: string
	lastname: string
	login: string
	tokenAmount: number
}

export default (req: NextApiRequest, res: NextApiResponse<User>) => {
	db.get(
		'SELECT * FROM User WHERE login=$login',
		{
			$login: req.body.login,
		},
		(err, row) => {
			if (err) {
				console.error(err)
			}
			if (row.length === 0) {
				res.status(400)
			}
			res.status(200).json(row)
		},
	)
}

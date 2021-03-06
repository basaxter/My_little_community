import '../styles/fonts.css'
import '../styles/tailwind.css'
import * as React from 'react'
import { AppContext, AppInitialProps, AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Head from 'next/head'
import { NextComponentType } from 'next'
import { Router, useRouter } from 'next/router'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import { SnackbarProvider } from 'notistack'
import NProgress from 'nprogress'
import { ethers } from 'ethers'
import { Web3ReactProvider } from '@web3-react/core'
import { enUS, frFR } from '@material-ui/core/locale'
import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import { ThemeOptions } from '@material-ui/core'
import appContext from '../context/appContext'
import fr from '../translate/fr.json'
import en from '../translate/en.json'
import lightTheme from 'styles/lightTheme'
import { StartonLayout } from 'components'
import 'nprogress/nprogress.css' //styles of nprogress
import { QueryClient, QueryClientProvider } from 'react-query'

const StartonApp: NextComponentType<AppContext, AppInitialProps, AppProps> = (appProps: AppProps) => {
	const locale = useRouter()

	i18n.use(initReactI18next) // passes i18n down to react-i18next
		.init({
			resources: {
				en: {
					translation: en,
				},
				fr: {
					translation: fr,
				},
			},
			lng: locale.locale,
			keySeparator: false, // we do not use keys in form messages.welcome
			interpolation: {
				escapeValue: false, // react already safes from xss
			},
		})

	function getLibrary(provider: any) {
		return new ethers.providers.Web3Provider(provider)
	}
	const [theme, setTheme] = React.useState<ThemeOptions>(lightTheme)
	const [isVerified, setVerified] = React.useState<boolean>(false)

	const queryClient = new QueryClient()

	// Render
	// ----------------------------------------------------------------------------
	return (
		<QueryClientProvider client={queryClient}>
			<React.Fragment>
				<Head>
					<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				</Head>
				{/*@ts-ignore*/}
				<appContext.Provider value={{ theme, setTheme, isVerified, setVerified }}>
					<MuiPickersUtilsProvider utils={MomentUtils}>
						<ThemeProvider
							theme={createTheme(
								{
									...theme,
								},
								locale.locale === 'fr' ? frFR : enUS,
							)}
						>
							<SnackbarProvider
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'right',
								}}
								maxSnack={3}
							>
								<CssBaseline />
								<Web3ReactProvider getLibrary={getLibrary}>
									<StartonLayout {...appProps} />
								</Web3ReactProvider>
							</SnackbarProvider>
						</ThemeProvider>
					</MuiPickersUtilsProvider>
				</appContext.Provider>
			</React.Fragment>
		</QueryClientProvider>
	)
}

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default StartonApp

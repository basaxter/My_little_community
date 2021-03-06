import { ThemeOptions } from '@material-ui/core'

const lightTheme: ThemeOptions = {
	palette: {
		type: 'light',
		primary: {
			main: '#000000',
			light: '#00D0FF',
			dark: '#2B2A2A',
			contrastText: '#FFFFFF',
		},
		secondary: {
			main: '#FFFFFF',
			light: '#0078FF',
			dark: '#001BFF',
			contrastText: '#FFFFFF',
		},
		error: {
			main: '#ff1744',
		},
		background: {
			default: '#fff',
			paper: '#F4F4F4',
		},
		text: {
			primary: '#1A202C',
			secondary: '#0072FF',
		},
	},
	typography: {
		//useNextVariants: true, //To make an immediate switch to typography v2 you can simply pass useNextVariants: true when calling createMuiTheme
		//fontFamily: [fontFamilyHeading, fontFamilyBody].join(","),
		/* fontFamily: ["Montserrat", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"'],
        "h1, h2, h3, h4, h5, h6": {
            backgroundColor: "blue",
            color: "blue",
        },
        "p, span, button": {}, */
		fontFamily: [
			'Montserrat',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
			'sans-serif',
		].join(', '),
		h1: {},
		h2: {
			fontWeight: 700,
		},
		h3: {
			fontWeight: 700,
		},
		h4: {
			fontWeight: 700,
		},
		h5: {
			fontWeight: 700,
		},
		h6: {
			fontWeight: 700,
		},
		body1: {
			fontWeight: 800,
			fontSize: 12,
		},
		body2: {
			fontSize: 12,
		},
		button: {
			fontSize: 24,
			fontWeight: 400,
			fontFamily: 'Helvetica Neue',
			textTransform: 'none',
		},
	},
	breakpoints: {
		values: {
			/*	mobile: 0,
			tablet: 640,
			laptop: 1024,
			desktop: 1200,*/
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1640,
		},
	},
	overrides: {
		MuiOutlinedInput: {
			notchedOutline: {
				borderRadius: 15,
			},
		},
		MuiList: {
			padding: {},
		},
		MuiButton: {
			root: {
				borderRadius: 999,
				paddingTop: 15,
				paddingBottom: 15,
				paddingLeft: 82,
				paddingRight: 82,
			},
		},
		MuiPaper: {
			root: {
				backgroundColor: '#F4F4F4',
			},
		},
		MuiCard: {
			root: {
				backgroundColor: '#ffffff',
			},
		},
	},
}

export default lightTheme

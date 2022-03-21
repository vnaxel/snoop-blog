import { red } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

// A custom theme for this app
const theme = createTheme({
	palette: {
		primary: {
			main: "#00752D",
		},
		secondary: {
			main: "#90ee90",
		},
		error: {
			main: red.A400,
		},
	},
})

export default theme
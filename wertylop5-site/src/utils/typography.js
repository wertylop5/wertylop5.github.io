import Typography from "typography"
import lincolnTheme from "typography-theme-lincoln"
lincolnTheme.bodyFontFamily = ["Lato", "Lora", "serif"]

//typography doesn't seem to download additional fonts automatically
lincolnTheme.googleFonts.push({
	name: "Lato",
	styles: [
		"400"
	]
})

const typography = new Typography(lincolnTheme)

export default typography
export const rhythm = typography.rhythm


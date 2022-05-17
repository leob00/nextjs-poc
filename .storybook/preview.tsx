import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from 'emotion-theming'
import emmaTheme from '../components/emmaTheme'

// https://stackoverflow.com/questions/70253373/mui-v5-storybook-theme-and-font-family-do-not-work-in-storybook second answer
export const decorators = [
  (Story) => (
    <>
    <CssBaseline />
    <MUIThemeProvider theme={emmaTheme}>
      {/* <ThemeProvider theme={emmaTheme}>{Story()}</ThemeProvider> */}
      {Story()}
    </MUIThemeProvider>
    </>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

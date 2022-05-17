import { createTheme, PaletteOptions, ThemeOptions } from '@mui/material/styles'

const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#00263a',
  },
}

const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#fff',
    contrastText: '#00263a',
  },
}

const themeOptions: ThemeOptions = {
  typography: {
    //fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 'bold',
    },
    h1: { fontSize: '2.5rem' },
    h2: { fontSize: '2.1rem', fontStyle: 'italic' },
    h3: { fontSize: '1.8rem' },
    h4: { fontSize: '1.4rem', fontStyle: 'italic', fontWeight: 600 },
    h5: { fontSize: '1.3rem', fontWeight: 600, },
    h6: { fontSize: '1.15rem', fontWeight: 600, },
    subtitle1: {
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 600,
      fontStyle: 'italic',
    },
    body1: {
      fontWeight: 500,
    },
    body2: {
      fontWeight: 500,
      //fontStyle: 'italic',
    },
  },

  components: {
    // MuiButtonBase: {
    //   defaultProps: {
    //     disableRipple: false
    //   },
    // },
    // MuiButton: {
    //   variants: [
    //     {
    //       props: { variant: 'outlined' },
    //       style: {
    //         textTransform: 'none',
    //         //border: `2px dashed #2196F3`,
    //       },
    //     },
    //     {
    //       props: { variant: 'outlined', color: 'secondary' },
    //       style: {
    //         //border: `4px dashed red`,
    //       },
    //     },
    //   ],
    // },
  },
}

const theme = createTheme({...themeOptions, 'palette': lightPalette })

export const darkTheme = createTheme({...themeOptions, 'palette': darkPalette })
  
export default theme

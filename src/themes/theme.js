import { createTheme } from '@rneui/themed';

export default theme = createTheme({
    lightColors: {
      background: '#5657c7',
      accent: '#cc00cc',
      surface: '#0990763',
      orange: '#e5722a',
      red: '#dd3333',
      gray: '#e8e6e3',
    },

    fonts:{
      $fontWeight400: 400,
      $fontWeight600: 600,
      $fontWeight900: 900,
      $100Thin: 'Lato_100Thin',
      $400Regular: 'Lato_400Regular',
      $700Bold: 'Lato_700Bold',
    },
    components:{
    //   Button:(props,theme)=>({
    //     containerStyle:{
    //       backgroundColor:theme.colors.tertiary
    //     }
    //   })
    },
    //mode: 'light', // or 'dark'
  });
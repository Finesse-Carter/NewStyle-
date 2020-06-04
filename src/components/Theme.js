import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#aaa8b7',
        main: '#9593a5',
        dark: '#686673',
        contrastText: '#fff',
      },
      secondary: {
        light: '#526a7e',
        main: '#27455e',
        dark: '#1b3041',
        contrastText: '#000',
      }, html: {
        fontSize: '62.5%', /* 62.5% of 16px = 10px */
      }, typography: {
      
        subtitle1: {
          fontSize: 12,
        },
        body1: {
          fontWeight: 500,
        },
        button: {
          fontStyle: 'italic',
        },
      },
     
    },
  });

  export default theme
// import { makeStyles } from "@mui/styles";
import {
  createTheme,
  styled,
  darken
} from "@mui/material/styles";
const useStyles = styled((theme) => ({
  contianer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  icons: {
    marginRight: "20px",
  },
  button: {
    marginTop: "40px",
  },
  cardGrid: {
    padding : '20px 0'
  },
  card :{
    height : '100%',
    display : 'flex',
    flexDirection :'column'

  },
  cardMedia :{
    paddingTop :'56.25%'
  },
  CardContent :{
    flexGrow :1,
  }
}));
const CustomizedSlider = styled()(
    ({ theme }) => `
    color: ${theme.palette.primary.main};
  
    :hover {
      color: ${darken(theme.palette.primary.main, 0.2)};
    }
  `,
  );
export default useStyles;

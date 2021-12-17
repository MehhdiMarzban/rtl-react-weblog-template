import {purple, green} from "@mui/material/colors";
import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
        primaryColor: "#733dd8",
        customButtons: {
            primary: {
                backgroundColor: purple[600] + " !important",
                color: "#fff"
            },
        },
        palette: {
            primary: {
              main: purple[500],
            },
            secondary: {
              main: green[500],
            },
        },
       
});
import { Button, Container, Grid } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import {} from "@mui/icons-material";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Add from "./components/Add";

//* this way is suitable for style in one component
// const useStyle = makeStyles((theme) => {
//     return {
//         button: {
//             color: "#fff",
//             backgroundColor: "#733dd8",
//         },
//     };
// });

//* this way use for old way with theme
const useStyle = makeStyles((theme) => {
    console.log(theme);
    return {
        button: { ...theme.customButtons.primary },
        leftbar: {
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
    };
});
function App() {
    const classes = useStyle();

    // * for access to theme object
    // const theme = useTheme();
    return (
        <>
            <Navbar />
            <Grid container>
                <Grid item sm={2} xs={2}>
                    <Rightbar />
                </Grid>
                <Grid item sm={7} xs={10}>
                    <Feed />
                </Grid>
                <Grid item sm={3} className={classes.leftbar}>
                    <Leftbar />
                </Grid>
            </Grid>
            <Add />
        </>
    );
}

export default App;

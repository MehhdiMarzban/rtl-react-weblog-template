import {
    alpha,
    AppBar,
    Avatar,
    Badge,
    Box,
    InputBase,
    Toolbar,
    Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Mail, Search, Notifications, Cancel } from "@mui/icons-material";
import { useState } from "react";

function Navbar() {
    const useStyle = makeStyles((theme) => {
        return {
            smallScreen: {
                display: "block",
                [theme.breakpoints.up("sm")]: {
                    display: "none",
                },
            },
            largeScreen: {
                display: "none",
                [theme.breakpoints.up("sm")]: {
                    display: "block",
                },
            },
            toolbar: {
                display: "felx",
                justifyContent: "space-between",
            },
            search: {
                display: "flex",
                alignItems: "center",
                borderRadius: theme.shape.borderRadius,
                backgroundColor: alpha(theme.palette.common.white, 0.15),
                width: "50%",
                transition: "ease 0.3s all",
                "&:hover": {
                    backgroundColor: alpha(theme.palette.common.white, 0.25),
                },
                [theme.breakpoints.down("sm")]: {
                    display: "none",
                },
            },
            searchSm: {
                display: "flex",
                alignItems: "center",
                borderRadius: theme.shape.borderRadius,
                backgroundColor: alpha(theme.palette.common.white, 0.15),
                width: "90%",
                transition: "ease 0.3s all",
                "&:hover": {
                    backgroundColor: alpha(theme.palette.common.white, 0.25),
                },
                [theme.breakpoints.up("sm")]: {
                    display: "none",
                },
            },
            searchIconSm: {
                padding: ".3rem 0 .3rem .3rem !important",
            },
            input: {
                marginRight: theme.spacing(1),
            },
            inputSm: {
                display: (props) =>
                    props.openState ? "flex !important" : "none !important",
            },
            leftNav: {
                display: (props) =>
                    props.openState ? "none !important" : "flex !important",
                alignItems: "center",
                gap: theme.spacing(1),
            },
            dFlex: {
                display: "flex",
                gap: theme.spacing(2)
            }
        };
    });

    const [openState, setOpenState] = useState(false);
    const classes = useStyle({ openState });

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar className={classes.toolbar}>
                        <Typography
                            className={classes.largeScreen}
                            variant="h6"
                            component="h1">
                            پرشین جاوا اسکریپت
                        </Typography>
                        <div className={classes.dFlex}>
                            <Typography
                                className={classes.smallScreen}
                                variant="h6"
                                component="h1">
                                PJS
                            </Typography>
                            <div className={classes.leftNavSm}>
                                <div className={classes.searchSm}>
                                    <Search
                                        className={classes.searchIconSm}
                                        onClick={() => setOpenState(true)}
                                    />
                                    <InputBase
                                        className={classes.inputSm}
                                        placeholder="جست و جو"
                                    />
                                    <Cancel
                                        className={classes.inputSm}
                                        onClick={() => setOpenState(false)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={classes.search}>
                            <Search />
                            <InputBase
                                className={classes.input}
                                placeholder="جست و جو"
                            />
                        </div>

                        <div className={classes.leftNav}>
                            <Badge badgeContent={3} color="error">
                                <Mail />
                            </Badge>
                            <Badge badgeContent={2} color="warning">
                                <Notifications />
                            </Badge>
                            <Avatar src="https://cdn-icons-png.flaticon.com/512/147/147144.png" />
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default Navbar;

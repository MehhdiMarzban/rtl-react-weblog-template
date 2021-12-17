import { alpha, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
    Home,
    Person,
    List,
    PhotoCamera,
    PlayCircleOutline,
    TabletMac,
    Bookmark,
    Storefront,
    Settings,
    ExitToApp,
} from "@mui/icons-material";

function Rightbar() {
    const useStyle = makeStyles((theme) => {
        return {
            Rightbar: {
                backgroundColor: "#aaa",
                color: theme.palette.common.white,
                textAlign: "center",
                height: "100vh",
                padding: "0 !important",
                position: "sticky",
                top: "0",
                [theme.breakpoints.down("sm")]: {
                    backgroundColor: alpha(theme.palette.primary.main, 0.9)
                }
            },
            item: {
                display: "flex",
                alignItems: "center",
                padding: "0.5rem 0.75rem",
                cursor: "pointer",
                borderBottom:
                    "1px solid " + alpha(theme.palette.common.white, 0.5),
                transition: "0.3s ease all",
                "&:hover": {
                    paddingRight: theme.spacing(2),
                    backgroundColor:
                        alpha(theme.palette.primary.main, 1) + " !important",
                },
                [theme.breakpoints.down("sm")]: {
                    justifyContent: "center",
                },
            },
            itemText: {
                [theme.breakpoints.down("sm")]: {
                    display: "none",
                },
            },
        };
    });
    const classes = useStyle();

    return (
        <Container className={classes.Rightbar}>
            <div className={classes.item}>
                <Home />
                <Typography className={classes.itemText}>خانه</Typography>
            </div>
            <div className={classes.item}>
                <Person />
                <Typography className={classes.itemText}>دوستان</Typography>
            </div>
            <div className={classes.item}>
                <List />
                <Typography className={classes.itemText}>لیست ها</Typography>
            </div>
            <div className={classes.item}>
                <PhotoCamera />
                <Typography className={classes.itemText}>دوربین</Typography>
            </div>
            <div className={classes.item}>
                <PlayCircleOutline />
                <Typography className={classes.itemText}>ویدیو</Typography>
            </div>
            <div className={classes.item}>
                <TabletMac />
                <Typography className={classes.itemText}>اپ</Typography>
            </div>
            <div className={classes.item}>
                <Bookmark />
                <Typography className={classes.itemText}>مجموعه ها</Typography>
            </div>
            <div className={classes.item}>
                <Storefront />
                <Typography className={classes.itemText}>بازار</Typography>
            </div>
            <div className={classes.item}>
                <Settings />
                <Typography className={classes.itemText}>تنظیمات</Typography>
            </div>
            <div className={classes.item}>
                <ExitToApp />
                <Typography className={classes.itemText}>خروج</Typography>
            </div>
        </Container>
    );
}

export default Rightbar;


import {
    Avatar,
    AvatarGroup,
    Container,
    Divider,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    ListSubheader,
    Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { PostAdd as IconPost, Info as InfoIcon } from "@mui/icons-material";

const useStyle = makeStyles((theme) => {
    return {
        avatarGroup: {
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
        },
        container: {
            padding: "1rem",
            backgroundColor: "#bbb",
            color: theme.palette.common.white,
            position: "sticky",
            top: "0",
            height: "100vh"
        },
    };
});
const itemData = [
    {
        img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=248&fit=crop&auto=format",
        author: "مهدی مرزبان",
        title: "پست اول",
    },
    {
        img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=248&fit=crop&auto=format",
        author: "مهدی مرزبان",
        title: "پست اول",
    },
    {
        img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=248&fit=crop&auto=format",
        author: "مهدی مرزبان",
        title: "پست اول",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=248&fit=crop&auto=format",
        author: "مهدی مرزبان",
        title: "پست اول",
    },
    {
        img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=248&fit=crop&auto=format",
        author: "مهدی مرزبان",
        title: "پست اول",
    },
    {
        img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=248&fit=crop&auto=format",
        author: "مهدی مرزبان",
        title: "پست اول",
    },
    
];
function Leftbar() {
    const classes = useStyle();

    return (
        <Container className={classes.container}>
            <Typography variant="caption" component="h2">
                دوستان:
            </Typography>
            <AvatarGroup max={4} className={classes.avatarGroup}>
                <Avatar
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/1.jpg"
                />
                <Avatar
                    alt="Travis Howard"
                    src="https://mui.com/static/images/avatar/2.jpg"
                />
                <Avatar
                    alt="Cindy Baker"
                    src="https://mui.com/static/images/avatar/3.jpg"
                />
                <Avatar
                    alt="Agnes Walker"
                    src="https://mui.com/static/images/avatar/4.jpg"
                />
                <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatar/5.jpg"
                />
            </AvatarGroup>
            <Divider sx={{marginBottom :"1rem"}} />
            <Typography variant="caption" component="h2" gutterBottom>
                پست های مرتبط:
            </Typography>
            <ImageList sx={{ width: "100%"}}>
                <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div">آذر ماه 1400</ListSubheader>
                </ImageListItem>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} sx={{cursor: "pointer"}}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            sx={{padding: "0.1rem 0.3rem"}}
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <IconPost
                                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                    aria-label={`info about ${item.title}`}>
                                    <InfoIcon />
                                </IconPost>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
}

export default Leftbar;

import { Button, Card, CardActionArea, CardActions, CardMedia, Typography } from "@mui/material";
import {} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
    card: {
        margin: "1rem",
    },
    cardMedia: {
        height: "200px"
    }
}));

const Post = () => {
    const classes = useStyle();
    return (
        <>
            <Card className={classes.card} elevation={3}>
                <CardActionArea sx={{padding: "1rem"}}>
                    <CardMedia
                        component="img"
                        title="first post"
                        src="https://cdn.mos.cms.futurecdn.net/dBdcuHkeFLg3TeiDBsDKim-1024-80.jpg.webp"
                        className={classes.cardMedia}
                    />
                    <Typography variant="h2" component="h1" gutterBottom>
                        پست اول
                    </Typography>
                    <Typography variant="body1" sx={{textAlign: "justify"}}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                        برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
                        هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
                        و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                        متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                        برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                        پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                        داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط
                        سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
                        دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
                        طراحی اساسا مورد استفاده قرار گیرد.
                    </Typography>
                </CardActionArea>
                <CardActions>
                    <Button color="primary">
                    اشتراک گذاری
                    </Button>
                    <Button color="info">
                    ادامه مطلب
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};
export default Post;

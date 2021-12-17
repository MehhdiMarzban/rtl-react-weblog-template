import {
    Button,
    Container,
    Fab,
    FormControlLabel,
    FormLabel,
    Modal,
    Radio,
    RadioGroup,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Add as AddIcon } from "@mui/icons-material";
import { useState } from "react";
import CustomSnackbar from "./CustomSnackbar";
const useStyle = makeStyles((theme) => ({
    add: {
        position: "fixed !important",
        bottom: "10px",
        right: "10px",
    },
    modalContainer: {
        position: "absolute !important",
        top: "0",
        bottom: "0",
        right: "0",
        left: "0",
        margin: "auto",
        padding: "0.5rem 1rem",
        backgroundColor: "white",
        height: "80% !important",
        width: "60% !important",
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down("sm")]: {
            width: "100% !important",
            height: "100% !important",
        },
    },
    buttons: {
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(2),
    },
}));
const Add = () => {
    const classes = useStyle();
    const [isOpenState, setIsOpenState] = useState(false);
    const [snackState, setSnackState] = useState(false);
    return (
        <>
            <Tooltip title="افزودن پست">
                <Fab
                    color="secondary"
                    className={classes.add}
                    onClick={() => {
                        setIsOpenState(true);
                    }}>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Modal open={isOpenState}>
                <Container className={classes.modalContainer} elevation={3}>
                    <Typography variant="h6" component="h1" gutterBottom>
                        افزودن پست جدید
                    </Typography>
                    <div>
                        <TextField
                            variant="standard"
                            placeholder="عنوان خود را وارد کنید"
                            sx={{ width: "100%", marginY: "0.5rem" }}
                        />
                    </div>
                    <div>
                        <TextField
                            variant="filled"
                            placeholder="متن خود را وارد کنید"
                            sx={{ width: "100%", marginY: "0.5rem" }}
                            multiline
                            rows={5}
                        />
                    </div>
                    <div>
                        <FormLabel component="legend">نوع نمایش</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            name="controlled-radio-buttons-group"
                            >
                            <FormControlLabel
                                value="public"
                                control={<Radio size="small" color="success" />}
                                label="عمومی"
                            />
                            <FormControlLabel
                                value="private"
                                control={<Radio size="small" color="error" />}
                                label="خصوصی"
                            />
                        </RadioGroup>
                    </div>
                    <div className={classes.buttons}>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={() => setIsOpenState(false)}>
                            انصراف
                        </Button>
                        <Button variant="outlined" color="success" onClick={() => {setSnackState(true);}}>
                            ذخیره
                        </Button>
                    </div>
                    <CustomSnackbar openState={snackState} setOpenState={setSnackState} />
                </Container>
            </Modal>
        </>
    );
};

export default Add;
